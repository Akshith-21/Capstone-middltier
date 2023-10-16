require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

router.post('/', async (req, res) => {
  const registrationData = req.body;
  let response;
  try {
    response = await axios.post('http://localhost:8080/client/register', registrationData);

    if (response.status === 200) {
      let payload = (response.data);
      const token = jwt.sign(payload,secretKey,{expiresIn: '5m'});
      res.status(response.status).json({token: token});
    } 
  } catch (error) {
    if(error.response.status == 400){
      console.log("*&^%$#$^");
        res.status(400).json(error.response.data);
    }
    else if(error.response.status == 500){
      console.log("%^%$#$^%&");
      res.status(500).json("Server is down,connection cannot establish");
    }
    else{
      res.status(500).json("Server is down,connection cannot establish");
    }
}});

module.exports = router;
