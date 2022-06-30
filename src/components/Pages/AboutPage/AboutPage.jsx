import React from 'react';
import linkedin from '../../App/Cointrace graphics/linkedin logo.png'
import Cointrace from '../../App/Cointrace graphics/CoinTraceLogo.svg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';




function AboutPage() {
  return (
    <>

    <img src={Cointrace} className='logo'></img>
    <div className='instructions'>
        <h2>1. Input your Monthy Income</h2>
        <h2>2. Input Budgets for Categories </h2>
        <h2>3. Click Plus Sign to add Expenses</h2>
        <h2>4. Save Money</h2>
        <Link to="/user">
            <Button style={{ backgroundColor: '#616283', color: "white", padding: ".8em" }}>
                Get Started NOW!
            </Button>
        </Link>
    </div>



</>
  );
}

export default AboutPage;
