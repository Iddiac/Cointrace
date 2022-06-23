const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


router.get('/:id',rejectUnauthenticated, (req, res) => {
  console.log('this is the current user in get', req.user)
  console.log('i am getting this param', req.params.id)
  const query=`SELECT monthly_income, "user".username, "month".name, "month".id FROM "user"
  JOIN "month" ON "month".user_id="user".id
  WHERE "user".id=$1 AND "month".id=$2` /*this is where i am looking at things */
  pool.query(query,[req.user.id,req.params.id])
  .then(result =>{
    console.log(' in month router', result.rows)
    res.send(result.rows);
  }).catch((err)=>{
    console.error('error in get month router', err)
  })
});



router.post('/', rejectUnauthenticated,(req, res) => {
  const queryText= `INSERT INTO "month"("user_id", "name","monthly_income")
  VALUES($1,$2,$3)`
      pool.query(queryText,[req.user.id,req.body.name,req.body.monthly_income])
      .then((result)=>{
        console.log('this is in server POST for Month', req.user.id,req.body.name,req.body.monthly_income)
          res.sendStatus(201)
      }).catch((err)=>{
          console.error('month function is not working in month post', err)
          res.sendStatus(500)
      })
});

module.exports = router;
