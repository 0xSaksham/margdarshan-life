export default function DeleteButton({
  clickFunction,
  disabled,
  width,
  height,
  buttonText,
}) {
  return (
    <div
      onClick={!disabled ? clickFunction : null}
      style={{ width: width, height: height }}
      className={
        (disabled
          ? "bg-red-500/70 hover:cursor-default"
          : "hover:cursor-pointer hover:bg-red-400") +
        ` transition-all duration-100 rounded-2xl flex justify-center font-medium text-white items-center bg-red-500`
      }
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
