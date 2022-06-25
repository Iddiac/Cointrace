import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';

export default function Transaction({ t }) {
    const dispatch = useDispatch();
    const month = useSelector((store) => store.month);
    return (
        <div>
            <p>{t.transactions.map((one, i) => {
                return (
                    <>
                        <p key={i}>
                            <strong> transaction:</strong> {one.name}
                            <br />
                            <strong> spent:</strong> {one.amount}
                        </p>
                        <IconButton aria-label="delete" size="large">
                            <DeleteIcon onClick={() => dispatch({ type: 'DELETE_TRANSACTIONS', payload: { id: one.id, monthID: month.name } })} />
                        </IconButton>

                    </>
                )
            })}</p>
        </div>
    )
}
