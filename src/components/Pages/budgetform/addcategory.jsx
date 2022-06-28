import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import Categorytype from '../categories/categorytype';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Addbudget() {
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
        boxShadow: 24,
        p: 4,
    }
    return (
        <div>

            <Modal open={open}
                onClose={closeModal}
                aria-labelledby="Gas"
                aria-describedby="insert values">
                <Box sx={style}>
                    <TextField label={`${budId.category_name} expense`}  size="small" variant='standard'  value={gasName} onChange={(e) => setGasName(e.target.value)} />
                     <TextField label="amount" size="small" variant='standard' type='number'  value={gasA} onChange={(e) => setGasA(e.target.value)} />
                    <Button color="secondary" variant="contained" onClick={() => handleClose()}>add {budId.category_name} </Button>
                </Box>

            </Modal>

            {budget.map((b, i) => {
                
                return (
                    <div className='wrapper'  key={i}>
                       
                        <Categorytype  b={b} />
                    </div>
                )
            })}
        </div>
    )
}