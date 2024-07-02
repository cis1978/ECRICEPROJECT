import * as React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { blue } from '@mui/material/colors';

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
  

    <Card sx={{ display: 'flex', width: '90%', height: '90%',border: 'none', boxShadow: 'none',}}>
      <CardActionArea sx={{ display: 'flex' }}>
        <CardMedia component="img" sx={{ width: '93%', height: '95%', }} image={getImage()} alt={title} />
          
        <Box
         sx={{
          position: 'absolute',
          bottom: 0, // 下部に配置
          left: 0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '8px 0' // 下部に少しパディングを追加
        }}
        >
          <Typography
            variant="h4"
            sx={{
              width: '100%',
              maxWidth: 500,
              fontSize: '20px',
              marginBottom: '8px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明の黒い背景
              color: 'white', // 文字色を白に設定
              padding: '4px 8px', // パディングを追加して背景を広げる
              borderRadius: '4px', // 角を丸める
              
            }}
          >
            {title}
          </Typography>
        </Box>
        
       
      </CardActionArea>
         
    </Card>
  );
}