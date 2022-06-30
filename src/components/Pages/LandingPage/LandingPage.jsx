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
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



// CUSTOM COMPONENTS
import RegisterForm from '../../Auth/RegisterForm/RegisterForm';
import LoginForm from '../../Auth/LoginForm/LoginForm';

function LandingPage() {
  const [heading, setHeading] = useState('Hello! ');
  const history = useHistory();
  const [value, setValue] = useState('0');
  const onLogin = (event) => {
    history.push('/login');
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container">


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

        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} >
            <Tab label="Sign In" value="0" />
            <Tab label="Sign Up" value="1" />
          </TabList>
        </Box>
        <TabPanel value="0">
        <LoginForm />
        </TabPanel>
        <TabPanel value="1">
          <RegisterForm />
        </TabPanel>
      </TabContext>
    </Box>


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
