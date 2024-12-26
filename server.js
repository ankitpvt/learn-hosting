const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let todos = [
  { id: 1, task: 'Learn Node.js' },
  { id: 2, task: 'Build a To-Do app' }
];

// Get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, task: req.body.task };
  todos.push(newTodo);
  res.json(newTodo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
  todos = todos.filter(todo => todo.id !== parseInt(req.params.id));
  res.json({ message: 'Todo deleted' });
});

// Export the app (required for Vercel serverless functions)
module.exports = app;
