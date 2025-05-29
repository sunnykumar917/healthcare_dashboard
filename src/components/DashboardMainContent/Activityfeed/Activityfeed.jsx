import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Box } from "@mui/material";
import CustomTypography from "../../Common/Typography";  
import { data } from "../../../Data/Activityfeed";
const ActivityFeed = () => {
  return (
    <Box>
      <CustomTypography variant="h6" fontWeight="bold" mb={1}>
        Weekly Activity Overview
      </CustomTypography>
      <CustomTypography variant="caption" color="text.secondary" mb={2} display="block">
        Activity breakdown for Appointments, Tasks, and Messages
      </CustomTypography>

      <ResponsiveContainer height={150}>
        <BarChart data={data} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Bar dataKey="appointments" fill="#5A6ACF" radius={[4, 4, 0, 0]} />
          <Bar dataKey="tasks" fill="#00C49F" radius={[4, 4, 0, 0]} />
          <Bar dataKey="messages" fill="#FF8042" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default ActivityFeed;
