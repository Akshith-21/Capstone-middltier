// routes/login.js

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const { email, pswd } = req.body;

  try {
    const response = await axios.post('http://localhost:8080/client/login', { email, pswd });

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
      res.status(response.status).json(response.data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
