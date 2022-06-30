import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Monthincome() {
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [income, setIncome] = useState('');

    useEffect(() => {
      dispatch({ type: 'ADD_BUDGET', payload: { monthNum:month.id, monthID:month.name } })
    }, [month])


  return (
    <div>
      <Typography variant="h4" color="darkviolet">{month.name}</Typography>
    <br />
     income: {month.monthly_income || ''}
    <TextField size="small" variant='standard' value={income} onChange={(event) => setIncome(event.target.value)} />
    <Button style={{backgroundColor:"#3CC6F0", color:"white"}} variant='text' onClick={() => {dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } }); setIncome('')}}>change</Button>
    </div>
  )
}


