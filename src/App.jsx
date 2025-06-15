// src/App.jsx
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Box, Typography, CssBaseline, Container } from '@mui/material'; // Import Container
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import theme from './theme';
import klaLogo from './assets/kla-logo.png';
import NavigationTabs from './components/NavigationTabs';
import BuyersKpiAnalysis from './components/BuyersKpiAnalysis';
import OorAnalysis from './components/OORAnalysis';
import CostCenterAnalysis from './components/CostCenterAnalysis';
import LinksPage from './components/LinksPage';

function App() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (newTab) => {
    setCurrentTab(newTab);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        
        {/* THIS CONTAINER WRAPS AND WIDENS EVERYTHING */}
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, py: 3 }}>
          {/* Header */}
          <Box component="header" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 6 }}>
              <img src={klaLogo} alt="KLA Logo" style={{ height: '40px' }} />

          </Box>

          {/* Main Content Area */}
          <Box component="main" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h4" gutterBottom>
                Analytics Dashboard
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 4 }}>
                Select your analysis type and configure the parameters to generate insights
              </Typography>
            </Box>

            <NavigationTabs currentTab={currentTab} onTabChange={handleTabChange} />
            
            {/* All content cards will now appear inside this wider area */}
            {currentTab === 0 && <BuyersKpiAnalysis />}
            {currentTab === 1 && <OorAnalysis />}
            {currentTab === 2 && <CostCenterAnalysis />}
            {currentTab === 3 && <LinksPage />}
          </Box>
          
          {/* Footer */}
          <Box component="footer" sx={{ mt: 'auto', pt: 4, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                  KLA
              </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;