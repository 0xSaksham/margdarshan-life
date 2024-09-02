"use client";

import { useState, useEffect } from "react";
import {
  Users,
  Clock,
  GraduationCap,
  CalendarCheck,
  Bot,
  Video,
  MessageCircle,
} from "lucide-react";
import Greetings from "./components/greetings";
import PrimaryButton from "@/components/buttons/primary_button";
import StatCard from "./components/status_card";

export default function Home() {
  const [menteeStats, setMenteeStats] = useState({
    sessionsAttended: 0,
    totalHours: 0,
    skillsImproved: 0,
    upcomingSessions: 0,
  });

  useEffect(() => {
    setMenteeStats({
      sessionsAttended: 12,
      totalHours: 18,
      skillsImproved: 5,
      upcomingSessions: 2,
    });
  }, []);

  return (
    <div className="px-4 py-8 flex flex-col h-full gap-4">
      <Greetings />
      <div className="flex flex-col lg:flex-row gap-8 h-full justify-between">
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex flex-col sm:flex-row gap-4">
            <StatCard
              titleColor="text-gray-500"
              icon={<Users className="text-blue-500" size={30} />}
              title="Sessions Attended"
              value={menteeStats.sessionsAttended}
            />
            <StatCard
              titleColor=""
              icon={<Clock className="text-green-500" size={30} />}
              title="Learning Hours"
              value={`${menteeStats.totalHours}h`}
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <StatCard
              titleColor="text-gray-500"
              icon={<GraduationCap className="text-purple-500" size={30} />}
              title="Skills Improved"
              value={menteeStats.skillsImproved}
            />
            <StatCard
              titleColor="text-gray-500"
              icon={<CalendarCheck className="text-orange-500" size={30} />}
              title="Upcoming Sessions"
              value={menteeStats.upcomingSessions}
            />
          </div>
          <div className="h-full w-full bg-white rounded-3xl shadow-lg shadow-gray-300 p-6 flex flex-col">
            <span className="text-xl font-bold">Talk to AI mentor</span>

            <div className="mt-4 flex flex-col items-center">
              <div className="w-24 h-24 bg-[#e0e3ff] rounded-full flex items-center justify-center mb-4">
                <Bot className="text-[#4956F4]" size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Meet Lia</h3>
              <p className="text-gray-600 text-center mb-4">
                Your AI mentor, available 24/7
              </p>
              <PrimaryButton
                // clickFunction={}
                disabled={false}
                width="full lg:w-1/2"
                height="40px"
                buttonText="Talk Now"
                rounded="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-white shadow-lg shadow-gray-300 p-6 rounded-3xl w-full lg:w-1/2">
          <h1 className="text-2xl font-bold mb-6">Upcoming Sessions</h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Video className="text-blue-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Web Development Basics</h3>
                  <p className="text-sm text-gray-600">with John Doe</p>
                </div>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <p className="font-medium">Today, 2:00 PM</p>
                <p className="text-sm text-gray-600">Duration: 1h</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-100 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MessageCircle className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold">Advanced JavaScript</h3>
                  <p className="text-sm text-gray-600">with Swayam Bansal</p>
                </div>
              </div>
              <div className="text-center sm:text-right mt-4 sm:mt-0">
                <p className="font-medium">Tomorrow, 10:00 AM</p>
                <p className="text-sm text-gray-600">Duration: 1.5h</p>
              </div>
            </div>

            <div className="flex items-center justify-center p-4 bg-gray-100 rounded-xl">
              <p className="text-lg font-medium text-gray-500">
                That's all for now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
