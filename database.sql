CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "transactions"(
	"id" serial primary key,
	"name" varchar(255),
	"amount" int,
	"budget_id" int REFERENCES "budget",
	"user_id" int references "user"
);
Create table "month"(
	"id" serial primary key,
	"user_id" int REFERENCES "user",
	"name" varchar(50), -- june-2022
	"monthly_income" int,
	UNIQUE("name","user_id")
);


Create table "category"(
	"id" serial primary key,
	"name" varchar(255)
);
	
Create table "budget"(
	"id" serial primary key,
	"user_id" int REFERENCES "user",
	"month_id" int references "month",
	"category_id" int references "category",
	"total_amount" int,
	UNIQUE ("category_id", "month_id", "user_id")
	);
	

	
SELECT * FROM "month";

SELECT * FROM "user";

SELECT * FROM "category";

SELECT * FROM "budget";

SELECT * FROM "transactions";

SELECT to_json("transactions"), "category" FROM "transactions"
JOIN "budget" ON "transactions"."budget_id"="budget"."id"
JOIN "category" ON "budget".category_id="category"."id";

SELECT 
	"category"."name",
	to_json(array_agg("transactions")) as "transactions", 
	SUM("transactions".amount) as "total_spent",
	(SELECT "budget".total_amount FROM "budget" WHERE "category"."id"="budget"."category_id" AND "budget"."user_id"=3 LIMIT 1) -- CURRENT USER

FROM "transactions"
JOIN "budget" ON "transactions"."budget_id"="budget"."id"
JOIN "category" ON "budget".category_id="category"."id"
WHERE "transactions"."user_id"=3 -- current user
AND "budget"."month_id"='16' -- for the month of may
GROUP BY "category"."id";




INSERT INTO "transactions"("name","amount","budget_id","user_id")
VALUES('buying cans','100','12','3');

INSERT INTO "transactions"("name","amount","budget_id","user_id")
VALUES('buying lettuce','20','7','3');


INSERT INTO "month"("user_id", "name","monthly_income")
VALUES('3','february-2022','6000');


INSERT INTO "budget"("total_amount","user_id","month_id", "category_id")
VALUES('200','3','33','1');


INSERT INTO "category"("name")
VALUES('Gas');

-- PUT request for monthly_income
UPDATE "month"
SET "monthly_income" = '400'
WHERE "monthly_income" = 500;


select "c".name, "m".monthly_income,"m".name, "u".username, total_amount,"budget".id FROM "budget"
JOIN "user" AS "u" ON "budget".user_id="u".id
JOIN "month" as "m" ON "budget".month_id= "m".id
JOIN "category" as "c" ON "budget".category_id="c".id
order by "m".name;



SELECT "c".name AS "category_name","transactions".name, amount,"u".username, "b".total_amount FROM "transactions"
left JOIN "budget" AS "b" on "transactions".budget_id="b".id
left JOIN "user" AS "u" ON "transactions".user_id="u".id
left JOIN "month" as "m" ON "b".month_id= "m".id
left JOIN "category" as "c" ON "b".category_id="c".id;



SELECT monthly_income, "user".username FROM "user"
JOIN "month" ON "month".user_id="user".id;


SELECT "c".name AS "category_name","transactions".name, amount,"u".username, "b".total_amount FROM "transactions"
    left JOIN "budget" AS "b" on "transactions".budget_id="b".id
    left JOIN "user" AS "u" ON "transactions".user_id="u".id
    left JOIN "month" as "m" ON "b".month_id= "m".id
    left JOIN "category" as "c" ON "b".category_id="c".id
    WHERE "u".id=4;

SELECT NOW();





 