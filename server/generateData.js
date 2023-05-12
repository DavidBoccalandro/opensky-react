const { writeFileSync, readFileSync } = require('fs');
const { join } = require('path');
const bcrypt = require('bcrypt');

const initialData = [
  { id: 1, username: 'username1', password: 'password1', hashedPassword: '' },
  { id: 2, username: 'username2', password: 'password2', hashedPassword: '' },
  { id: 3, username: 'username3', password: 'password3', hashedPassword: '' },
];

const generateDb = () => {
  const hashedData = initialData.map((item) => {
    return {
      ...item,
      hashedPassword: bcrypt.hashSync(item.password, 10),
    };
  });
  saveDb(hashedData);
};

const saveDb = (data) => {
  writeFileSync(join(__dirname, '/db.json'), JSON.stringify(data));
};

const loadDb = () => {
  return JSON.parse(readFileSync(join(__dirname, '/db.json'), 'utf-8'));
};

module.exports = {
  generateDb,
  saveDb,
  loadDb,
};
