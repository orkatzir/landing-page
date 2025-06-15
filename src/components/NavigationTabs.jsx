// src/components/NavigationTabs.jsx
import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const navItems = [
  { label: 'Buyers KPI', icon: <LeaderboardOutlinedIcon /> },
  { label: 'OOR', icon: <FactCheckOutlinedIcon /> },
  { label: 'Cost Center', icon: <RequestQuoteOutlinedIcon /> },
  { label: 'Links', icon: <LinkOutlinedIcon /> },
];

function a11yProps(index) {
  // Helper function for accessibility props
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function NavigationTabs({ currentTab, onTabChange }) {
  const handleChange = (event, newValue) => {
    onTabChange(newValue);
  };

  return (
    <Box sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        variant="fullWidth"
        textColor="primary"
        aria-label="analytics dashboard tabs"
        // --- CHANGE 1: Hide the default full-width indicator ---
        TabIndicatorProps={{
          sx: {
            display: 'none',
          },
        }}
      >
        {navItems.map((item, index) => (
          <Tab
            key={item.label}
            icon={item.icon}
            iconPosition="start"
            label={item.label}
            {...a11yProps(index)}
            sx={{
              textTransform: 'none',
              fontWeight: 600,
              position: 'relative', // Needed for the custom indicator positioning
              // --- CHANGE 2: Create a new custom indicator on the selected tab ---
              '&.Mui-selected': {
                color: 'primary.main', // Ensure selected text is colored
              },
              // The ::after pseudo-element becomes our new, bold indicator
              '&.Mui-selected::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '20%', // Start 20% from the left edge of the tab
                width: '60%', // Make the indicator 60% of the tab's width
                height: '3px', // A bolder height
                borderRadius: '3px', // Soft rounded corners
                bgcolor: 'primary.main', // Use the purple theme color
              },
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}

export default NavigationTabs;