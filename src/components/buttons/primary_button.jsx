export default function PrimaryButton({
  clickFunction,
  disabled,
  width = 'auto', // Default to 'auto' if not specified
  height = 'auto', // Default to 'auto' if not specified
  buttonText,
  rounded = "rounded-2xl",
}) {
  return (
    <div
      onClick={!disabled ? clickFunction : null}
      style={{ width, height }}
      className={`transition-all duration-100 ${rounded} flex justify-center items-center font-medium text-white bg-[#4956F4]
        ${disabled ? "bg-[#4956F4]/70 cursor-not-allowed" : "hover:bg-[#5e6bfe] cursor-pointer"}
        w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl px-4 py-2
        mx-auto`}
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
