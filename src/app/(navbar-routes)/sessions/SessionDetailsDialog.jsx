import { useState } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Avatar,
  Rating,
} from "@mui/material"
import {
  Star,
  MessageSquare,
  Video,
  Calendar,
  DollarSign,
  Clock,
  Paperclip,
  Pencil,
} from "lucide-react"

export default function SessionDetailsDialog({
  session,
  open,
  handleClose,
  onUpdateRating,
}) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedRating, setEditedRating] = useState(session.rating)
  const {
    name,
    avatar,
    description,
    rating,
    date,
    price,
    duration,
    type,
    notes,
  } = session

  const handleEditClick = () => {
    setIsEditing(true)
    setEditedRating(rating)
  }

  const handleRatingChange = (event, newValue) => {
    setEditedRating(newValue)
  }

  const handleSaveRating = () => {
    onUpdateRating(session.id, editedRating)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setEditedRating(rating)
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle className="text-2xl font-bold">
        {name} - Session Details
      </DialogTitle>
      <DialogContent>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex items-center gap-4">
            <Avatar src={avatar} style={{ width: 80, height: 80 }} />
            <div>
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
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
          <div className="flex items-center gap-2 text-blue-600 font-semibold justify-center">
            {type === "chat" ? (
              <MessageSquare size={20} />
            ) : (
              <Video size={20} />
            )}
            <span>{type === "chat" ? "Chat Session" : "Video Session"}</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <p className="font-semibold">Rating:</p>
            {isEditing ? (
              <Rating
                name="session-rating"
                value={editedRating}
                precision={0.5}
                onChange={handleRatingChange}
              />
            ) : (
              <>
                <Rating
                  name="session-rating"
                  value={rating}
                  readOnly
                  precision={0.5}
                />
                <button onClick={handleEditClick} className="ml-2">
                  <Pencil size={16} />
                </button>
              </>
            )}
          </div>
          {notes && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Session Notes:</p>
              <div className="flex items-center gap-2 text-blue-600">
                <Paperclip size={16} />
                <a
                  href={notes}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  View Attachment
                </a>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
      <DialogActions>
        {isEditing ? (
          <>
            <Button onClick={handleCancel} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSaveRating} color="primary">
              Save Changes
            </Button>
          </>
        ) : (
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}
