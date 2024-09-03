"use client"
import {
  Avatar,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material"
import {
  MessageCircle,
  Video,
  CalendarIcon,
  ClockIcon,
  HourglassIcon,
  VideoIcon,
  ChevronLeft,
} from "lucide-react"
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3"
import { useState } from "react"
import Link from "next/link"

const MentorBookingPage = () => {
  const mentor = {
    name: "Jane Doe",
    expertise: "Full Stack Development",
    bio: "Experienced developer with 10+ years in the industry.",
    chatPrice: 50,
    videoPrice: 80,
    skills: ["React", "Node.js", "AWS", "Python"],
    pfp: "https://www.propeers.in/_next/image?url=https%3A%2F%2Fcdn.propeers.in%2Fnon-avatar64aa81b6db1fbc50c6ccea9b1704282983850&w=128&q=100",
    blockedTimeRanges: [
      { start: "14:00", end: "16:00" },
      { start: "18:00", end: "19:00" },
      // Add more ranges as needed
    ],
  }
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [sessionDuration, setSessionDuration] = useState(30)
  const [sessionType, setSessionType] = useState("chat")

  const isTimeBlocked = (time) => {
    const [hour, minute] = time.split(":").map(Number)
    const currentTime = hour * 60 + minute

    return mentor.blockedTimeRanges.some(({ start, end }) => {
      const [startHour, startMinute] = start.split(":").map(Number)
      const [endHour, endMinute] = end.split(":").map(Number)

      const startTime = startHour * 60 + startMinute
      const endTime = endHour * 60 + endMinute

      return currentTime >= startTime && currentTime < endTime
    })
  }

  return (
    <div className="mx-auto px-4 py-8 flex h-full flex-col gap-6">
      <div className="flex items-center gap-4">
        <Link href="/mentors">
          <div className="flex justify-center items-center border-2 border-gray-500 hover:border-gray-700 rounded-xl p-2">
            <ChevronLeft className="w-6 h-6" />
          </div>
        </Link>
        <h1 className="text-4xl font-bold text-gray-800">Book your Session</h1>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col justify-between bg-white rounded-3xl shadow-md p-5 h-full min-w-[500px] items-center">
          <Avatar
            style={{
              width: 140,
              height: 140,
              border: "4px solid #3b82f6",
            }}
            src={mentor.pfp}
          />
          <span className="text-2xl font-bold text-gray-800">John Doe</span>

          <div className="flex flex-wrap gap-2">
            {mentor.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                className="bg-blue-100 text-blue-800"
              />
            ))}
          </div>

          <div className="w-full mt-4">
            <TextField
              label="Type your concern"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              className="bg-white"
            />
          </div>
          <FormControl fullWidth className="mt-4">
            <InputLabel id="duration-select-label">Session Duration</InputLabel>
            <Select
              labelId="duration-select-label"
              value={sessionDuration}
              label="Session Duration"
              onChange={(e) => setSessionDuration(e.target.value)}
            >
              <MenuItem value={30}>30 minutes</MenuItem>
              <MenuItem value={60}>1 hour</MenuItem>
              <MenuItem value={90}>1.5 hours</MenuItem>
              <MenuItem value={120}>2 hours</MenuItem>
            </Select>
          </FormControl>
          <div className="w-full mt-4">
            <FormControl component="fieldset" fullWidth>
              <RadioGroup
                aria-label="session-type"
                name="session-type"
                className="flex flex-col gap-2"
                value={sessionType} // Set the value to sessionType state
                onChange={(e) => setSessionType(e.target.value)} // Update sessionType state on change
              >
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      width: "100%",
                    },
                  }}
                  value="chat"
                  control={<Radio />}
                  label={
                    <div className="flex pr-3 items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <MessageCircle className=" text-green-500" />
                        Chat Mentorship
                      </div>
                      <span className="font-bold text-lg">
                        ₹{mentor.chatPrice} per hour
                      </span>
                    </div>
                  }
                  className="w-full bg-gray-100 rounded-md p-2 m-0"
                />
                <FormControlLabel
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      width: "100%",
                    },
                  }}
                  value="video"
                  control={<Radio />}
                  label={
                    <div className="flex pr-3 items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                        <Video className=" text-blue-500" />
                        Video Call Mentorship
                      </div>
                      <span className="font-bold text-lg">
                        ₹{mentor.videoPrice} per hour
                      </span>
                    </div>
                  }
                  className="w-full bg-gray-100 rounded-md p-2 m-0"
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className="flex flex-col justify-between bg-white rounded-3xl shadow-md p-5 w-full items-center">
          <h2 className="text-2xl font-bold mb-4">Select Date and Time</h2>
          <div className="flex gap-4">
            <div className="flex-1">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateCalendar
                  onChange={(newDate) => setSelectedDate(newDate)}
                />
              </LocalizationProvider>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">
                Available Time Slots
              </h3>
              <div className="flex flex-wrap gap-2 max-h-[300px] overflow-y-auto">
                {[...Array(48)].map((_, index) => {
                  const hour = Math.floor(index / 2)
                  const minute = index % 2 === 0 ? "00" : "30"
                  const time = `${hour.toString().padStart(2, "0")}:${minute}`
                  return (
                    <Chip
                      key={time}
                      label={time}
                      onClick={() => setSelectedTime(time)}
                      color={selectedTime === time ? "primary" : "default"}
                      variant={selectedTime === time ? "filled" : "outlined"}
                      disabled={isTimeBlocked(time)} // Disable chip if time is blocked
                    />
                  )
                })}
              </div>
            </div>
          </div>

          <div className="w-full mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-3 px-6 pt-4 text-indigo-700">
              Session Summary
            </h3>
            <div className="p-6 space-y-3">
              <div className="flex items-center">
                <CalendarIcon className="w-5 h-5 text-indigo-500 mr-3" />
                <p className="text-gray-700">
                  <span className="font-medium">Date:</span>{" "}
                  {selectedDate ? selectedDate.toDateString() : "Not selected"}
                </p>
              </div>
              <div className="flex items-center">
                <ClockIcon className="w-5 h-5 text-indigo-500 mr-3" />
                <p className="text-gray-700">
                  <span className="font-medium">Time:</span>{" "}
                  {selectedTime || "Not selected"}
                </p>
              </div>
              <div className="flex items-center">
                <HourglassIcon className="w-5 h-5 text-indigo-500 mr-3" />
                <p className="text-gray-700">
                  <span className="font-medium">Duration:</span>{" "}
                  {sessionDuration} minutes
                </p>
              </div>
              <div className="flex items-center">
                <VideoIcon className="w-5 h-5 text-indigo-500 mr-3" />
                <p className="text-gray-700">
                  <span className="font-medium">Session Type:</span>{" "}
                  {sessionType === "chat" ? "Chat" : "Video Call"}
                </p>
              </div>
            </div>
          </div>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            // onClick={handleBooking}
          >
            Proceed to Payment
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MentorBookingPage
