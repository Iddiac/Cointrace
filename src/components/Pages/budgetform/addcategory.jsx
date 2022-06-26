import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import Categorytype from '../categories/categorytype';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



export default function Addbudget() {
    const [budId, setBudId] = useState(0)
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
      
    }
    return (
        <div>

            <Modal className='modal' open={open}
                onClose={closeModal}
                aria-labelledby="Gas"
                aria-describedby="insert values">
                <Box sx={style}>
                    <TextField label='transaction' size='small' variant="standard" value={gasName} onChange={(e) => setGasName(e.target.value)} />
                    <TextField size='small' label='amount' variant="standard" value={gasA} type={'number'} onChange={(e) => setGasA(e.target.value)} />
                    <Button variant="contained" onClick={() => handleClose()}>add transaction</Button>
                </Box>

            </Modal>

            <Typography variant='h6'>{budget.map((b, i) => {
                return (
                    <div key={i}>
                        <Button variant="contained" onClick={() => handleOpen(b.id)}>Add {b.category_name}</Button>
                        <Categorytype b={b} />
                    </div>
                )
            })}</Typography>
        </div>
    )
}
