import React from 'react';
import LogOutButton from '../../Auth/LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react'
import Portal from '@mui/material/Portal';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';


function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const month = useSelector((store) => store.month);
  const budget = useSelector((store) => store.budget)
  const transactions = useSelector((store) => store.transactions)
  const [income, setIncome] = useState(0);
  const [budId, setBudId]= useState(0)
  const [open, setOpen] = useState(false)
  const [show,setshow]= useState(false)
  const [gasTotal, setGasTotal] = useState('');
  const [foodTotal, setFoodTotal] = useState('');
  const [entertainmentTotal, setEntertainmentTotal] = useState('');
  const [gasName, setGasName] = useState('');
  const [gasA, setGasA] = useState(0);



  function handleOpen(b){
    setOpen(true); setBudId(b)
  };
  const handleClose = () => {

    dispatch({ type: 'ADD_TRANSACTIONS', payload: { monthID: month.name, name: gasName, amount: gasA, budget_id: budId } })
    setOpen(false)

  }

  const closeModal = () => setOpen(false);


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

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
      <button onClick={() => Months('Mar-2022')}>March</button>
      <button onClick={() => Months('Apr-2022')}>April</button>

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
      

      <p> Current month is: {month.name}
        <br />
        Your income is: {month.monthly_income}
        <input placeholder='Update Income' value={income} onChange={(event) => setIncome(event.target.value)} />
        <button onClick={() => dispatch({ type: "UPDATE_INCOME", payload: { monthID: month.name, id: month.id, income } })}>change</button>
        <br />
        Your name is: {month.username}
      </p>
      <>
        <Modal open={open}
          onClose={closeModal}
          aria-labelledby="Gas"
          aria-describedby="insert values">
          <Box sx={style}>
            <input placeholder='item' value={gasName} onChange={(e) => setGasName(e.target.value)} /> <input type={'number'} placeholder='amount' value={gasA} onChange={(e) => setGasA(e.target.value)} />
            <Button variant="contained" onClick={() => handleClose()}>add transaction</Button>
          </Box>

        </Modal>
      </>
      <p className='budgets'>{budget.map((b) => {
        return (
          <>    
                        <Button  variant="contained" onClick={()=> handleOpen(b.id)}>Add {b.category_name}</Button>
              {console.log('what is this',b)}
            <div className='wrapper'>
              <p>{transactions.map((t, i) => {
                {console.log('THIS IS DOPE', t)}
                if (b.category_name === t.name) {
                  return (
                    <>
                      <p key={i}>
                        <strong>Category type :</strong> {t.name}
                        <br />
                        <strong>category budget: </strong> {t.total_amount}
                        <br />
                        <strong> total spent:</strong> {t.total_spent}
                        <br />
                        <p>{t.transactions.map((one, i) => {
                          return (
                            <>
                              <p key={i}>
                                <strong> transaction:</strong> {one.name}
                                <br />
                                <strong> spent:</strong> {one.amount}
                              </p>
                              <IconButton aria-label="delete" size="large">
                                <DeleteIcon onClick={() => dispatch({ type: 'DELETE_TRANSACTIONS', payload: { id: one.id, monthID: month.name } })} />
                              </IconButton>

                            </>
                          )
                        })}</p>
                      </p>
                      <p>Your remaining budget is: <strong>{totalRemaining = (t.total_amount - t.total_spent)}</strong></p>
                      <p>Your remaining money is: <strong>{t.total_spent}</strong></p>
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



/* DONT FORGET THIS EITHER
     <input value={gasName} onChange={(e) => setGasName(e.target.value)} /> <input type={'number'} value={gasA} onChange={(e) => setGasA(e.target.value)} />
        <button onClick={() => dispatch({ type: 'ADD_TRANSACTIONS', payload: { monthID: month.name, name: gasName, amount: gasA, budget_id: 1 } })}>add gas</button>
        */






