const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).json({ error: 'Username and email are required' });
  }
  // Validate email format (example)
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }
  // ... process user data ...
  res.status(201).json({ message: 'User created successfully', user: { username, email } });
});
app.listen(3000, () => console.log('Server listening on port 3000'));