import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'

function Budgetform(){
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [gasTotal, setGasTotal] = useState('');
    const [foodTotal, setFoodTotal] = useState('');
    const [entertainmentTotal, setEntertainmentTotal] = useState('');
    return(
        <div className='inputFields'>
        <input placeholder=' GAS ' value={gasTotal} onChange={(event) => setGasTotal(event.target.value)} />
        <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 1, monthID: month.id, categoryId: 1, total: gasTotal } })}>change Gas total</button>

        <input placeholder=' FOOD ' value={foodTotal} onChange={(event) => setFoodTotal(event.target.value)} />
        {console.log('My FOOD TOTAL', foodTotal)}
        <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 2, monthID: month.id, categoryId: 2, total: foodTotal } })}>change Food total</button>

        <input placeholder=' ENTERTAINMENT ' value={entertainmentTotal} onChange={(event) => setEntertainmentTotal(event.target.value)} />
        <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 3, monthID: month.id, categoryId: 3, total: entertainmentTotal } })}>change Entertainment total</button>
        <br />
      </div>
    )
}

export default Budgetform;