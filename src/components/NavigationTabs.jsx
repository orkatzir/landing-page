// src/components/NavigationTabs.jsx
import React from 'react';
import { Paper, Button, Stack } from '@mui/material';
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

function NavigationTabs({ currentTab, onTabChange }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 1,
        border: '1px solid #dee2e6',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <Stack direction="row" spacing={1}>
        {navItems.map((item, index) => (
          <Button
            key={item.label}
            onClick={() => onTabChange(index)}
            variant={currentTab === index ? 'contained' : 'text'}
            startIcon={item.icon}
            sx={{
              p: '8px 140px',
              color: currentTab === index ? 'white' : 'text.primary',
              backgroundColor: currentTab === index ? 'primary.main' : 'transparent',
              '&:hover': {
                backgroundColor: currentTab === index ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
    </Paper>
  );
}

export default NavigationTabs;