import React from 'react'
import Transaction from './transaction'
import { useSelector, useDispatch } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';



export default function Categorytype({ b }) {
    const transactions = useSelector((store) => store.transactions)

    function progressColor(amount, max){
        let ratio= ((amount/ max) * 100)
        console.log('this is ratio',ratio)

        if(ratio <= 40){return "success"}
        else if(ratio >= 41 && ratio< 75){return "warning"}
        else{
            return "error"
            
            
        }
       

    }
    return (
        <div className='wrapper'>
            <div>{transactions.map((t, i) => {

                if (b.category_name === t.name) {
                    return (
                        <div key={i}>
                            <Card  style={{  borderRadius: 50 }} sx={{ minWidth: 275 }} variant="outlined">
                                <CardContent>
                                        <Typography className='title' variant="h6" color="orchid"> <strong> {t.name} </strong> </Typography>
                                        <Typography  className='total_amount' variant="h7" color="cadetblue"> <strong> budget: </strong> {b.total_amount} </Typography>
                                        <br />
                                        <Typography variant='h4' color="darkmagenta">Expenses</Typography>
                                    <hr />
                                        <Typography variant="subtitle1" color="crimson"> <Transaction t={t} /></Typography>
                                  
                                    <LinearProgress style={{ minwidth: 240, borderRadius: 5, minHeight: 10 }} color={progressColor(t.total_spent,b.total_amount)} variant="determinate" value={(t.total_spent / b.total_amount) * 100} />
                                    <Typography variant='h4' color="darkorange" className='remaining'> {(t.total_spent)}/ {b.total_amount}</Typography>
                                </CardContent>
                            </Card>
                        </div>

                    )
                }
            })
            }</div>
        </div>
    )
}

/* might need this
 <Typography variant="h7" color="cadetblue"> <strong> budget: </strong> {t.total_amount} </Typography>
                                        <br />
  <Typography variant="h7" color='cadetblue'> <strong> spent: </strong> {t.total_spent} </Typography>

*/