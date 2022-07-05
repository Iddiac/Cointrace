import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Budgetform from '../budgetform/budgetform';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



export default function Monthincome() {
  const dispatch = useDispatch();
  const month = useSelector((store) => store.month);
  const [income, setIncome] = useState('');

  useEffect(() => {
    dispatch({ type: 'ADD_BUDGET', payload: { monthNum: month.id, monthID: month.name } })
  }, [month])


  return (
    <div className='dank'>

      <Card className='monthadd' style={{ padding: '1em', backgroundColor: "#3CC6F0", color: "#374A67", borderRadius: 10, textAlign: "center" }} sx={{ minWidth: 200, maxWidth: 275, maxHeight: 150 }} variant="outlined">
      <h4 className='FIELDTEXT'> Monthly Income: {month.monthly_income || ''}</h4>
        <br />
        <TextField sx={{ input: { color: 'white' } }} type="number" size="small" variant='standard' color="warning" value={income} onChange={(event) => setIncome(event.target.value)} />
        <Button style={{ color: "white" }} variant='text' onClick={() => { dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } }); setIncome('') }}>change</Button>
      </Card>
    </div>
  )
}


