import { LoginForm } from 'types/pages/login.types';

export const fetchLogin = (credentials: LoginForm) =>
  new Promise((resolve, reject) => {
    const credentialsAreValid = credentials.username === 'admin' && credentials.password === 'admin';
    setTimeout(() => {
      if (credentialsAreValid) {
        resolve({
          id: 1,
          username: credentials.username,
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 2000);
  });
