import React from 'react';
import {
  Card, CardContent, Typography, Box, List, ListItem, ListItemText, Link as MuiLink, Divider
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import LaunchIcon from '@mui/icons-material/Launch';

function Links() {
  const links = [
    { name: 'Walla!', url: 'https://www.walla.co.il' },
    { name: 'eBay', url: 'https://www.ebay.com' },
    { name: 'KLA Official Site', url: 'https://www.kla.com' }
  ];

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <LinkIcon sx={{ mr: 1 }} />
          <Typography variant="h5" component="div">
            Useful Links
          </Typography>
        </Box>
        <List>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <ListItem
                secondaryAction={
                  <LaunchIcon color="primary" fontSize="small" />
                }
              >
                <ListItemText
                  primary={
                    <MuiLink href={link.url} target="_blank" rel="noopener noreferrer" underline="hover">
                      {link.name}
                    </MuiLink>
                  }
                />
              </ListItem>
              {index < links.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Links;