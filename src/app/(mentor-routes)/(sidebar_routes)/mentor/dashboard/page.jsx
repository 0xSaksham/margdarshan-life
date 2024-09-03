"use client"

import { useState, useEffect } from "react"
import {
  Users,
  Clock,
  GraduationCap,
  CalendarCheck,
  Bot,
  Video,
  MessageCircle,
  IndianRupee,
} from "lucide-react"
import PrimaryButton from "@/components/buttons/primary_button"
import StatCard from "@/app/(navbar-routes)/dashboard/components/status_card"
import MentorGreetings from "./components/mentor_greetings"
import TransactionsChart from "./components/transactions_chart"
import MentorEarningsCard from "./components/earning_select"

export default function Home() {
  const [mentorStats, setMentorStats] = useState({
    sessionsTaken: 0,
    totalHours: 0,
    totalEarnings: 0,
    upcomingSessions: 0,
  })

  useEffect(() => {
    setMentorStats({
      sessionsTaken: 12,
      totalHours: 18,
      totalEarnings: "₹50,000",
      upcomingSessions: 2,
    })
  }, [])

  return (
    <div className="px-4 py-8 flex flex-col h-full gap-4">
      <MentorGreetings rating={4.5} />
      <div className="flex flex-row gap-8 h-full justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <StatCard
              titleColor="text-gray-500"
              icon={<Users className="text-blue-500" size={30} />}
              title="Sessions Taken"
              value={mentorStats.sessionsTaken}
            />
            <StatCard
              titleColor="text-gray-500"
              icon={<CalendarCheck className="text-orange-500" size={30} />}
              title="Upcoming Sessions"
              value={mentorStats.upcomingSessions}
            />
          </div>
          <div className="flex flex-row gap-4">
            <StatCard
              titleColor="text-gray-500"
              icon={<IndianRupee className="text-purple-500" size={30} />}
              title="Hours Taught"
              value={mentorStats.totalHours}
            />
            <StatCard
              titleColor="text-gray-500"
              icon={<IndianRupee className="text-orange-500" size={30} />}
              title="Total Earnings"
              value={mentorStats.totalEarnings}
            />
          </div>
          <div className="h-full w-full bg-white mb-4 rounded-3xl shadow-lg shadow-gray-300 flex flex-col">
            <TransactionsChart />
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4 bg-white shadow-lg shadow-gray-300 p-6 rounded-3xl w-full ">
          <h1 className="text-2xl font-bold mb-6">Upcoming Sessions</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Video className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web Development Basics</h3>
                  <p className="text-sm text-gray-600">with John Doe</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Today, 2:00 PM</p>
                <p className="text-sm text-gray-600">Duration: 1h</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Advanced JavaScript</h3>
                  <p className="text-sm text-gray-600">with Swayam Bansal</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">Tomorrow, 10:00 AM</p>
                <p className="text-sm text-gray-600">Duration: 1.5h</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-xl">
              <p className="text-lg font-medium text-gray-500">
                Thats all for now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
