import React from 'react'
import Transaction from './transaction'
import { useSelector,useDispatch } from 'react-redux'

export default function Categorytype({b}) {
    const transactions = useSelector((store) => store.transactions)
  return (
        <div className='wrapper'>
              <p>{transactions.map((t, i) => {

                if (b.category_name === t.name) {
                  return (
                    <>
                      <p key={i}>
                        <strong>Category type :</strong> {t.name}
                        <br />
                        <strong>category budget: </strong> {t.total_amount}
                        <br />
                        <strong> total spent:</strong> {t.total_spent}
                        <br />
                        <Transaction t={t}  />
                      </p>
                      <p>Your remaining budget is: <strong>{t.total_amount - t.total_spent}</strong></p>
                    </>

                  )
                }
              })
              }</p>
            </div>
  )
}
