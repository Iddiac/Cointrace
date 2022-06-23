const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');




/*router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT "c".name AS "category_name","transactions".name, amount, "u".username, "b".total_amount FROM "transactions"
    left JOIN "budget" AS "b" on "transactions".budget_id="b".id
    left JOIN "user" AS "u" ON "transactions".user_id="u".id
    left JOIN "month" as "m" ON "b".month_id= "m".id
    left JOIN "category" as "c" ON "b".category_id="c".id
    WHERE "u".id=$1`
  pool.query(query, [req.user.id])
    .then(result => {
      console.log(' in transaction router', result.rows)
      res.send(result.rows);
    }).catch((err) => {
      console.error('error in get transaction router', err)
    })
});
*/

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const query = `
  SELECT 
	"category"."name",
	to_json(array_agg("transactions")) as "transactions", 
	SUM("transactions".amount) as "total_spent",
	(SELECT "budget".total_amount FROM "budget" WHERE "category"."id"="budget"."category_id" AND "budget"."user_id"=$1 LIMIT 1) -- CURRENT USER
  FROM "transactions"
  JOIN "budget" ON "transactions"."budget_id"="budget"."id"
  JOIN "category" ON "budget".category_id="category"."id"
  WHERE "transactions"."user_id"=$1 -- current user
  AND "budget"."month_id"=$2 -- for the month of may
  GROUP BY "category"."id";
  `
  //AND "budget"."month_id"='1'

  pool.query(query, [req.user.id,req.params.id])
    .then(result => {
      console.log(' in transaction router', result.rows)
      res.send(result.rows);
    }).catch((err) => {
      console.error('error in get transaction router', err)
    })
});


router.post('/', rejectUnauthenticated,(req, res) => {
  const queryText= `INSERT INTO "transactions"("name","amount","budget_id","user_id")
  VALUES($1,$2,$3,$4)`;
      pool.query(queryText,[req.body.name,req.body.amount,req.body.budget_id, req.user.id])
      .then((result)=>{
        console.log('this is in server POST for transaction', req.body)
          res.sendStatus(201)
      }).catch((err)=>{
          console.error('not posting in transactions', err)
          res.sendStatus(500)
      })
});
module.exports = router;
