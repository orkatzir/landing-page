// src/components/OorAnalysis.jsx
import React from 'react';
import {
  Box, Typography, Button, Paper, FormControl, Select, MenuItem, List, ListItem, ListItemIcon, 
  ListItemText, Stack, Avatar, useTheme
} from '@mui/material';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import CircleIcon from '@mui/icons-material/Circle';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

// --- MOCK DATA FOR THE NEW DROPDOWNS ---
const buyers = [
  { id: 10, name: 'John Doe', role: 'Senior Buyer', avatar: 'JD' },
  { id: 20, name: 'Jane Smith', role: 'Procurement Specialist', avatar: 'JS' },
  { id: 30, name: 'Peter Jones', role: 'Category Manager', avatar: 'PJ' },
];

const scms = [
  { id: 10, name: 'SCM A', role: 'Supply Chain Manager', avatar: 'A' },
  { id: 20, name: 'SCM B', role: 'Logistics Head', avatar: 'B' },
  { id: 30, name: 'SCM C', role: 'Operations Lead', avatar: 'C' },
];

function OorAnalysis() {
  const theme = useTheme();
  const [selectedBuyer, setSelectedBuyer] = React.useState('');
  const [selectedScm, setSelectedScm] = React.useState('');

  const handleBuyerChange = (event) => setSelectedBuyer(event.target.value);
  const handleScmChange = (event) => setSelectedScm(event.target.value);

  // Custom function to render the selected value with an avatar
  const renderValue = (selectedId, data, type) => {
    if (!selectedId) {
      return <em style={{ color: theme.palette.text.secondary }}>Select a {type}</em>;
    }
    const selectedItem = data.find((item) => item.id === selectedId);
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Avatar sx={{ width: 28, height: 28, fontSize: '0.8rem', bgcolor: 'secondary.main' }}>
          {selectedItem.avatar}
        </Avatar>
        <Typography variant="body1">{selectedItem.name}</Typography>
      </Box>
    );
  };
  
  const features = [
    'Identify procurement anomalies',
    'Budget variance tracking',
    'Compliance monitoring',
  ];

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'left', mb: 3 }}>
        <Box sx={{ p: 1.5, bgcolor: 'primary.main', borderRadius: '50%', display: 'inline-flex' }}>
          <TrackChangesIcon sx={{ color: 'white' }} />
        </Box>
        <Box>
          <Typography variant="h6">OOR Analysis</Typography>
          <Typography variant="body2" color="text.secondary">
            Configure Out-of-Range analysis parameters for procurement monitoring
          </Typography>
        </Box>
      </Box>

      {/* --- REDESIGNED PARAMETERS CARD --- */}
      <Paper
        variant="outlined"
        sx={{ p: {xs: 2, md: 4}, borderRadius: '12px', borderColor: 'grey.300', mb: 3 }}
      >
        <Stack spacing={4}>
          {/* Buyer Name Select */}
          <FormControl fullWidth>
            <Typography variant="subtitle2" fontWeight="600" gutterBottom>Buyer Name</Typography>
            <Select
              value={selectedBuyer}
              onChange={handleBuyerChange}
              displayEmpty
              renderValue={(selected) => renderValue(selected, buyers, 'buyer')}
            >
              {buyers.map((buyer) => (
                <MenuItem key={buyer.id} value={buyer.id}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.light' }}>{buyer.avatar}</Avatar>
                  </ListItemIcon>
                  <ListItemText primary={buyer.name} secondary={buyer.role} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* SCM Name Select */}
          <FormControl fullWidth>
             <Typography variant="subtitle2" fontWeight="600" gutterBottom>SCM Name</Typography>
            <Select
              value={selectedScm}
              onChange={handleScmChange}
              displayEmpty
              renderValue={(selected) => renderValue(selected, scms, 'SCM')}
            >
              {scms.map((scm) => (
                <MenuItem key={scm.id} value={scm.id}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 32, height: 32, bgcolor: 'secondary.light' }}>{scm.avatar}</Avatar>
                  </ListItemIcon>
                  <ListItemText primary={scm.name} secondary={scm.role} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Stack>
      </Paper>

      {/* Features Card */}
      <Paper
        variant="outlined"
        sx={{ p: {xs: 2, md: 3}, borderRadius: '12px', borderColor: 'grey.300', textAlign: 'left' }}
      >
        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
          OOR Analysis Features:
        </Typography>
        <List>
          {features.map((text) => (
            <ListItem key={text} sx={{ p: 0, mb: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 'auto', mr: 1.5 }}>
                <CircleIcon sx={{ fontSize: '10px', color: 'primary.main' }} />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
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
          Run OOR Analysis
        </Button>
      </Box>
      </Paper>
      
      {/* Action Button - Moved to the bottom */}

    </Box>
  );
}

export default OorAnalysis;