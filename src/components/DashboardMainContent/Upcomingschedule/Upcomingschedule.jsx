import React from "react";
import { Box, Grid } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import CustomTypography from "../../Common/Typography"; 
import  AppointmentCard  from "../../Common/AppointmentCard"; 

const scheduleData = [
  {
    day: "Thursday",
    appointments: [
      { time: "11:00 AM", label: "Health checkup complete", icon: <AccessibilityNewIcon /> },
      { time: "2:00 PM", label: "Ophthalmologist", icon: <VisibilityIcon /> },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      { time: "12:00 AM", label: "Cardiologist", icon: <FavoriteIcon /> },
      { time: "4:00 PM", label: "Neurologist", icon: <FavoriteIcon /> },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <Box p={3}>
      <CustomTypography variant="h6" fontWeight="bold" mb={2}>
        The Upcoming Schedule
      </CustomTypography>
      {scheduleData.map((dayBlock, index) => (
        <Box key={index} mb={3}>
          <CustomTypography variant="subtitle1" gutterBottom>
            On {dayBlock.day}
          </CustomTypography>
          <Grid container spacing={2}>
            {dayBlock.appointments.map((appt, idx) => (
              <Grid item xs={12} sm={6} md={6} key={idx}>
                <AppointmentCard
                  icon={appt.icon}
                  label={appt.label}
                  time={appt.time}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default UpcomingSchedule;
