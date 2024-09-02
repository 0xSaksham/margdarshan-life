export default function DeleteButton({
  clickFunction,
  disabled,
  width = "auto", // Default width to auto
  height = "auto", // Default height to auto
  buttonText,
}) {
  return (
    <div
      onClick={!disabled ? clickFunction : null}
      style={{ width: width, height: height }}
      className={`${
        disabled
          ? "bg-red-500/70 cursor-not-allowed"
          : "bg-red-500 hover:bg-red-400 cursor-pointer"
      } transition-all duration-200 rounded-2xl flex justify-center items-center font-medium text-white px-4 py-2 text-base md:text-lg lg:text-xl`}
    >
      {buttonText}
    </div>
  )
}


// Copy directly:
{
  /* <DeleteButton
clickFunction={}
         disabled={false}
         width={"45%"}
         height={"40px"}
         buttonText={"Delete"}
       /> */
}
