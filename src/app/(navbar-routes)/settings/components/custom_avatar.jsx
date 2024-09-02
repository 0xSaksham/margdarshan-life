import { Avatar, Badge, Skeleton } from "@mui/material";
import { Pencil } from "lucide-react";
import React from "react";

export default function CustomAvatar({
  name,
  pfp,
  setSelectedImageBase64String,
  setIsSheetOpen,
}) {
  return (
    <div className="flex justify-center items-center">
      {name ? (
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <label
              htmlFor="image-input"
              className="flex justify-center items-center bg-[#4956F4] border-white/80 border-2 rounded-full p-1 cursor-pointer hover:bg-[#4956F4]/80"
              style={{ width: '25px', height: '25px' }}
            >
              <input
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = function () {
                      const base64String = reader.result;
                      setSelectedImageBase64String(base64String);
                      setIsSheetOpen(true);
                    };
                    reader.readAsDataURL(file);
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
              width: '10vw',
              height: '10vw',
            }}
            src={pfp}
            className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
          >
            {!pfp && name[0]}
          </Avatar>
        </Badge>
      ) : (
        <Skeleton
          variant="circular"
          width="10vw"
          height="10vw"
          className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]"
        />
      )}
    </div>
  );
}
