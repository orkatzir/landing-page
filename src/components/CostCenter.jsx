import React from 'react';
import {
  Card, CardContent, CardActions, Typography, Button, Box, TextField, Link, Stack
} from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

function CostCenter() {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center'}}>
            <RequestQuoteIcon sx={{ mr: 1 }} />
            <Typography variant="h5" component="div">
              Cost Center
            </Typography>
          </Box>
          <Link href="#" underline="hover" sx={{ fontSize: '0.875rem' }}>
            Column to text
          </Link>
        </Box>
        <Stack spacing={2}>
          <TextField label="Cost Centers" variant="outlined" fullWidth />
          <TextField label="Purchase Group" variant="outlined" fullWidth />
        </Stack>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Run Cost Center</Button>
      </CardActions>
    </Card>
  );
}

export default CostCenter;