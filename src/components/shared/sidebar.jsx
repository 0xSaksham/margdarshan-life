"use client";
import logo from "@/public/logo.svg";
import { usePathname } from "next/navigation";
import {
  Bolt,
  House,
  MessageCircleQuestion,
  MessagesSquare,
  Sun,
  Video,
  WandSparkles,
} from "lucide-react";
import CustomSwitch from "./custom-switch";
import { ThemeContext } from "@/context/theme";
import Image from "next/image";
import { useContext } from "react";
import Link from "next/link";

export default function Sidebar() {
  const { isLightTheme, updateTheme } = useContext(ThemeContext);
  const textColor = isLightTheme ? "text-black" : "text-white";
  const selectedIconColor = "text-white";
  const iconColor = isLightTheme ? "black" : "#a0a8ff";

  const pathname = usePathname();

  return (
    <div
      id="sidebar"
      className={`hidden overflow-hidden sm:flex sm:w-[70px] lg:w-[250px] p-4 lg:p-5 h-screen flex-col border-r border-white/20 shadow-md ${isLightTheme ? "bg-[#F7F8FC]" : "bg-[#09090a]"}`}
    >
      <div className="flex items-center gap-3 mb-6 lg:mb-8">
        <Image src={logo} alt="logo" width={40} height={40} />
        <div className="hidden lg:flex flex-col">
          <span className={`${textColor} text-lg font-bold`}>Margdarshan</span>
          <span className={`${textColor} text-xs font-medium`}>
            &quot;Connect. Learn. Thrive.&quot;
          </span>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div className="flex flex-col gap-6 lg:gap-7 mb-8 lg:mb-12">
          <span className={`${textColor} font-medium text-sm`}>MENU</span>
          <div className={`flex flex-col items-center lg:items-start gap-2 text-sm ${textColor}`}>
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname === "/dashboard"
                  ? `${selectedIconColor} bg-[#4956F4]`
                  : ""
              }`}
            >
              <House color={pathname === "/dashboard" ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Dashboard</span>
            </Link>

            <Link
              href="/mentors"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname.startsWith("/mentors") ? `${selectedIconColor} bg-[#4956F4]` : ""
              }`}
            >
              <WandSparkles color={pathname.startsWith("/mentors") ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Mentors</span>
            </Link>

            <Link
              href="/sessions"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname === "/sessions" ? `${selectedIconColor} bg-[#4956F4]` : ""
              }`}
            >
              <Video color={pathname === "/sessions" ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Sessions</span>
            </Link>

            <Link
              href="/inbox"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname === "/inbox" ? `${selectedIconColor} bg-[#4956F4]` : ""
              }`}
            >
              <MessagesSquare color={pathname === "/inbox" ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Inbox</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-7">
          <span className={`${textColor} font-medium text-sm`}>TOOLS</span>
          <div className={`flex flex-col items-center lg:items-start gap-2 text-sm ${textColor}`}>
            <Link
              href="/settings"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname === "/settings" ? `${selectedIconColor} bg-[#4956F4]` : ""
              }`}
            >
              <Bolt color={pathname === "/settings" ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Settings</span>
            </Link>

            <Link
              href="/help"
              className={`flex items-center gap-2 lg:gap-3 w-[50px] lg:w-[90%] h-[50px] lg:h-[60px] rounded-full lg:rounded-2xl transition-all duration-300 ${
                pathname === "/help" ? `${selectedIconColor} bg-[#4956F4]` : ""
              }`}
            >
              <MessageCircleQuestion color={pathname === "/help" ? selectedIconColor : iconColor} />
              <span className="hidden lg:inline">Help</span>
            </Link>
          </div>
        </div>

        <div className={`flex items-center gap-2 lg:gap-3 ${textColor} mt-6`}>
          <Sun color={iconColor} className="text-sm hidden lg:inline" />
          <span className="text-sm hidden lg:inline">Light Mode</span>
          <CustomSwitch isLightTheme={isLightTheme} updateTheme={updateTheme} />
        </div>
      </div>
    </div>
  );
}
