import { Avatar, Badge, Skeleton } from "@mui/material"
import { Pencil } from "lucide-react"
import React from "react"

export default function CustomAvatar({
  name,
  pfp,
  setSelectedImageBase64String,
  setIsSheetOpen,
}) {
  return (
    <div>
      {name ? (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <label
              htmlFor="image-input"
              className="w-[40px] h-[40px] bg-[#4956F4]  border-white/80 border-2 text-white flex justify-center items-center rounded-full hover:cursor-pointer hover:bg-[#4956F4]/80"
            >
              <input
                onChange={(e) => {
                  {
                    const file = e.target.files[0]
                    if (file) {
                      const reader = new FileReader()
                      reader.onloadend = function () {
                        const base64String = reader.result
                        setSelectedImageBase64String(base64String)
                        setIsSheetOpen(true)
                      }
                      reader.readAsDataURL(file)
                    }
                  }
                }}
                type="file"
                name="image"
                id="image-input"
                className="hidden"
                accept="image/*"
              />
              <Pencil size={18} />
            </label>
          }
        >
          <Avatar
            style={{
              backgroundColor: pfp ? null : "#2196f3",
              width: 120,
              height: 120,
            }}
            src={pfp}
          >
            {!pfp && name[0]}
          </Avatar>
        </Badge>
      ) : (
        <Skeleton variant="circular" width={120} height={120} />
      )}
    </div>
  )
}
