"use client"
import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io("http://localhost:5000") // Update with your server URL

export default function Chat() {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState("")

  useEffect(() => {
    socket.on("previousMessages", (msgs) => {
      setMessages(msgs)
    })

    socket.on("chatMessage", (msg) => {
      setMessages((prevMsgs) => [...prevMsgs, msg])
    })

    return () => {
      socket.off("previousMessages")
      socket.off("chatMessage")
    }
  }, [])

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("chatMessage", { username, message })
      setMessage("")
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}: </strong>
            {msg.message}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}
