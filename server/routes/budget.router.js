const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/:id',rejectUnauthenticated, (req, res) => {
  console.log('the get is running budget ')
  const query=`select "c".name AS "category_name", "m".monthly_income,total_amount,"budget".id FROM "budget"
  JOIN "user" AS "u" ON "budget".user_id="u".id
  JOIN "month" as "m" ON "budget".month_id= "m".id
  JOIN "category" as "c" ON "budget".category_id="c".id
  WHERE "u".id=$1 AND "m".name=$2
  order by "m".name`
  pool.query(query,[req.user.id,req.params.id])
  .then(result =>{
    console.log(' in budget router', result.rows)
    res.send(result.rows);
  }).catch((err)=>{
    console.error('error in get budget router', err)
  })
});

router.post('/', rejectUnauthenticated,(req, res) => {
  const queryText= `INSERT INTO "budget"("total_amount","user_id","month_id", "category_id")
  VALUES($1,$2,$3,$4)`;
      pool.query(queryText,[req.body.total_amount,req.user.id,req.body.month_id, req.body.category_id])
      .then((result)=>{
        console.log('this is in server POST for budget', req.body)
          res.sendStatus(201)
      }).catch((err)=>{
          console.error('not posting in budget', err)
          res.sendStatus(500)
      })
});

router.put('/:id', (req,res)=>{
  let id=req.params.id
  console.log(' it atleast got to the put router in budget')
  let t=req.body;
  const querytext= `UPDATE "budget"
SET "total_amount" = $2
WHERE "budget".month_id= $1 AND "budget".category_id=$3`
  pool.query(querytext,[id, t.total, t.id])
  .then(()=>{
      res.sendStatus(200)
  }).catch((err)=>{
      console.error('not working put router in budget', err)
  })
})



module.exports = router;
