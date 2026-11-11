# Expense Tracker
 
A command-line tool for tracking daily spending in cedis. Built for a student in
Accra who was losing track of where their allowance went.
 
## How to run it
 
You need Node.js 20 or newer.
 
    git clone https://github.com/yourname/duabanti-js-yourname
    cd duabanti-js-yourname
    node week06-expense-tracker.js
 
## What I found hard
 
Getting the per-category totals out of `reduce` took me most of a Saturday. I had
the accumulator right but kept forgetting to return it, so every pass after the
first got `undefined`. Writing out what each pass actually held on paper is what
fixed it.