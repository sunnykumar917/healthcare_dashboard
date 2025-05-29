import React from 'react';
import { Box, Grid } from '@mui/material';
import { LocalHospital, AccessAlarm } from '@mui/icons-material';
import CustomTypography from '../../Common/Typography';
import DayBox from '../../Common/DayBox';
import AppointmentCard from '../../Common/CalendarCard';

const CalendarView = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = [1, 2, 3, 4, 5, 6, 7];
  const appointmentTimes = ['09:00', '11:00', '13:00', '15:00'];

  const appointments = [
    {
      title: 'Dentist',
      icon: <LocalHospital sx={{ fontSize: 12 }} />,
      times: ['09:00 - 10:00', '11:00 - 12:00', '13:00 - 14:00'],
      name: 'Dr. Sunny'
    },
    {
      title: 'Physiotherapy Appointment',
      icon: <AccessAlarm sx={{ fontSize: 12 }} />,
      times: ['09:00 - 10:00', '11:00 - 12:00', '13:00 - 14:00'],
      name: 'Dr. James'
    }
  ];

  return (
    <Box>
      <CustomTypography
        variant="h6"
        fontWeight="bold"
        sx={{ textAlign: 'center', color: '#1976d2' }}
        mb={2}
      >
        Calendar View (October 2021)
      </CustomTypography>

      <Grid container spacing={2}>
        {dates.map((date, idx) => (
          <Grid item xs={1.5} key={idx}>
            <DayBox weekday={weekDays[idx]} date={date} times={appointmentTimes} />
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          {appointments.map((appt, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <AppointmentCard {...appt} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default CalendarView;
