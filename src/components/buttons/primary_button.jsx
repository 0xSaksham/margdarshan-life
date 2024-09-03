export default function PrimaryButton({
  clickFunction,
  disabled,
  width,
  height,
  buttonText,
  rounded = "rounded-2xl",
}) {
  return (
    <div
      onClick={!disabled ? clickFunction : null}
      style={{ width: width, height: height }}
      className={
        (disabled
          ? "bg-[#4956F4]/70 hover:cursor-default"
          : "hover:cursor-pointer hover:bg-[#5e6bfe]") +
        ` transition-all duration-100 ${rounded} flex justify-center text-white items-center font-medium bg-[#4956F4]`
      }
    >
      {buttonText}
    </div>
  )
}

// Copy directly:
{
  /* <PrimaryButton
          clickFunction={}
          disabled={false}
          width="45%"
          height="40px"
          buttonText="Save"
        /> */
}
