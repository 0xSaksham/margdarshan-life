export default function SecondaryButton({
  clickFunction,
  width,
  height,
  buttonText,
}) {
  return (
    <div
      onClick={clickFunction}
      style={{ width: width, height: height }}
      className={`hover:cursor-pointer hover:bg-[#4956F4]/20 transition-all duration-100 rounded-2xl flex justify-center items-center font-medium bg-transparent`}
    >
      {buttonText}
    </div>
  )
}

// Copy directly:
{
  /* <SecondaryButton
clickFunction={}
         width={"45%"}
         height={"40px"}
         buttonText={"Cancel"}
       /> */
}
