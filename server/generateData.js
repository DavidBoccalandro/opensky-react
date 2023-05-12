const { writeFile } = require('fs');
const { resolve } = require('path');
const bcrypt = require('bcrypt');

const initialData = [
  { id: 1, username: 'username1', password: 'password1' },
  { id: 2, username: 'username2', password: 'password2' },
  { id: 3, username: 'username3', password: 'password3' },
];

export const generateDb = () => {
  const hashedData = initialData.map((item) => {
    return {
      ...item,
      hashedPassword: bcrypt.hashSync(item.password, 10),
    };
  });

  writeFile(resolve(__dirname, '/db.json'), JSON.parse(hashedData));
};
