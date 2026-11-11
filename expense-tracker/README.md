# Expense Tracker

A simple command-line tool for tracking daily spending in cedis.

## How to run it

- You need Node.js 20 or newer isntalled on your machine.
- Then open your IDE (suggested: VScode)
- Open the terminal in the IDE. In VScode you can do this by typying Ctrl + '
- In the terminal that appears, type the following commands one after another

  ```bash
  git clone https://github.com/Newlove-Kwarfo/duabanti-js-newlove.git
  ```

  ```bash
  cd duabanti-js-newlove
  ```

  ```bash
  cd expense-tracker
  ```

  ```bash
  node week06-expense-tracker.js
  ```

  - And you're done! The result you see in the command terminal, that's the expensse tracker

## What I found hard

Getting the per-category totals right took me a while because I couldn't rememebr the syntax and thee meaning of its parameters. So I had to go back to that lession to revise for a bit.

Figuring out how to catch empty argument errors fro the formatExpenses function was quite a sstruggle because to my dismay `.length` didn't work for objects. So I had to search and the syntax I found cuaght empty arguments but not non-empty ones. So in the end I consulted AI to figure out what was goin on. I understand it now.
