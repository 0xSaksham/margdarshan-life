import { Moon, Sun } from "lucide-react"
export default function CustomSwitch({ isLightTheme, updateTheme }) {
  return (
    <div
      onClick={() => updateTheme()}
      className={
        (isLightTheme ? "bg-[#a0a8ff]" : "bg-[#1F1F22]") +
        " hover:cursor-pointer h-[25px] w-[50px] rounded-full relative transition-all duration-200"
      }
    >
      <div
        className={
          (isLightTheme
            ? "translate-x-[25px] bg-[#09090a] text-[#a0a8ff]"
            : "translate-x-0 bg-[#a0a8ff] text-[#09090a]") +
          " absolute flex justify-center items-center h-[25px] w-[25px] rounded-full transition-all duration-200"
        }
      >
        <div
          className={
            "transition-opacity duration-200 " +
            (isLightTheme ? "opacity-100" : "opacity-0 hidden")
          }
        >
          <Moon size={15} />
        </div>
        <div
          className={
            "transition-opacity duration-200 " +
            (isLightTheme ? "opacity-0 hidden" : "opacity-100")
          }
        >
          <Sun size={15} />
        </div>
      </div>
    </div>
  )
}
