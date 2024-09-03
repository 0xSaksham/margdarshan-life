// src/app/mentors.jsx
"use client"
import { useState } from "react"
import { Search } from "lucide-react"

import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import MentorCard from "./components/MentorCard"

// Example profile picture
// import randomProfilePic from "@/public/randomProfilePic.jpg"; // Replace with an actual image

export default function Mentors() {
  const [searchQuery, setSearchQuery] = useState("")

  const randomProfilePic =
    "https://www.propeers.in/_next/image?url=https%3A%2F%2Fcdn.propeers.in%2Fnon-avatar64aa81b6db1fbc50c6ccea9b1704282983850&w=128&q=100"

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log("Searching for:", searchQuery)
  }

  const mentors = [
    {
      name: "John Doe",
      username: "johndoe",
      profilePic: randomProfilePic,
      position: "Senior Software Engineer at Tech Innovators",
      experience: 10,
      previousCompanies: ["Google", "Facebook"],
      skills: ["React", "Node.js", "AWS", "Python"],
      id: 1,
    },
    // Add more mentor objects here
  ]

  return (
    <div className="h-screen min-h-screen text-black p-6">
      <h1 className="text-3xl font-bold mb-6">Mentors</h1>

      <form
        onSubmit={handleSearchSubmit}
        className="mb-8 flex items-center space-x-4"
      >
        <div className="w-full flex items-center gap-2">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search mentors by name, skills, companies, designation..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full py-4 px-5 bg-white text-black rounded-full"
            />
            <button
              type="submit"
              className="absolute right-5 top-1/2 transform -translate-y-1/2 text-black"
            >
              <Search />
            </button>
          </div>
          <FormControl variant="outlined" className="w-48">
            <InputLabel id="sort-select-label">Sort By</InputLabel>
            <Select
              labelId="sort-select-label"
              id="sort-select"
              label="Sort By"
              // value={sortBy}
              // onChange={handleSortChange}
            >
              <MenuItem value="price-asc">Price: Low to High</MenuItem>
              <MenuItem value="price-desc">Price: High to Low</MenuItem>
              <MenuItem value="experience-asc">
                Experience: Low to High
              </MenuItem>
              <MenuItem value="experience-desc">
                Experience: High to Low
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </form>

      {/* Mentor Cards */}
      <div className="flex flex-col gap-4">
        {mentors.map((mentor, index) => (
          <MentorCard key={index} mentor={mentor} />
        ))}
      </div>
    </div>
  )
}
