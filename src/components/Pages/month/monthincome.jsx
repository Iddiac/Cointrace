import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useState,useEffect} from 'react'
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
      dispatch({ type: 'ADD_BUDGET', payload: { monthNum:month.id, monthID:month.name } })
    }, [month])


  return (
    <div>
      <Typography variant="h4" color="darkviolet">{month.name}</Typography>
    <br />
    <Card  style={{backgroundColor:"#82A3A1", color:"white", borderRadius: 10, textAlign:"center" }} sx={{ minWidth: 275,maxWidth:275 }} variant="outlined">
     income: {month.monthly_income || ''}
    <TextField size="small" variant='standard' value={income} onChange={(event) => setIncome(event.target.value)} />
    <Button style={{ color:"white"}} variant='text' onClick={() => {dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } }); setIncome('')}}>change</Button>
    <Budgetform />
    </Card>
    </div>
  )
}


