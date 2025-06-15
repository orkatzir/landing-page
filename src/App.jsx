// src/App.jsx

import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, CssBaseline, Container, TextField, InputAdornment } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import theme from './theme';
import klaLogo from './assets/kla-logo.png';
import NavigationTabs from './components/NavigationTabs';
import BuyersKpiAnalysis from './components/BuyersKpiAnalysis';
import OorAnalysis from './components/OorAnalysis';
import CostCenterAnalysis from './components/CostCenterAnalysis';
import LinksPage from './components/LinksPage';

function App() {
  const [currentTab, setCurrentTab] = useState(0);
  const [emailUsername, setEmailUsername] = useState(''); 

  const handleTabChange = (newTab) => {
    setCurrentTab(newTab);
  };

  const fullEmail = emailUsername ? `${emailUsername}@kla.com` : '';

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, py: 3 }}>
          
          {/* Header */}
          <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 4 }}>
              <img src={klaLogo} alt="KLA Logo" style={{ height: '32px' }} />
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <MailOutlineIcon color="action" />
                  <Typography variant="body2" color="text.secondary">user@kla.com</Typography>
              </Box>
          </Box>

          {/* Main Content Area */}
          <Box component="main">
            {/* --- CENTER THE HEADER TEXT --- */}
            {/* Change textAlign from 'left' to 'center' */}
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography variant="h4" gutterBottom>
                Analytics Dashboard
              </Typography>
              <Typography variant="subtitle1">
                Select your analysis type and configure the parameters to generate insights
              </Typography>
            </Box>

            <NavigationTabs currentTab={currentTab} onTabChange={handleTabChange} />

            {/* Email Field */}
            {currentTab !== 3 && (
              <Box sx={{ width: '100%', maxWidth: '500px', mt: 4 }}>
                <TextField
                  fullWidth
                  label="Email for Reports"
                  variant="outlined"
                  value={emailUsername}
                  onChange={(e) => setEmailUsername(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MailOutlineIcon color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <Typography variant="body1" color="text.secondary">
                          @kla.com
                        </Typography>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
            )}
            
            {/* Page Content */}
            {currentTab === 0 && <BuyersKpiAnalysis email={fullEmail} />}
            {currentTab === 1 && <OorAnalysis email={fullEmail} />}
            {currentTab === 2 && <CostCenterAnalysis email={fullEmail} />}
            {currentTab === 3 && <LinksPage />}
          </Box>
          
          {/* Footer */}
          <Box component="footer" sx={{ mt: 'auto', pt: 4, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                  Analytics Dashboard • Powered by Advanced KPI Analysis
              </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;