# Cointrace
<br />
Duration 2-Week 
<br />

Description
Cointrace is a personal budgeting application that looks to create a simple and accessable way to manage financnes on a month to month basis. The idea for this project came from the fact that i always hated getting prompted to connect my bank account before using any budgeting app, this solves that issue. Users are able to log in,select a month,input an income for that month,pick between categories and insert indivisual budgets for those categories.
<br />
[Coinbase](https://cointrace.herokuapp.com/)



## Set up

1. Create a database called prime_app
2. Run the queries that are stored in the database.sql file to populate the tables and insert the values you'll need. Postgres needs  to be installed, seeing that the project was built using it. Postico is recommended for running the queries.
3. Open up your editor and run npm install for this project.
4. In the terminal for this project run npm run server to start the server and npm run client to open a new browser window.

## Usage

1. Login or Register to gain access to the app.
2. On log on, you are sent to an instruction page where the details of how to use the app are shown.
3. On click of a month, you are prompted to input an income for a month then sent to that specific month's page
4. The month page has inputs for budget incomes and expenses within those budgets. To input an expense, simply click the + button and to delete simpy click the trashbin icon.

## Roadmap

Future plans include adding in plaid api to allow users for the option of connect a bank account.
