"use client"
import logo from "@/public/logo.svg"
import { usePathname } from "next/navigation"
import {
  Bolt,
  Gauge,
  House,
  IndianRupee,
  MessageCircleQuestion,
  MessagesSquare,
  Sun,
  Video,
  WandSparkles,
} from "lucide-react"
import CustomSwitch from "./custom-switch"
import { ThemeContext } from "@/context/theme"
import Image from "next/image"
import { useContext } from "react"
import Link from "next/link"

export default function MentorSidebar() {
  const { isLightTheme, updateTheme } = useContext(ThemeContext)
  const textColor = isLightTheme ? "text-black" : "text-white"
  const selectedIconColor = "text-white"
  const iconColor = isLightTheme ? "black" : "#a0a8ff"

  const pathname = usePathname()

  return (
    <div
      id="sidebar"
      className={
        (isLightTheme ? "bg-[#F7F8FC]" : "bg-[#09090a]") +
        " hidden overflow-hidden sm:flex sm:w-[90px]  lg:min-w-[250px]  p-5 h-[100vh] flex-col border-white/20 border-r-[1px] shadow-black/20 shadow-lg stroke-white stroke-2"
      }
    >
      <div className="flex items-center gap-3">
        <Image src={logo} alt="logo" width={40} height={40} />
        <div className="hidden lg:flex flex-col">
          <span className={`${textColor} text-lg font-bold`}>Margdarshan</span>
          <span className={`${textColor} text-xs font-medium`}>
            &quot;Connect. Learn. Thrive.&quot;
          </span>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div className="mt-12 flex flex-col gap-7">
          <span className={`${textColor} font-medium text-sm`}>MENU</span>
          <div
            className={`${textColor} w-full flex flex-col items-center lg:items-start lg:ml-5 gap-2 text-sm`}
          >
            <Link
              href="/mentor/dashboard"
              className={
                pathname === "/mentor/dashboard"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[50px] lg:w-[90%] rounded-full h-[50px] lg:p-3 lg:rounded-2xl justify-center lg:justify-normal items-center gap-3`
                  : "flex w-[90%] h-[50px] lg:p-3 rounded-2xl items-center gap-3 justify-center lg:justify-normal"
              }
            >
              <Gauge
                color={
                  pathname === "/mentor/dashboard"
                    ? selectedIconColor
                    : iconColor
                }
              />
              <span className="hidden lg:inline">Dashboard</span>
            </Link>

            <Link
              href="/mentor/earnings"
              className={
                pathname === "/mentor/earnings"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[50px] lg:w-[90%] rounded-full h-[50px] lg:p-3 lg:rounded-2xl items-center gap-3 justify-center lg:justify-normal`
                  : "flex w-[90%] h-[50px] lg:p-3 rounded-2xl items-center gap-3 justify-center lg:justify-normal"
              }
            >
              <IndianRupee
                color={
                  pathname === "/mentor/earnings"
                    ? selectedIconColor
                    : iconColor
                }
              />
              <span className="hidden lg:inline">Earnings</span>
            </Link>

            <Link
              href="/mentor/inbox"
              className={
                pathname === "/mentor/inbox"
                  ? `${selectedIconColor} bg-[#4956F4] flex w-[50px] lg:w-[90%] rounded-full h-[50px] lg:p-3 lg:rounded-2xl items-center gap-3 justify-center lg:justify-normal`
                  : "flex w-[90%] h-[50px] lg:p-3 rounded-2xl items-center gap-3 justify-center lg:justify-normal"
              }
            >
              <MessagesSquare
                color={
                  pathname === "/mentor/inbox" ? selectedIconColor : iconColor
                }
              />
              <span className="hidden lg:inline">Inbox</span>
            </Link>
          </div>
          <div className="flex flex-col gap-7">
            <span className={`${textColor} font-medium text-sm`}>TOOLS</span>
            <div
              className={`${textColor} w-full flex flex-col items-center lg:items-start lg:ml-5 gap-2 text-sm`}
            >
              <Link
                href="/settings"
                className={
                  pathname === "/settings"
                    ? `${selectedIconColor} bg-[#4956F4] flex w-[50px] lg:w-[90%] rounded-full h-[50px] lg:p-3 lg:rounded-2xl items-center gap-3 justify-center lg:justify-normal`
                    : "flex w-[90%] h-[50px] lg:p-3 rounded-2xl items-center gap-3 justify-center lg:justify-normal"
                }
              >
                <Bolt
                  color={
                    pathname === "/settings" ? selectedIconColor : iconColor
                  }
                />
                <span className="hidden lg:inline">Settings</span>
              </Link>
              <Link
                href="/help"
                className={
                  pathname === "/help"
                    ? `${selectedIconColor} bg-[#4956F4] flex w-[50px] lg:w-[90%] rounded-full h-[50px] lg:p-3 lg:rounded-2xl items-center gap-3 justify-center lg:justify-normal`
                    : "flex w-[90%] h-[50px] lg:p-3 rounded-2xl items-center gap-3 justify-center lg:justify-normal"
                }
              >
                <MessageCircleQuestion
                  color={pathname === "/help" ? selectedIconColor : iconColor}
                />
                <span className="hidden lg:inline">Help</span>
              </Link>
            </div>
          </div>
        </div>

        <div className={`flex items-center gap-3 ${textColor} `}>
          <Sun color={iconColor} className="text-sm hidden lg:inline" />
          <span className="text-sm hidden lg:inline">Light Mode</span>
          <CustomSwitch isLightTheme={isLightTheme} updateTheme={updateTheme} />
        </div>
      </div>
    </div>
  )
}
