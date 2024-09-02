import { useEffect, useRef, useState } from "react";
import Croppie from "croppie";
import "croppie/croppie.css";
import PrimaryButton from "@/components/buttons/primary_button";

const ImageCropper = ({ selectedImageBase64String, handlePfpChange }) => {
  const croppieRef = useRef(null);
  const croppieInstance = useRef(null);
  const firstRender = useRef(0);
  const [croppedImage, setCroppedImage] = useState(null);

  useEffect(() => {
    const initializeCroppie = () => {
      if (croppieInstance.current) {
        croppieInstance.current.destroy(); // Destroy previous instance if any
      }

      const viewportSize = window.innerWidth > 768 ? 200 : 150;
      const boundarySize = window.innerWidth > 768 ? 300 : 250;

      croppieInstance.current = new Croppie(croppieRef.current, {
        enableExif: true,
        viewport: {
          width: viewportSize,
          height: viewportSize,
          type: "circle",
        },
        boundary: {
          width: boundarySize,
          height: boundarySize,
        },
      });

      if (selectedImageBase64String) {
        croppieInstance.current.bind({
          url: selectedImageBase64String,
        });
      }
    };

    initializeCroppie();

    window.addEventListener("resize", initializeCroppie); // Reinitialize on window resize

    return () => {
      window.removeEventListener("resize", initializeCroppie);
      if (croppieInstance.current) {
        croppieInstance.current.destroy();
      }
    };
  }, [selectedImageBase64String]);

  const handleCrop = async () => {
    try {
      const croppedImage = await croppieInstance.current.result({
        type: "base64",
        size: "viewport",
      });

      setCroppedImage(croppedImage);
      handlePfpChange(croppedImage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center px-4 py-6">
      {selectedImageBase64String && (
        <div
          id="upload-demo"
          ref={croppieRef}
          className="w-full max-w-sm"
        ></div>
      )}
      <PrimaryButton
        clickFunction={handleCrop}
        disabled={!selectedImageBase64String}
        width="100%"
        height="40px"
        buttonText="Done"
      />
    </div>
  );
};

export default ImageCropper;
