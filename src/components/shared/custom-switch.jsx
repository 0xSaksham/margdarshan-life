import { Moon, Sun } from "lucide-react";

export default function CustomSwitch({ isLightTheme, updateTheme }) {
  return (
    <div
      onClick={() => updateTheme()}
      className={`flex items-center cursor-pointer h-6 w-12 rounded-full relative transition-all duration-200 
        ${isLightTheme ? "bg-[#a0a8ff]" : "bg-[#1F1F22]"}`}
    >
      <div
        className={`absolute flex items-center justify-center h-6 w-6 rounded-full transition-all duration-200 
          ${isLightTheme ? "translate-x-full bg-[#09090a] text-[#a0a8ff]" : "translate-x-0 bg-[#a0a8ff] text-[#09090a]"}`}
      >
        <div className={`transition-opacity duration-200 ${isLightTheme ? "opacity-100" : "opacity-0"}`}>
          <Moon size={16} />
        </div>
        <div className={`transition-opacity duration-200 ${isLightTheme ? "opacity-0" : "opacity-100"}`}>
          <Sun size={16} />
        </div>
      </div>
    </div>
  );
}
