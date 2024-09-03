"use client";

import { useState } from "react";
import {
  User,
  Bolt,
  Key,
  Briefcase,
  Globe,
  Bell,
  HelpCircle,
  MessageSquare,
  AlertTriangle,
  FileText,
  X,
  LockOpen,
  Shield,
} from "lucide-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Autocomplete,
  Chip,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CustomAvatar from "./components/custom_avatar";
import PrimaryButton from "@/components/buttons/primary_button";
import SecondaryButton from "@/components/buttons/secondary_button";
import ImageCropper from "./components/croppie_image_cropper";
import toast, { Toaster } from "react-hot-toast";
import { mentorSkills } from "@/utilities/skills";

export default function Settings() {
  const [openDialog, setOpenDialog] = useState(null);
  const [profileData, setProfileData] = useState({
    pfp: "data:image/jpeg;base64,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",
    name: "Swayam",
    age: 19,
    country: "India",
    gender: "male",
    mobile: "9876543210",
    email: "swayambansal@outlook.com",
  });

  const [isCropSheetOpen, setIsCropSheetOpen] = useState(false);

  const [selectedImageBase64String, setSelectedImageBase64String] =
    useState(null);

  const handleOpenDialog = (dialogName) => {
    setOpenDialog(dialogName);
  };

  const handleCloseDialog = () => {
    setOpenDialog(null);
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePfpChange = (croppedImage) => {
    setProfileData((prev) => {
      return {
        ...prev,
        ["pfp"]: croppedImage,
      };
    });
    setIsCropSheetOpen(false);
  };

  const handleSaveProfile = () => {
    // Here you would typically send the profileData to your backend API
    // For this example, we'll just log it to the console and close the dialog
    console.log("Saving profile data:", profileData);

    // TODO: Add API call to save profile data
    // Example: await updateProfileAPI(profileData);

    // Close the dialog
    handleCloseDialog();
    toast.success("Profile updated successfully!!");
    // Optionally, show a success message
  };

  return (
    <div className="container mx-auto p-6">
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#4956F4",
              secondary: "white",
            },
          },
        }}
      />
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <Section title="User Settings" icon={<User />}>
        <SettingItem
          onClick={() => handleOpenDialog("profile")}
          icon={<User />}
        >
          Profile Settings
        </SettingItem>
        <SettingItem onClick={() => handleOpenDialog("account")} icon={<Key />}>
          Account Settings
        </SettingItem>
        <SettingItem
          onClick={() => handleOpenDialog("skills")}
          icon={<Briefcase />}
        >
          Skills
        </SettingItem>
      </Section>

      <Section title="Support" icon={<HelpCircle />}>
        <SettingItem
          onClick={() => handleOpenDialog("feedback")}
          icon={<MessageSquare />}
        >
          Submit Feedback
        </SettingItem>
        <SettingItem
          onClick={() => handleOpenDialog("privacyPolicy")}
          icon={<Shield />}
        >
          Privacy Policy
        </SettingItem>
        <SettingItem
          onClick={() => handleOpenDialog("terms")}
          icon={<FileText />}
        >
          Terms & Conditions
        </SettingItem>
      </Section>

      <SettingDialog
        open={openDialog === "profile"}
        onClose={handleCloseDialog}
        title="Profile Settings"
        content={
          <div className="flex flex-col w-[500px] items-center gap-4">
            <Dialog open={isCropSheetOpen} onClose={handleCloseDialog}>
              <DialogTitle>Crop Avatar</DialogTitle>
              <DialogContent>
                {" "}
                <ImageCropper
                  handlePfpChange={handlePfpChange}
                  selectedImageBase64String={selectedImageBase64String}
                />
                {/* Profile form content will go here */}
              </DialogContent>
            </Dialog>
            <CustomAvatar
              setSelectedImageBase64String={setSelectedImageBase64String}
              name="Swayam"
              alt="Profile"
              pfp={profileData.pfp}
              setIsSheetOpen={setIsCropSheetOpen}
            />
            <div className="w-full space-y-4">
              <TextField
                fullWidth
                name="name"
                label="Name"
                variant="outlined"
                size="small"
                value={profileData.name}
                onChange={handleProfileChange}
              />
              <TextField
                fullWidth
                name="age"
                label="Age"
                type="number"
                variant="outlined"
                size="small"
                value={profileData.age}
                onChange={handleProfileChange}
              />
              <TextField
                fullWidth
                name="country"
                label="Country"
                variant="outlined"
                size="small"
                value={profileData.country}
                onChange={handleProfileChange}
              />
              <FormControl fullWidth size="small">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  name="gender"
                  label="Gender"
                  value={profileData.gender}
                  onChange={handleProfileChange}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField
                fullWidth
                name="mobile"
                label="Mobile Number"
                variant="outlined"
                size="small"
                value={profileData.mobile}
                onChange={handleProfileChange}
              />
            </div>
          </div>
        }
        actions={
          <PrimaryButton
            clickFunction={handleSaveProfile}
            disabled={false}
            width="25%"
            height="40px"
            buttonText="Save"
          />
        }
      />
      <SettingDialog
        open={openDialog === "account"}
        onClose={handleCloseDialog}
        title="Account Settings"
        content={
          <div className="flex flex-col w-[500px] gap-4 py-3">
            <TextField
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              size="small"
              value={profileData.email || ""}
              onChange={handleProfileChange}
            />
            <Button
              variant="outlined"
              color="primary"
              startIcon={<LockOpen />}
              // onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </div>
        }
        actions={
          <PrimaryButton
            clickFunction={handleSaveProfile}
            disabled={false}
            width="25%"
            height="40px"
            buttonText="Save"
          />
        }
      />
      <SettingDialog
        open={openDialog === "skills"}
        onClose={handleCloseDialog}
        title="Skills"
        content={
          <div className="flex flex-col w-[500px] gap-4 py-3">
            <Autocomplete
              multiple
              id="skills-autocomplete"
              options={mentorSkills}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Search Skills"
                  placeholder="Type to search..."
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    key={index}
                    variant="outlined"
                    label={option}
                    {...getTagProps({ index })}
                  />
                ))
              }
              onChange={(event, newValue) => {
                setProfileData((prevData) => ({
                  ...prevData,
                  skills: newValue,
                }));
              }}
              value={profileData.skills || []}
            />
          </div>
        }
        actions={
          <PrimaryButton
            clickFunction={handleSaveProfile}
            disabled={false}
            width="25%"
            height="40px"
            buttonText="Save"
          />
        }
      />

      <SettingDialog
        open={openDialog === "feedback"}
        onClose={handleCloseDialog}
        title="Submit Feedback"
        content={
          <div className="flex flex-col w-[500px] gap-4 py-3">
            <TextField
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              label="Your Feedback"
              placeholder="Please share your thoughts, suggestions, or experiences..."
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel id="feedback-type-label">Feedback Type</InputLabel>
              <Select
                labelId="feedback-type-label"
                label="Feedback Type"
                defaultValue=""
              >
                <MenuItem value="general">General Feedback</MenuItem>
                <MenuItem value="bug">Bug Report</MenuItem>
                <MenuItem value="feature">Feature Request</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              variant="outlined"
              label="Email (optional)"
              type="email"
              placeholder="Enter your email if you'd like us to follow up"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="I agree to be contacted about this feedback"
            />
          </div>
        }
        actions={
          <PrimaryButton
            clickFunction={() => {
              // Handle feedback submission here
              console.log("Feedback submitted");
              onClose();
              toast.success("Feedback submitted successfully!");
            }}
            disabled={false}
            width="35%"
            height="40px"
            buttonText="Submit Feedback"
          />
        }
      />
      <SettingDialog
        open={openDialog === "privacyPolicy"}
        onClose={handleCloseDialog}
        title="Privacy Policy"
        content="Read our privacy policy to understand how we collect, use, and protect your data."
      />
      <SettingDialog
        open={openDialog === "terms"}
        onClose={handleCloseDialog}
        title="Terms & Conditions"
        content="Read our terms and conditions."
      />
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SettingItem({ onClick, icon, children }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-3 bg-white hover:bg-gray-50 rounded-lg w-full text-left"
    >
      <div className="bg-gray-100 p-3 rounded-xl mr-3">{icon}</div>
      <span>{children}</span>
    </button>
  );
}

function SettingDialog({ open, onClose, title, content, actions }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{content}</DialogContent>
      <DialogActions>
        <SecondaryButton
          clickFunction={onClose}
          width={"25%"}
          height={"40px"}
          buttonText={"Cancel"}
        />
        {actions}
      </DialogActions>
    </Dialog>
  );
}
