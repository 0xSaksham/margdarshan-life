"use client"

import { Avatar, Rating } from "@mui/material"
import { Bell, Search } from "lucide-react"

export default function MentorGreetings({ rating }) {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-3xl font-bold">Welcome Back Mentor!</h1>
        <Rating value={rating} readOnly precision={0.5} />
      </div>
      <div className="flex items-center gap-3">
        <div className="bg-white rounded-full p-2 h-[40px] flex items-center justify-center w-[40px]">
          <Search size={20} />
        </div>
        <div className="bg-white rounded-full p-2 h-[40px] flex items-center justify-center w-[40px]">
          <Bell size={20} />
        </div>
        <Avatar
          src="https://cdn.crushon.ai/images/67627fd2-af82-11ee-8cba-a64aa27bd3e7/a48db66b-fd02-425b-96c1-33765764eb20"
          alt="Profile"
        />
        <span className="text-lg font-bold">John Doe</span>
      </div>
    </div>
  )
}
