import React from 'react';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const month = useSelector((store) => store.month)
  const budget = useSelector((store) => store.budget)
  const transactions = useSelector((store) => store.transactions)
  const [income, setIncome] = useState(0);
  const [total, setTotal] = useState(0);
  console.log('these are months', month)
  console.log('there are transactions', transactions)
  console.log('there are budgets', budget)
  let set = '';
  let totalRemaining = 0;
  /*useEffect(() => {
    dispatch({ type: 'FETCH_MONTH'});
  }, []);
  */
  const dispatch = useDispatch();

  const Months = (currentMonth) => {
    return (
      console.log(currentMonth),
      dispatch({ type: 'FETCH_MONTH', payload: { monthID: currentMonth } }),
      dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: currentMonth } }),
      dispatch({ type: 'FETCH_BUDGET', payload: { monthID: currentMonth } })
    )
  }


  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button onClick={() => Months('Jan-2022')}>January</button>
      <button onClick={() => Months('Feb-2022')}>February</button>
      <p>{month.map((m, i) => {
        return (
          <>
            <p key={i}> Current month is: {set = m.name}
              <br />
              Your income is: {m.monthly_income}
              <input placeholder='Update Income' value={income} onChange={(event) => setIncome(event.target.value)} />
              <button onClick={() => dispatch({ type: "UPDATE_INCOME", payload: { monthID: m.name, id: m.id, income } })}>change</button>
              <br />
              Your name is: {m.username}
            </p>
          </>)
      })
    }</p>
    <input placeholder='Update budget' value={total} onChange={(event) => setTotal(event.target.value)} />
    <button onClick={() => dispatch({ type: "UPDATE_BUDGET", payload: { monthID:set, id: b.id, total } })}>change budget</button>
      <p>{budget.map((b) => {
        return (
          <>
            <p><strong>{b.category_name}</strong> </p>
            {console.log('this is b', b)}
            <p>{transactions.map((t) => {
              if (b.category_name === t.name) {
                return (
                  <>
                    {console.log('this is in trans', t)}
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

          </>
        )
      })}</p>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
