const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Database connection
const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'expense_tracker'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to the database');
});

// REST API routes
app.post('/api/expenses', (req, res) => {
  const { description, amount } = req.body;
  const sql = 'INSERT INTO expenses (description, amount) VALUES (?, ?)';
db.query(sql, [description, amount], (err, result) => {
    if (err) {
      console.error('Error inserting expense:', err);
      res.status(500).json({ error: 'Failed to add expense' });
      return;
    }
    
    const expense = { id: result.insertId, description, amount };
    res.status(201).json(expense);
  });
});

app.delete('/api/expenses/:id', (req, res) => {
  const expenseId = req.params.id;
  const sql = 'DELETE FROM expenses WHERE id = ?';
  
  db.query(sql, expenseId, (err, result) => {
    if (err) {
      console.error('Error deleting expense:', err);
      res.status(500).json({ error: 'Failed to delete expense' });
      return;
    }
    
    res.sendStatus(204);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
