import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function Loadmonths() {
    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

    const Months = (currentMonth) => {
        console.log(currentMonth),
            dispatch({ type: 'FETCH_MONTH', payload: { monthID: currentMonth } }),
            dispatch({ type: 'FETCH_TRANSACTIONS', payload: { monthID: currentMonth } }),
            dispatch({ type: 'FETCH_BUDGET', payload: { monthID: currentMonth } })
    }
    return (
        <div>
            <button onClick={() => Months('Jan-2022')}>January</button>
            <button onClick={() => Months('Feb-2022')}>February</button>
            <button onClick={() => Months('Mar-2022')}>March</button>
            <button onClick={() => Months('Apr-2022')}>April</button>

        </div>
    )
}
