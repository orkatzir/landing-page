// src/components/BuyersKpiAnalysis.jsx
import React from 'react';
import { Paper, Box, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CircleIcon from '@mui/icons-material/Circle';

function BuyersKpiAnalysis() {
  const analysisPoints = [
    'Purchase volume trends and patterns',
    'Buyer performance metrics',
    'Cost optimization opportunities',
    'Procurement efficiency scores',
  ];

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mt: 4,
        width: '100%',
        border: '1px solid #dee2e6',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ p: 1.5, bgcolor: 'primary.main', borderRadius: '12px', display: 'inline-flex' }}>
          <LeaderboardIcon sx={{ color: 'white' }} />
        </Box>
        <Box>
          <Typography variant="h6">Buyers KPI Analysis</Typography>
          <Typography variant="body2" color="text.secondary">
            Generate comprehensive KPI reports for buyer performance analysis
          </Typography>
        </Box>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="body1" fontWeight={600} gutterBottom>
          Analysis Includes:
        </Typography>
        <List>
          {analysisPoints.map((text, index) => (
            <ListItem key={index} sx={{ p: 0, mb: 1 }}>
              <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
                <CircleIcon sx={{ fontSize: '8px', color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          startIcon={<PlayArrowIcon />}
          sx={{
            py: 1.5,
            px: 4,
            width: { xs: '100%', sm: 'auto' },
            fontWeight: 600,
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: 'grey.300',
            },
          }}
        >
          Run KPI Analysis
        </Button>
      </Box>
    </Paper>
  );
}

export default BuyersKpiAnalysis;