import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';


export default function Transaction({ t }) {
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    return (
        
            <div>
                {t.transactions.map((one, i) => {
                return (
                    <p key={i}>
                       
                            <Typography variant="h7" color="#D7263D"> <strong> transaction:</strong> {one.name} </Typography>
                            <br />
                            <Typography variant="h7" color="#D7263D"> <strong> spent:</strong> {one.amount} </Typography>
                            <br />
                        <IconButton onClick={() => dispatch({ type: 'DELETE_TRANSACTIONS', payload: { id: one.id, monthID: month.name } })} aria-label="delete" size="large">
                            <DeleteIcon  />
                        </IconButton>

                    </p>
                )
            })}
            </div>
      
    )
}
