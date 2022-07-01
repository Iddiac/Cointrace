import React from 'react';
import linkedin from '../../App/Cointrace graphics/linkedin logo.png'
import Cointrace from '../../App/Cointrace graphics/CoinTraceLogo.svg'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Loadmonths from '../month/loadmonths';





function AboutPage() {
  return (
    <>

    <img src={Cointrace} className='logo'></img>
    <div className='instructions'>
        <h2>1. Input your Monthy Income</h2>
        <h2>2. Input Budgets for Each Categories </h2>
        <h2>3. Click Plus Sign to add Expenses</h2>
        <h2>4. Save Money</h2>
      <h2 className='promotion'>JUST CLICK BELOW!</h2>
      <br />
        <Loadmonths />
     
    </div>



</>
  );
}

export default AboutPage;
