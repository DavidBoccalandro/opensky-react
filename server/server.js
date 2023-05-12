const express = require('express');
const app = express();
const { generateDb, loadDb } = require('./generateData.js');
const bcrypt = require('bcrypt');
const { generateJwt } = require('./jwt.js');

const port = 3001;

app.use(express.json());

app.listen(port, () => {
  console.log(`JSON Server is running in port ${port}`);
  generateDb();
});
