const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const registrationData = req.body;

  try {
    const response = await axios.post('http://localhost:8080/client/register', registrationData);

    if (response.status === 200) {
      res.status(200).json(response.data);
    } else {
        console.log("Error")
      res.status(response.status).json(response.data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
