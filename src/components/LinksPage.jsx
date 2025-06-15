// src/components/LinksPage.jsx
import React from 'react';
import {
  Paper, Box, Typography, Grid, Card, CardContent, CardActionArea, Link as MuiLink
} from '@mui/material';

// Import relevant icons for our links
import LinkIcon from '@mui/icons-material/Link';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';

// Updated links array to include descriptions and icons
const links = [
  {
    name: 'Walla! News',
    description: 'Leading Israeli news portal.',
    url: 'https://www.walla.co.il',
    icon: <NewspaperIcon sx={{ fontSize: 40 }} color="primary" />
  },
  {
    name: 'eBay Marketplace',
    description: 'Global online shopping & auctions.',
    url: 'https://www.ebay.com',
    icon: <StorefrontIcon sx={{ fontSize: 40 }} color="primary" />
  },
  {
    name: 'KLA Official Site',
    description: 'Corporate information and resources.',
    url: 'https://www.kla.com',
    icon: <CorporateFareIcon sx={{ fontSize: 40 }} color="primary" />
  },
];

function LinksPage() {
  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      {/* Card Header remains consistent with other pages */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, textAlign: 'left', mb: 4 }}>
        <Box sx={{ p: 1.5, bgcolor: 'primary.main', borderRadius: '12px', display: 'inline-flex' }}>
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
      {/* --- I'VE INCREASED THE SPACING HERE --- */}
      <Grid container spacing={8}>
        {links.map((link) => (
          <Grid item xs={12} sm={6} md={4} key={link.name}>
            <Card
              component={MuiLink} // Make the Card itself a link
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