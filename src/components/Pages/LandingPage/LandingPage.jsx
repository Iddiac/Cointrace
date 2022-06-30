import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { purple, red, blueGrey } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import ChevronRightTwoToneIcon from '@mui/icons-material/ChevronRightTwoTone';


// CUSTOM COMPONENTS
import RegisterForm from '../../Auth/RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <Box sx={{ width: '100%', maxWidth: 700 }}>
            <Typography mt={'5%'} ml={'15%'} color={blueGrey[800]} variant="h4" gutterBottom component="div">
             <strong> Cost and Budget tracking software for Savvy Indivisuals Who Want to Achive Financial Freedom </strong>
            </Typography>
            <Typography ml={'15%'} color={blueGrey[800]} variant="subtitle1" gutterBottom component="div">
            There are endless ways to spend money. You deserve better tools to save your money. That's our mission!
            </Typography>
            <Link to="/about">
            <Typography ml={'15%'} color={blueGrey[800]} variant="subtitle1" gutterBottom component="div">
              <ChevronRightTwoToneIcon />About
            </Typography>
        </Link>
          </Box>


        </div>
        <div className="grid-col grid-col_4">
        <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
