//THINKING AND PLANNING NOTES

//What it needs to do:
//hold a list of expenses
// add an expense
// shows all expenses, nicely formatted
// total the spending
// total per category
// show the most expensive item
// warn when spending passes a budget

//FUNCTION NAMES
//  addExpense(expenses, expense)    -> new array
//  formatExpense(expense)           -> string
//  formatAll(expenses)              -> string
//  getTotal(expenses)               -> number
//  getTotalByCategory(expenses)     -> object
//  getMostExpensive(expenses)       -> expense or undefined
//  isOverBudget(expenses, budget)   -> true/false
//  formatReport(expenses)            -> string

// 1. DATA AND SETTINGS
const BUDGET = 1000;
const expensesEmpty = []; //was used to test functions catching empty inputs
const newExpense = {
  description: "Went to arcade",
  amount: 236,
  category: "Fun",
  date: "2026-11-13",
};

const newExpenseEmpty = {};
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
    description: "Grocerry shopping",
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
  // shows one expenses, nicely formatted
  const isEmpty = !expense || Object.keys(expense).length === 0; //checkst if expense exist or if it is empty
  if (isEmpty) {
    return `[date]   [description]   [category]    [amount]
No information found in expense`;
  }
  return `
  ${expense.date}   ${expense.description}   ${expense.category}               GHc${expense.amount.toFixed(2)}`;
}

function formatAll(expenses) {
  // shows all expenses, nicely formatted
  if (expenses.length === 0) return `No expenses logged yet`;
  return `
  DATE         DESCRIPTION     CATEGORY                 AMOUNT
  ${expenses.map((expense) => formatExpense(expense))}`;
}

function getTotal(expenses) {
  // totals the spending
  return expenses.reduce((sum, expense) => sum + expense.amount, 0);
}

function getTotalByCategory(expenses) {
  // totals spending per category
  return expenses.reduce((sum, expense) => {
    sum[expense.category] = sum[expense.category] ?? 0 + expense.amount;
    return sum;
  }, {});
}

function getMostExpensive(expenses) {
  // gets the most expensive item
  return expenses.slice().sort((a, b) => b.amount - a.amount)[0];
}

function isOverBudget(expenses, budget) {
  // retruns true when spending passes budget
  if (getTotal(expenses) > budget) return true;
  return false;
}

function formatReport(expenses) {
  //formats all info into a report to be printed

  return `
                            EXPENSE REPORT
  -----------------------------------------------------------------
  ${formatAll(expenses)}

  BUDGET AMOUNT: ${BUDGET}
  TOTAL SPENT: ${getTotal(expenses)}
  OVER BUDGET STATUS: ${isOverBudget(expenses, BUDGET)}
  `;
}

//TESTS
/*
// TESTING addExpense
console.log(addExpense(expenses, newExpense));
console.log(addExpense(expenses, newExpenseEmpty));

//TESTING formatExpense
console.log(formatExpense(newExpense));
console.log(formatExpense(newExpenseEmpty));

//TESTING getTotal
console.log(getTotal(expensesEmpty));
console.log(getTotal(expenses));

//TESTIN getTotalByCategory
console.log(getTotalByCategory(expensesEmpty));
console.log(getTotalByCategory(expenses));

//TESTING getMostExpensive
console.log(getMostExpensive(expensesEmpty));
console.log(getMostExpensive(expenses));

//TESTING isOverBudget
console.log(isOverBudget(expensesEmpty, BUDGET));
console.log(isOverBudget(expenses, BUDGET));

//TESTING
console.log(formatAll(expensesEmpty));
console.log(formatAll(expenses));
*/

// 3. The part that actually runs and prints
console.log(formatReport(expenses));
