import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Budgetform(){
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [gasTotal, setGasTotal] = useState('');
    const [foodTotal, setFoodTotal] = useState('');
    const [entertainmentTotal, setEntertainmentTotal] = useState('');
    return(
        <div className='inputFields'>
        <TextField  size="small"  className="outlined-basic" label="Gas" type='number' variant="standard" value={gasTotal} onChange={(event) => setGasTotal(event.target.value)}/>  
        <Button size='small' onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 1, monthID: month.id, categoryId: 1, total: gasTotal } })}>change Gas total</Button>

        <TextField type="number" variant='standard' label="Food" size="small"  className="outlined-basic" value={foodTotal} onChange={(event) => setFoodTotal(event.target.value)} />
        <Button size='small' onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 2, monthID: month.id, categoryId: 2, total: foodTotal } })}>change Food total</Button>

        <TextField type='number' variant='standard' label="Entertainment" size='small' className='outlined-basic' value={entertainmentTotal} onChange={(event) => setEntertainmentTotal(event.target.value)} />
        <Button size='small'  onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 3, monthID: month.id, categoryId: 3, total: entertainmentTotal } })}>change Entertainment total</Button>
        <br />
      </div>
    )
}

export default Budgetform;