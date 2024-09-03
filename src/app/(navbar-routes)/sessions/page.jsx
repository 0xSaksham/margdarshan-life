"use client"
import { useState, useEffect } from "react"
import SessionCard from "./session_card"

export default function Sessions() {
  const [sessions, setSessions] = useState([])
  const [open, setOpen] = useState(false)
  useEffect(() => {
    // Simulating an API call
    const fetchSessions = async () => {
      // In a real app, this would be an API call
      const mockSessions = [
        {
          id: 1,
          name: "Batman",
          avatar:
            "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/batman-stands-in-detective-comic-art-by-jason-fabok.jpg",
          description: "Protecting the world from the evils of the night.",
          rating: 4.8,
          date: "March 15, 2024",
          price: 150,
          duration: 60,
          type: "chat",
          notes: "https://www.google.com",
        },
        {
          id: 2,
          name: "Wonder Woman",
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd9-pUbANy8UKJBiEtK6RR68bl1wV7qzgkDg&s",
          description: "Bringing peace and justice to the world.",
          rating: 4.9,
          date: "March 16, 2024",
          price: 180,
          duration: 90,
          type: "video",
        },
        // Add more mock sessions as needed
      ]
      setSessions(mockSessions)
    }

    fetchSessions()
  }, [])

  const handleUpdateRating = (sessionId, newRating) => {
    // Update the rating in your state or send an API request
    setSessions((prevSessions) =>
      prevSessions.map((session) =>
        session.id === sessionId ? { ...session, rating: newRating } : session
      )
    )
    // Optionally, send an API request to update the rating on the server
  }

  return (
    <>
      <div className="mx-auto px-4 py-8 flex flex-col h-full gap-6">
        <h1 className="text-4xl font-bold text-gray-800">Sessions History</h1>
        <div className="flex flex-wrap gap-6">
          {sessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              open={open}
              setOpen={setOpen}
              onUpdateRating={handleUpdateRating}
            />
          ))}
        </div>
      </div>
    </>
  )
}
