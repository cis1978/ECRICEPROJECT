import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { subtle } from 'crypto';

export default function ActionAreaCard({image, title,}) {
  return (
    <Card sx={{ display: 'flex', width: '100%',height:'100%'}}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: '90%', height: '90%', margin: 5  }}
          image={image}
          alt={title}
        />

          <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '750px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          backgroundColor: 'transparent', // 完全に透明な背景
          padding: '8px'
        }}>
          <Typography variant="h4" sx={{ maxWidth: 500, fontSize: '24px', marginBottom: '8px' }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ maxWidth: 500, fontSize: '18px' }}>
            {subtle}
          </Typography>
          
          </Box>
    </CardActionArea>


    </Card>
  );
}

