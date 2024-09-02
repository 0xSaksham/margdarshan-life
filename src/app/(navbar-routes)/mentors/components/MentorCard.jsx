import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Briefcase, Building2, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";

const MentorCard = ({ mentor }) => {
  const router = useRouter();
  return (
    <div className="mb-4 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col sm:flex-row p-4 sm:p-6">
        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6 self-center sm:self-start">
          <Avatar
            src={mentor.profilePic}
            alt="Mentor Profile"
            sx={{ width: 80, height: 80, sm: { width: 100, height: 100 } }}
            className="border-4 border-blue-200"
          />
        </div>
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <Typography
                variant="h6"
                component="h2"
                className="font-bold text-gray-800"
              >
                {mentor.name}
              </Typography>
              <Typography variant="body2" className="text-gray-600">
                @{mentor.username}
              </Typography>
            </div>
            <Button
          variant="contained"
          startIcon={<Calendar className="w-4 h-4" />}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          onClick={() => {
            router.push(`/mentors/book/${mentor.id}`)
          }}
        >
          Book Session
        </Button>
          </div>
          <Typography variant="body1" className="text-gray-700 mb-2 text-center sm:text-left">
            {mentor.position}
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-2 text-center sm:text-left">
            <Briefcase className="w-4 h-4 inline mr-2" />
            {mentor.experience} years experience
          </Typography>
          <Typography variant="body2" className="text-gray-600 mb-3 text-center sm:text-left">
            <Building2 className="w-4 h-4 inline mr-2" />
            Previously at: {mentor.previousCompanies.join(", ")}
          </Typography>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {mentor.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                size="small"
                className="bg-blue-100 text-blue-800"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
