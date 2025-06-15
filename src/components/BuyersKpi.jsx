import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';

function BuyersKpi() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LeaderboardIcon sx={{ mr: 1 }} />
          <Typography variant="h5" component="div">
            Buyers KPI
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          Click the button below to generate the Key Performance Indicator report for buyers.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Run KPI</Button>
      </CardActions>
    </Card>
  );
}

export default BuyersKpi;