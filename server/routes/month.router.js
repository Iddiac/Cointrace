const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/:monthName',rejectUnauthenticated, (req, res) => {
  console.log('this is the current user in get', req.user)
  const query=`SELECT monthly_income,
  (SELECT SUM("transactions"."amount") AS "total_sum" FROM transactions
  JOIN "budget" ON "transactions"."budget_id"="budget"."id"
  JOIN "month" on "budget".month_id = "month".id
  WHERE "month"."name"=$2 AND "transactions".user_id=$1), 
  "user".username, "month".name, "month".id FROM "user"
  JOIN "month" ON "month".user_id="user".id
  WHERE "user".id=$1 AND "month".name=$2` /*this is where i am looking at things */
  pool.query(query,[req.user.id,req.params.monthName])
  .then(result =>{
    console.log(' in month router', result.rows)
    res.send(result.rows[0]);
  }).catch((err)=>{
    console.error('error in get month router', err)
  })
});



router.post('/', rejectUnauthenticated,(req, res) => {
  console.log('this is req.body in router post month', req.body)
  const queryText= `INSERT INTO "month"("user_id", "name","monthly_income")
  VALUES($1,$2,$3)`
      pool.query(queryText,[req.user.id,req.body.monthID,0])
      .then((result)=>{
      console.log('month post works')
          res.sendStatus(201)
      }).catch((err)=>{
        if(err.code === '23505')
          res.status(201).send('Already loaded')
      else{
        res.sendStatus(500);
      }
    })
});

router.put('/:id', (req,res)=>{
  let id=req.params.id
  console.log(' it atleast got to the put router in month')
  let income=req.body;
  const querytext= `UPDATE "month"
SET "monthly_income" = $2
WHERE "month".id = $1`
  pool.query(querytext,[id,income.income])
  .then(()=>{
      res.sendStatus(200)
  }).catch((err)=>{
      console.error('not working put router in month', err)
  })
})




module.exports = router;
