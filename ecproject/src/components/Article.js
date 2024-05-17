import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';

export default function ActionAreaCard({ body, title, subtitle }) {
  
  const getImage = () =>{
    if (typeof document !== 'undefined') {
      const div = document.createElement('div');
      div.innerHTML = body;
      return div.querySelector('img').getAttribute('src');
    }
    return '';
  };


  return (
  

    <Card sx={{ display: 'flex', width: '100%', height: '100%' }}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: '90%', height: '90%', }} image={getImage()} alt={title} />
        <Box
          sx={{
            position: 'fixed',
            margin:'40px',
            top: 0,
            left: 0,
            width: '100%',
            height: '750px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            backgroundColor: 'transparent',
            padding: '8px',
          }}
        >
          <Typography variant="h4" sx={{ maxWidth: 500, fontSize: '24px', marginBottom: '8px' }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: 500, fontSize: '18px' }}>
            {subtitle}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}