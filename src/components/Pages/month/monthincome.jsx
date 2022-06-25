import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useState} from 'react'

export default function Monthincome() {
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    const [income, setIncome] = useState(0);
  return (
    <p> Current month is: {month.name}
    <br />
    Your income is: {month.monthly_income}
    <input placeholder='Update Income' value={income} onChange={(event) => setIncome(event.target.value)} />
    <button onClick={() => dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } })}>change</button>
    <br />
    Your name is: {month.username}
  </p>
  )
}


