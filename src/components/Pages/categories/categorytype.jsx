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
    return (
        <div className='wrapper'>
            <p>{transactions.map((t, i) => {

                if (b.category_name === t.name) {
                    return (
                        < >
                            <Card style={{borderRadius:50}}  sx={{ minWidth: 275 }} variant="outlined">
                                <CardContent>
                                    <p key={i}>
                                        <Typography className='title' variant="h6" color="orchid"> <strong> {t.name} </strong> </Typography> 
                                        <br />
                                        <Typography variant="h7" color="cadetblue"> <strong> budget: </strong> {t.total_amount} </Typography>
                                        <br />
                                        <Typography variant="h7" color='cadetblue'> <strong> spent: </strong> {t.total_spent} </Typography>
                                        <br />
                                        <Typography variant="subtitle1" color="crimson"><Transaction t={t} /></Typography>
                                    </p>
                                    <LinearProgress style={{ minwidth: 240, borderRadius: 5, minHeight:10 }} color="warning" variant="determinate" value={(t.total_spent / t.total_amount) * 100} />
                                    <h4 className='remaining'> {(t.total_spent)}/ {t.total_amount}</h4> 
                                </CardContent>
                            </Card>
                        </>

                    )
                }
            })
            }</p>
        </div>
    )
}
