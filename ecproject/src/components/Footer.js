// Footer.js
import React from 'react';
import { Button } from "@/components/ui/button"
import { green } from '@mui/material/colors';

const Footer = () => {
  return (
    <footer className='footerr'>

      <Button>Click Here </Button>
      <div style={{ textAlign: 'center', padding: '10px 0', color: 'white',fontSize:'20px',  }}>
        © 2024 Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
