// Footer.js

import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#000000',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const iconStyle = {
  color: '#fff',
  fontSize: '24px', 
  marginLeft: '5px', 
  marginRight: '20px', 

};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <Typography variant="body1">
        &copy; {new Date().getFullYear()} Github User Discoverer. All rights reserved.
      </Typography>
      {/* Social Icons */}
      <div>
        <a href={"https://github.com/danielandreitubu"} target="_blank" rel="noopener noreferrer" title='Github'>
        <IconButton aria-label="GitHub" color="inherit">
          <GitHubIcon style={iconStyle} />
        </IconButton>
        </a>
        <a href={"https://www.facebook.com/tubudanielandrei/"} target="_blank" rel="noopener noreferrer" title='Facebook'>
        <IconButton aria-label="Facebook" color="inherit">
          <FacebookIcon style={iconStyle} />
        </IconButton>
        </a>
        <a href={"https://www.instagram.com/danielandreidt/"} target="_blank" rel="noopener noreferrer" title='Instagram'>
        <IconButton aria-label="Instagram" color="inherit">
          <InstagramIcon style={iconStyle} />
        </IconButton>
        </a>       
         <a href={"https://www.linkedin.com/in/daniel-andrei-tubu-1b86b9203/"} target="_blank" rel="noopener noreferrer" title='LinkedIn'>
        <IconButton aria-label="LinkedIn" color="inherit">
          <LinkedIn style={iconStyle} />
        </IconButton>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
