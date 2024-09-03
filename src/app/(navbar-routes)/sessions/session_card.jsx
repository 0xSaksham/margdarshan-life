import { useState } from "react"
import { useRouter } from "next/navigation"
import { Avatar } from "@mui/material"
import {
  Star,
  MessageSquare,
  Video,
  Calendar,
  DollarSign,
  Clock,
} from "lucide-react"
import SessionDetailsDialog from "./SessionDetailsDialog"

export default function SessionCard({ session, onUpdateRating }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const { id, name, avatar, description, rating, date, price, duration, type } =
    session

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleUpdateRating = (sessionId, newRating) => {
    onUpdateRating(sessionId, newRating)
  }

  const handleBookAgain = () => {
    router.push(`/mentors/${id}`)
  }

  return (
    <>
      <div className="w-96 bg-white rounded-3xl shadow-lg shadow-gray-300 p-8 flex flex-col items-center h-full justify-between gap-6">
        <Avatar
          style={{
            width: 140,
            height: 140,
            border: "4px solid #3b82f6",
          }}
          src={avatar}
        />
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
          <p className="text-sm font-medium text-gray-600">{description}</p>
          <div className="flex items-center gap-2 text-yellow-500 font-semibold">
            <Star size={20} fill="currentColor" />{" "}
            <span className="text-lg">{rating}</span>
          </div>
          <div className="flex flex-col items-center gap-2 text-sm font-medium text-gray-700">
            <div className="flex items-center gap-2">
              <Calendar size={16} /> <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign size={16} /> <span>${price}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} /> <span>{duration} min</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            {type === "chat" ? (
              <MessageSquare size={20} />
            ) : (
              <Video size={20} />
            )}
            <span>{type === "chat" ? "Chat Session" : "Video Session"}</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={handleClickOpen}
            className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300"
          >
            View Details
          </button>
          <button
            onClick={handleBookAgain}
            className="bg-green-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-700 transition duration-300"
          >
            Book Again
          </button>
        </div>
      </div>

      <SessionDetailsDialog
        open={open}
        handleClose={handleClose}
        session={session}
        onUpdateRating={handleUpdateRating}
      />
    </>
  )
}
