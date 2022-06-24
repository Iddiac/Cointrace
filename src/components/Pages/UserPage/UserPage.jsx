import React from 'react';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const month = useSelector((store) => store.month);
  const budget = useSelector((store) => store.budget)
  const transactions = useSelector((store) => store.transactions)
  const [income, setIncome] = useState(0);
  const [gasTotal, setGasTotal] = useState('');
  const [foodTotal, setFoodTotal] = useState('');
  const [entertainmentTotal, setEntertainmentTotal] = useState('');
  console.log('these are months', month)
  console.log('there are transactions', transactions)
  console.log('there are budgets', budget)
  let totalRemaining = 0;
  /*useEffect(() => {
    dispatch({ type: 'FETCH_MONTH'});
  }, []);
  */
  const dispatch = useDispatch();

  const Months = (currentMonth) => {
    console.log(currentMonth),
    dispatch({ type: 'FETCH_MONTH', payload: { monthID: currentMonth } }),
    dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: currentMonth } }),
    dispatch({ type: 'FETCH_BUDGET', payload: { monthID: currentMonth } })
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button onClick={() => Months('Jan-2022')}>January</button>
      <button onClick={() => Months('Feb-2022')}>February</button>

        <p> Current month is: {month.name}
          <br />
          Your income is: {month.monthly_income}
          <input placeholder='Update Income' value={income} onChange={(event) => setIncome(event.target.value)} />
          <button onClick={() => dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } })}>change</button>
          <br />
          Your name is: {month.username}
        </p>

    <input placeholder=' GAS ' value={gasTotal} onChange={(event) => setGasTotal(event.target.value)} />
    <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 1, monthID: month.id, categoryId:1, total:gasTotal } })}>change Gas total</button>

    <input placeholder=' FOOD ' value={foodTotal} onChange={(event) => setFoodTotal(event.target.value)} />
    {console.log('My FOOD TOTAL', foodTotal )}
    <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 2, monthID: month.id, categoryId:2, total:foodTotal } })}>change Food total</button>

    <input placeholder=' ENTERTAINMENT ' value={entertainmentTotal} onChange={(event) => setEntertainmentTotal(event.target.value)} />
    <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { id: 3, monthID: month.id, categoryId:3, total:entertainmentTotal } })}>change Entertainment total</button>
    <br />
   
      <p className='budgets'>{budget.map((b) => {
        return (
          <>
          <div className='wrapper'>
            <p>{transactions.map((t) => {
              if (b.category_name === t.name) {
                return (
                  <>
                    <p key={transactions.id}>
                      <strong>Category type :</strong> {t.name}
                      <br />
                      <strong>category budget: </strong> {t.total_amount}
                      <br />
                      <strong> total spent:</strong> {t.total_spent}
                      <br />
                      <p>{t.transactions.map((one) => {
                        return (
                          <>
                            <p>
                              <strong> transaction:</strong> {one.name}
                              <br />
                              <strong> spent:</strong> {one.amount}
                            </p>
                            <button onClick={()=> dispatch({type:'DELETE_TRANSACTIONS', payload:{id:one.id,monthID:month.name}})}>delete</button>
                          </>
                        )
                      })}</p>
                    </p>
                    <p>Your remaining budget is: <strong></strong>{t.total_amount - t.total_spent}</p>
                  </>
                )
              }
            })
            }</p>
            </div>
          </>
        )
      })}</p>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
