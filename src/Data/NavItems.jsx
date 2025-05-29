import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import BarChartIcon from '@mui/icons-material/BarChart';
import ScienceIcon from '@mui/icons-material/Science';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';

export const topNavItems = [
  { text: 'Dashboard', icon: <DashboardIcon /> },
  { text: 'History', icon: <HistoryIcon /> },
  { text: 'Calendar', icon: <CalendarTodayIcon /> },
  { text: 'Appointments', icon: <EventAvailableIcon /> },
  { text: 'Statistics', icon: <BarChartIcon /> },
  { text: 'Tests', icon: <ScienceIcon /> },
  { text: 'Chat', icon: <ChatIcon /> },
  { text: 'Support', icon: <SupportAgentIcon /> },
];

export const settingItem = {
  text: 'Settings',
  icon: <SettingsIcon />,
};
