import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";

const AppointmentCard = ({ icon, label, time, bgColor = "#f5f7ff", iconColor = "#3f51b5" }) => {
  return (
    <Card elevation={3} sx={{ borderRadius: 3, p: 2 , backgroundColor: "#f5f7ff" }}>
      <Box display="flex" alignItems="center">
        <Avatar sx={{ bgcolor: bgColor, color: iconColor, mr: 2 }}>
          {icon}
        </Avatar>
        <Box>
          <Typography variant="body1" fontWeight={600}>
            {label}
          </Typography>
          <Typography variant="caption" color="textSecondary">
            {time}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};

export default AppointmentCard;
