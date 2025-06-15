// src/components/LinksPage.jsx
import React from 'react';
import {
  Box, Typography, Grid, Card, CardContent, CardActionArea, Link as MuiLink
} from '@mui/material';

// Import the main icon for the header and the new icons for each card
import LinkIcon from '@mui/icons-material/Link';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'; // <-- Import new icon

// Updated links array with the new dashboard
const links = [
  {
    name: 'Warehouse Issues',
    description: 'Track and manage warehouse incidents and reports.',
    url: '#', // TODO: Replace with your actual URL
    icon: <WarehouseOutlinedIcon sx={{ fontSize: 40 }} color="primary" />
  },
  {
    name: 'QBR Dashboard',
    description: 'Review data for Quarterly Business Reviews.',
    url: '#', // TODO: Replace with your actual URL
    icon: <AssessmentOutlinedIcon sx={{ fontSize: 40 }} color="primary" />
  },
  {
    name: 'Buyers KPI Dashboard',
    description: 'Deep dive into Key Performance Indicators for buyers.',
    url: '#', // TODO: Replace with your actual URL
    icon: <LeaderboardOutlinedIcon sx={{ fontSize: 40 }} color="primary" />
  },
  // --- NEW LINK ADDED HERE ---
  {
    name: 'Spend BI Dashboard',
    description: 'Analyze and visualize company spend data.',
    url: '#', // TODO: Replace with your actual URL
    icon: <MonetizationOnOutlinedIcon sx={{ fontSize: 40 }} color="primary" />
  },
];

function LinksPage() {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'left', mb: 4 }}>
        <Box sx={{ p: 1.5, bgcolor: 'secondary.main', borderRadius: '12px', display: 'inline-flex' }}>
          <LinkIcon sx={{ color: 'white' }} />
        </Box>
        <Box>
          <Typography variant="h6">Helpful Links</Typography>
          <Typography variant="body2" color="text.secondary">
            Quick access to relevant external websites and resources
          </Typography>
        </Box>
      </Box>

      {/* Grid container for the link cards */}
      <Grid container spacing={5}>
        {links.map((link) => (
          // The grid item logic now handles responsive columns
          <Grid item xs={12} sm={6} md={4} lg={3} key={link.name}>
            <Card
              component={MuiLink}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                height: '100%',
                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: 6,
                },
              }}
            >
              <CardActionArea sx={{ height: '100%' }}>
                <CardContent sx={{ textAlign: 'center', p: 3 }}>
                  <Box sx={{ mb: 2 }}>
                    {link.icon}
                  </Box>
                  <Typography variant="h6" component="div" gutterBottom>
                    {link.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {link.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LinksPage;