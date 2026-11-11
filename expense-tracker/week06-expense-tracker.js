//What does it need to do?

// hold a list of expenses — description, amount in cedis, category, date
//how one expense looks like btw:
const expense = {
  description: "Taxi to campus",
  amount: 15,
  category: "Transport",
  date: "2026-10-26",
};

// add an expense reading expense
// show all expenses, nicely formatted
// total the spending
// total per category
// show the most expensive item
// warn when spending passes a budget

//FUNCTION NAMES
// addExpense(expenses, expense)    -> new array
// formatExpense(expense)           -> string
// getTotal(expenses)               -> number
// getTotalByCategory(expenses)     -> object
// getMostExpensive(expenses)       -> expense or undefined
// isOverBudget(expenses, budget)   -> true/false

function addExpense(expenses, expense) { //requrieed funciton btw

}

// 1. Data and settings
const BUDGET = 500;
const expenses = [ /* ... */ ];
 
// 2. Functions — each does one thing, returns a value
function getTotal(expenses) { }
function formatExpense(expense) { }
 
// 3. The part that actually runs and prints
console.log(formatReport(expenses));