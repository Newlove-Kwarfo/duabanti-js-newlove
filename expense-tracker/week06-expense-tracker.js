//THINKING/ PLANNING NOTES
//What does it need to do?

//hold a list of expenses — description, amount in cedis, category, date
//how one expense looks like btw:
const expense = {
  description: "Taxi to campus",
  amount: 15,
  category: "Transport",
  date: "2026-10-26",
};

// add an expense
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

// //REQUIREMENTS CHECKLIST
// [ ] At least 5 functions, each doing one thing
// [X] An array of expense objects (description, amount, category, date), read with dot notation as in Week 5
// [X] An addExpense(expenses, expense) function that returns the new list
// [halfX] A loop and a conditional, used because they are needed
// [X] Money formatted as cedis
// [ ] Does not crash on an empty list
// [ ] A README.md — what it does, how to run it, what you found hard
// [ ] A NOTES.md — what you built, what got you stuck, whether you used AI

// 1. DATA AND SETTINGS
const BUDGET = 1000;
const expensesE = [];
const expenses = [
  {
    description: "Taxi to campus",
    amount: 15,
    category: "Transport",
    date: "2026-10-26",
  },
  {
    description: "Trotro to campus",
    amount: 5,
    category: "Transport",
    date: "2026-10-28",
  },
  {
    description: "Bought fried rice",
    amount: 35,
    category: "Food",
    date: "2026-10-28",
  },
  {
    description: "Lab manual fees",
    amount: 240,
    category: "Education",
    date: "2026-10-15",
  },
  {
    description: "Grocerry shopping for the month",
    amount: 315,
    category: "Food",
    date: "2026-11-03",
  },
];

// 2. FUNCTIONS
function addExpense(expenses, expense) {
  //adds a new expense object to expense in new array and returns it.
  const updatedExpenses = [];
  for (const object of expenses) {
    updatedExpenses.push(object);
  }
  updatedExpenses.push(expense);
  return updatedExpenses;
}

function formatExpense(expense) {
  return `
  ${expense.date}   ${expense.description}                GHc${expense.amount.toFixed(2)}`;
}

function getTotal(expenses) {}

// 3. The part that actually runs and prints
//console.log(formatReport(expenses));

// TESTING addExpense
const newExpense = {
  description: "Went to arcade",
  amount: 236,
  category: "Fun",
  date: "2026-11-13",
};

// console.log(addExpense(expenses, newExpense));

//TESTING formatExpense
console.log(formatExpense(newExpense));
