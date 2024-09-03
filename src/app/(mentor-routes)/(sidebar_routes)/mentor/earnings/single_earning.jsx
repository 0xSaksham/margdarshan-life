import { Video, MessageCircle, Star, IndianRupee } from "lucide-react"

const SingleEarning = ({
  type,
  studentName,
  sessionTitle,
  date,
  time,
  rating,
  amount,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl mb-4">
      <div className="flex items-center gap-4">
        <div
          className={`p-3 rounded-full ${
            type === "video" ? "bg-blue-100" : "bg-green-100"
          }`}
        >
          {type === "video" ? (
            <Video className="text-blue-500" size={24} />
          ) : (
            <MessageCircle className="text-green-500" size={24} />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold">{sessionTitle}</h3>
            <div className="flex items-center">
              <Star className="text-yellow-500" size={16} />
              <span className="ml-1 text-gray-700">{rating}</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">with {studentName}</p>
          <p className="text-sm text-gray-600">
            {date}, {time}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <IndianRupee size={18} />
        <p className="text-black text-xl font-bold">{amount}</p>
      </div>
    </div>
  )
}

export default SingleEarning
