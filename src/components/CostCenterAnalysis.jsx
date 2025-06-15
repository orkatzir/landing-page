// src/components/CostCenterAnalysis.jsx
import React from 'react';
import {
  Paper, Box, Typography, Button, Stack, TextField, Link as MuiLink
} from '@mui/material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function CostCenterAnalysis() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        mt: 4,
        width: '100%',

        border: '1px solid #dee2e6',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        textAlign: 'left',
      }}
    >
      {/* Card Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 1.5, bgcolor: 'primary.main', borderRadius: '12px', display: 'inline-flex' }}>
            <RequestQuoteIcon sx={{ color: 'white' }} />
          </Box>
          <Box>
            <Typography variant="h6">Cost Center Analysis</Typography>
            <Typography variant="body2" color="text.secondary">
              Analyze data by cost center or purchase group
            </Typography>
          </Box>
        </Box>
        <MuiLink href="#" underline="hover" sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>
            Column to text
        </MuiLink>
      </Box>

      {/* Form Section */}
      <Stack spacing={3}>
        <TextField 
            label="Cost Centers" 
            variant="outlined" 
            fullWidth 
            helperText="Enter one or more cost centers, separated by commas."
        />
        <TextField 
            label="Purchase Group" 
            variant="outlined" 
            fullWidth
            helperText="Enter a specific purchase group to filter the analysis."
        />
      </Stack>

      {/* Action Button */}
      <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
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
          Run Cost Center Analysis
        </Button>
      </Box>
    </Paper>
  );
}

export default CostCenterAnalysis;