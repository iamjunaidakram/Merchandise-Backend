const express = require('express');
const app = express();
const port = 4000; // Use any port number you prefer

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));

app.get('/api/greeting', (req, res) => {
    res.json({ message: 'Hello, API!' });
  });

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.use(require('./routes/userRoutes'))


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});