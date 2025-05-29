import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import DashboardOverview from "./Dashboardoverview/Dashboardoverview";
import CalendarView from "./Calendarview/Calendarview";
import UpcomingSchedule from "./Upcomingschedule/Upcomingschedule";
import ActivityFeed from "./Activityfeed/Activityfeed";
import { sampleSchedule } from "../../Data/sampleSchedule";

const DashboardMainContent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={8}>
          <Paper
            elevation={0} // remove shadow
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 0,
              gap: 2,
            }}
          >
            <Box
              sx={{
                p: 2,
                flexGrow: 1,
                backgroundColor: 'transparent', 
                borderRadius: 0
              }}
            >
              <DashboardOverview />
            </Box>

            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: '#f7fafe',
              }}
            >
              <ActivityFeed />
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper
            elevation={0}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              p: 2,
              justifyContent: "space-between",
              backgroundColor: '#f7fafe',
            }}
          >
            <Box>
              <CalendarView />
            </Box>
            <Box>
              <UpcomingSchedule scheduleData={sampleSchedule} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardMainContent;
