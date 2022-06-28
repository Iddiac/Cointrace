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
 
    const dispatch = useDispatch();
    const budget = useSelector((store) => store.budget)
    const month = useSelector((store) => store.month)





    return (
        <div>

           

            {budget.map((b, i) => {
                
                return (
                    <div className='wrapper'  key={i}>
                        <Categorytype   b={b} />
                    </div>
                )
            })}
        </div>
    )
}