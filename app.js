const express = require('express');
const app = express();
const port = 5000; // Change the port to 5000
const cors = require('cors'); // Import the cors package

app.use(express.json());

app.use(cors());

const loginRoute = require('./routes/login');
const registrationRoute = require('./routes/register');

app.use('/login', loginRoute);
app.use('/register', registrationRoute);


app.listen(port, () => {
  console.log(`Node.js server is running on port ${port}`);
});
