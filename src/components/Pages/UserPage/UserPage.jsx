import React from 'react';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import Budgetform from '../budgetform/budgetform';
import Monthincome from '../month/monthincome';
import Loadmonths from '../month/loadmonths';
import Addbudget from '../budgetform/addcategory';
import { indigo } from '@mui/material/colors';
import Cointrace from '../../App/Cointrace graphics/CoinTraceLogo.svg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const month = useSelector((store)=> store.month)
  const budget = useSelector((store)=> store.budget)
  const [open, setOpen] = useState(false)

  function handleOpen() {
    setOpen(true);

};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const handleClose = () => {
    setOpen(false);

}

const closeModal = () => setOpen(false);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch({ type: 'FETCH_MONTH', payload: { monthID: month.name } }),
    dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: month.name } }),
    dispatch({ type: 'FETCH_BUDGET', payload: { monthID: month.name } })
    setOpen(true);
  },[])

  // { <img src={Cointrace} className='logo'></img> }
  if(month.monthly_income === 0) {return (
    <div>
    <Modal open={open}
    onClose={closeModal}
    aria-labelledby="Gas"
    aria-describedby="insert values">
    <Box sx={style}>
    <Typography  variant="h6" color="#262626"> Please Input Monthly Income</Typography>
    <Monthincome />
    </Box>

</Modal>
      <LogOutButton className="btn" />
    </div>
  )}
  else{
    return(

    <div className="container">
      
    {/* <img src={Cointrace} className='logo'></img> */}
      <Loadmonths />

      <Typography className='MonthTitle' variant="h3" color="#262626">{month.name}</Typography>
      <Typography variant='h6' className='totalleft'>You've spent:<span className='moneyremaining'>${month.total_sum || 0}/${month.monthly_income|| 0}</span></Typography>
      <Typography variant='h6'>remaining:<span className='moneyremaining'>${month.monthly_income - month.total_sum || 0}</span></Typography>
      <br />
      <div className="grid">
      <div className="grid-col grid-col_3">
      <Monthincome />
      <Budgetform />
      </div>
      <div className="grid-col grid-col_9">
      <Addbudget/>
      </div>
      </div>
      <LogOutButton className="btn" />
    </div>
  );
}

}

// this allows us to use <App /> in index.js
export default UserPage;



/* DONT FORGET THIS EITHER
     <input value={gasName} onChange={(e) => setGasName(e.target.value)} /> <input type={'number'} value={gasA} onChange={(e) => setGasA(e.target.value)} />
        <button onClick={() => dispatch({ type: 'ADD_TRANSACTIONS', payload: { monthID: month.name, name: gasName, amount: gasA, budget_id: 1 } })}>add gas</button>
        */






