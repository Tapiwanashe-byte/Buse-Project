const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let transactions = [
  { id: 1, date: '2025-02-19', amount: 50, description: 'Groceries' },
  { id: 2, date: '2025-02-18', amount: 120, description: 'Electricity Bill' }
];

const users = { test: 'password' };

// Login Endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] === password) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Fetch Transactions
app.get('/transactions', (req, res) => {
  res.json(transactions);
});

// Add a New Transaction
app.post('/transactions', (req, res) => {
  const newTransaction = { id: transactions.length + 1, ...req.body };
  transactions.push(newTransaction);
  res.json(newTransaction);
});

// Start Server
app.listen(3000, () => console.log('Backend running on port 3000'));
