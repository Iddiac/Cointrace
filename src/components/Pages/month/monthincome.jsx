import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Monthincome() {
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [income, setIncome] = useState('');
  return (
    <div>
      <Typography variant="h4" color="darkviolet">{month.name}</Typography>
    <br />
     income: {month.monthly_income}
    <TextField size="small" variant='standard' value={income} onChange={(event) => setIncome(event.target.value)} />
    <Button color='secondary' variant='text' onClick={() => {dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } });dispatch({ type: 'ADD_BUDGET', payload: { monthNum:month.id, monthID:month.name } }); setIncome(0)}}>change</Button>
    </div>
  )
}


