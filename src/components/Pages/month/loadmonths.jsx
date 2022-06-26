import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../month/loadmonths.css'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Typography } from "@mui/material"
import ListItem from '@mui/material/ListItem';

export default function Loadmonths() {
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const [isOpen,setIsOpen]= useState(false);


    const Months = (currentMonth) => {
        console.log(currentMonth),
            dispatch({ type: 'FETCH_MONTH', payload: { monthID: currentMonth } }),
            dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: currentMonth } }),
            dispatch({ type: 'FETCH_BUDGET', payload: { monthID: currentMonth } })
    }
    return (

        <div>
            <Button onClick={()=> setIsOpen(true)} variant="text">Select Month</Button>
            <Drawer
                className='monthroute'
                anchor="left"
                open={isOpen}
                onClose={()=> setIsOpen(false)}
            >
                <Box textAlign={'center'} width='100px'>
                    <div className='monthnames'>
                    <button onClick={() => {setIsOpen(false); Months('Jan-2022')}}><Typography variant='h6'>January</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Feb-2022')}}><Typography variant='h6'>February</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Mar-2022')}}><Typography variant='h6'>March</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Apr-2022')}}><Typography variant='h6'>April</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('May-2022')}}><Typography variant='h6'>May</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Jun-2022')}}><Typography variant='h6'>June</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('July-2022')}}><Typography variant='h6'>July</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Aug-2022')}}><Typography variant='h6'>August</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Sep-2022')}}><Typography variant='h6'>September</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Oct-2022')}}><Typography variant='h6'>october</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Nov-2022')}}><Typography variant='h6'>November</Typography></button>
                    <br />
                    <button onClick={() =>  {setIsOpen(false); Months('Dec-2022')}}><Typography variant='h6'>December</Typography></button>
                    </div>
                </Box>

            </Drawer>
        </div>

    )
}
