const express = require('express');
const app = express();
const { generateDb, loadDb } = require('./generateData.js');
const bcrypt = require('bcrypt');
const { generateJwt } = require('./jwt.js');

const port = 3001;

app.use(express.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`JSON Server is running in port ${port}`);
  generateDb();
});
