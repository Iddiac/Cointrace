import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {useHistory } from 'react-router-dom'
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
    const history = useHistory();
    const dispatch = useDispatch();
    const [isOpen,setIsOpen]= useState(false);


    const Months = (currentMonth,monthNum) => {

        dispatch({ type: 'ADD_MONTH', payload: { monthID: currentMonth, monthNum} })
        history.push('/user')
        
    }


    return (

        <>
            <Button style={{borderRadius: 30, backgroundColor: '#3CC6F0'}} variant="contained" onClick={()=> setIsOpen(true)}>Select Month</Button>
            <Drawer
                className='monthroute'
                anchor="left"
                open={isOpen}
                onClose={()=> setIsOpen(false)}
            >
                <Box style={{backgroundColor:'#616283'}} textAlign={'left'} width='10em' height='65em'>
                    <div className='monthnames'>
                    <Button style={{color:'#7FDEFF'}} onClick={() => {setIsOpen(false); Months('Jan-2022',month.id)}}><Typography variant='h6'>January </Typography></Button>  
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Feb-2022',month.id)}}><Typography variant='h6'>February </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Mar-2022',month.id)}}><Typography variant='h6'>March   </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Apr-2022',month.id)}}><Typography variant='h6'>April  </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('May-2022',month.id)}}><Typography variant='h6'>May </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Jun-2022',month.id)}}><Typography variant='h6'>June  </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('July-2022',month.id)}}><Typography variant='h6'>July </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Aug-2022',month.id)}}><Typography variant='h6'>August </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Sep-2022',month.id)}}><Typography variant='h6'>September </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Oct-2022',month.id)}}><Typography variant='h6'>october </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Nov-2022',month.id)}}><Typography variant='h6'>November </Typography></Button>
                    <br />
                    <hr />
                    <Button style={{color:'#7FDEFF'}} onClick={() =>  {setIsOpen(false); Months('Dec-2022',month.id)}}><Typography variant='h6'>December </Typography></Button>
                    <hr />
                    </div>

                </Box>

            </Drawer>
        </>

    )
}
