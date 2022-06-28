import React from 'react';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import Budgetform from '../budgetform/budgetform';
import Monthincome from '../month/monthincome';
import Loadmonths from '../month/loadmonths';
import Addbudget from '../budgetform/addcategory';
import { indigo } from '@mui/material/colors';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const month = useSelector((store)=> store.month)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({ type: 'FETCH_MONTH', payload: { monthID: month.name } }),
    dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: month.name } }),
    dispatch({ type: 'FETCH_BUDGET', payload: { monthID: month.name } })
  },[])
  return (

    <div className="container">
    
      <Loadmonths />
      <h2 className='welcome'>Welcome, {user.username}!</h2>
      <Monthincome />
      <Budgetform />
      <h3 className='totalleft'> <span>You've spent ${month.total_sum}/${month.monthly_income}</span></h3>
      <h4 className='moneyremaining'>remaining:${month.monthly_income - month.total_sum}</h4>
      <Addbudget/>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;



/* DONT FORGET THIS EITHER
     <input value={gasName} onChange={(e) => setGasName(e.target.value)} /> <input type={'number'} value={gasA} onChange={(e) => setGasA(e.target.value)} />
        <button onClick={() => dispatch({ type: 'ADD_TRANSACTIONS', payload: { monthID: month.name, name: gasName, amount: gasA, budget_id: 1 } })}>add gas</button>
        */






