import React from 'react'
import Transaction from './transaction'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';
import { useState, useEffect } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { red, indigo, teal, cyan } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';





export default function Categorytype({ b }) {
    const transactions = useSelector((store) => store.transactions)
    const colorz = [];


    const [budId, setBudId] = useState(0)
    const [catName, setCatName] = useState('')
    const [open, setOpen] = useState(false)
    const [gasName, setGasName] = useState('');
    const [gasA, setGasA] = useState(0);
    const dispatch = useDispatch();
    const budget = useSelector((store) => store.budget)
    const month = useSelector((store) => store.month)



    function handleOpen(b) {
        setOpen(true);
        setBudId(b);
    };

    const handleClose = () => {
        dispatch({ type: 'ADD_TRANSACTIONS', payload: { monthID: month.name, name: gasName, amount: gasA, budget_id: budId.id } })
        setOpen(false);
        setGasA(0);
        setGasName('');

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
        boxShadow: 5,
        borderRadius:10,
        p: 4,
    };

    function progressColor(amount, max) {

        let ratio = ((amount / max) * 100)


        if (ratio <= 40) {
            return (
                colorz.push(cyan[50]),
                "success"
            )
        }
        else if (ratio >= 41 && ratio < 75) {
            return (
                colorz.push(cyan[50]),
                "warning"
            )
        }
        else {
            return (
                colorz.push(red[100]),
                "error"
            )
        }

    }
    useEffect(() => {
    }, [])


    return (
        <div className='wrapper'>
            <div>

                <Modal open={open}
                    onClose={closeModal}
                    aria-labelledby="Gas"
                    aria-describedby="insert values">
                    <Box sx={style}>
                        <h2>{budId.category_name} Expense</h2>
                        <TextField label={`Title`} size="small" variant='standard' value={gasName} onChange={(e) => setGasName(e.target.value)} />
                        <TextField label="Amount" size="small" variant='standard' type='number' placeholder='' value={gasA} onChange={(e) => setGasA(e.target.value)} />
                        <Button color="secondary" variant="contained" onClick={() => handleClose()}>add {budId.category_name} </Button>
                    </Box>

                </Modal>



            </div>

            <Card style={{ backgroundColor: colorz, borderRadius: 50 }} sx={{ minWidth: 275 }} variant="outlined">
                <CardContent>
                    <Typography variant="h6" color="orchid"> <strong>  </strong> </Typography>
                    <Typography className='total_amount' variant="h7" color="cadetblue"> <strong> budget: </strong> {b.total_amount} </Typography>
                    <AddIcon fontSize="large" className='plus' color="secondary" onClick={() => { handleOpen(b) }} />
                    <Typography variant='h4' color="darkmagenta">{b.category_name}</Typography>
                    <div>{transactions.map((t, i) => {
                        if (b.category_name === t.name) {
                            return (

                                <div key={i}>
                                    <br />
                                    <hr />
                                    <Typography variant="subtitle1" color="crimson"> <Transaction t={t} /></Typography>

                                    <LinearProgress style={{ minwidth: 240, borderRadius: 5, minHeight: 10 }} color={progressColor(t.total_spent, b.total_amount)} variant="determinate" value={(t.total_spent / b.total_amount) * 100} />
                                    <Typography variant='h4' color="darkorange" className='remaining'> {(t.total_spent)}/ {b.total_amount}</Typography>
                                </div>

                            )
                        }
                    })
                    }</div>
                </CardContent>
            </Card>

        </div>
    )
}

/* might need this
 <Typography variant="h7" color="cadetblue"> <strong> budget: </strong> {t.total_amount} </Typography>
                                        <br />
  <Typography variant="h7" color='cadetblue'> <strong> spent: </strong> {t.total_spent} </Typography>

*/