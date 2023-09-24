import React from 'react';
import './App.css';
import SearchNavigation from './SearchNavigation';
import Typography from '@mui/material/Typography';
import Footer from './footer';

const githubLogoStyle = {
  width: '80px', 
  height: '80px', 
  display: 'inline-block', 
  verticalAlign: 'middle', 
  marginLeft: '10px', 
  marginBottom: '10px', 
  marginTop: '10px', 

};

const titleStyle = {
  fontFamily: 'Poppins', 
  fontWeight: 600,
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
        <Typography variant="h4" component="div" style={titleStyle}>
          GITHUB USER DISCOVERER
          <img
            src="https://github.com/fluidicon.png" 
            alt="Github Logo"
            style={githubLogoStyle}
          />
        </Typography>
        <SearchNavigation/>
        <hr />
        </div>

        <Footer />

      </header>
    </div>
  );
}

export default App;
