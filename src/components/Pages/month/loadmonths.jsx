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
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Loadmonths() {
    const user = useSelector((store) => store.user);
    const month = useSelector((store) => store.month);
    const dispatch = useDispatch();
    const [isOpen,setIsOpen]= useState(false);


    const Months = (currentMonth,monthNum) => {
        console.log('adsasdadadsasdasd',monthNum),
        dispatch({ type: 'ADD_MONTH', payload: { monthID: currentMonth } })
        
    }


    return (

        <>
            <Button onClick={()=> setIsOpen(true)} variant="text">Select Month</Button>
            <Drawer
                className='monthroute'
                anchor="left"
                open={isOpen}
                onClose={()=> setIsOpen(false)}
            >
                <Box style={{backgroundColor:'#616283'}} textAlign={'center'} width='8em' height='65em'>
                    <div className='monthnames'>
                    <Button style={{color:'#7FDEFF'}} onClick={() => {setIsOpen(false); Months('Jan-2022',month.id)}}><Typography variant='h6'>January </Typography></Button>  
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Feb-2022',month.id)}}><Typography variant='h6'>February </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Mar-2022',month.id)}}><Typography variant='h6'>March   </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Apr-2022',month.id)}}><Typography variant='h6'>April  </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('May-2022',month.id)}}><Typography variant='h6'>May </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Jun-2022',month.id)}}><Typography variant='h6'>June  </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('July-2022',month.id)}}><Typography variant='h6'>July </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Aug-2022',month.id)}}><Typography variant='h6'>August </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Sep-2022',month.id)}}><Typography variant='h6'>September </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Oct-2022',month.id)}}><Typography variant='h6'>october </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Nov-2022',month.id)}}><Typography variant='h6'>November </Typography></Button>
                    <br />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Dec-2022',month.id)}}><Typography variant='h6'>December </Typography></Button>
                    </div>
                </Box>

            </Drawer>
        </>

    )
}
