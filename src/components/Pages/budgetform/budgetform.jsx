import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { indigo } from '@mui/material/colors';
import Card from '@mui/material/Card';

function Budgetform(){
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [gasTotal, setGasTotal] = useState('');
    const [foodTotal, setFoodTotal] = useState('');
    const [entertainmentTotal, setEntertainmentTotal] = useState('');
    return(
      <div >
        <Card className='monthadd' style={{padding:'1em',backgroundColor:"#3CC6F0", color:"#374A67", borderRadius: 10, textAlign:"center" }} sx={{ minWidth: 200,maxWidth:275}} variant="outlined">
        <TextField color="warning" sx={{ input: { color: 'white' } }}  size="small"  className="outlined-basic" label="Gas" type='number' variant="standard" value={gasTotal} onChange={(event) => setGasTotal(event.target.value)}/>  
        <Button style={{color:"white"}}  size='small' onClick={() => {dispatch({ type: "UPDATE_BUDGET", payload: { id: 1, monthID: month.id, categoryId: 1, total: gasTotal } });setGasTotal(0)}}>change Gas total</Button>

        <TextField color="warning" sx={{ input: { color: 'white' } }} type="number" variant='standard' label="Food" size="small"  className="outlined-basic" value={foodTotal} onChange={(event) => setFoodTotal(event.target.value)} />
        <Button style={{color:"white"}}   size='small' onClick={() =>{ dispatch({ type: "UPDATE_BUDGET", payload: { id: 2, monthID: month.id, categoryId: 2, total: foodTotal } });setFoodTotal(0)}}>change Food total</Button>

        <TextField color="warning" sx={{ input: { color: 'white' } }} type='number' variant='standard' label="Entertainment" size='small' className='outlined-basic' value={entertainmentTotal} onChange={(event) => setEntertainmentTotal(event.target.value)} />
        <Button  style={{color:"white"}} size='small'  onClick={() =>{ dispatch({ type: "UPDATE_BUDGET", payload: { id: 3, monthID: month.id, categoryId: 3, total: entertainmentTotal } });setEntertainmentTotal(0)}}>change Entertainment total</Button>
        <br />

    </Card>
     
            
        
        
      </div>
    )
}

export default Budgetform;