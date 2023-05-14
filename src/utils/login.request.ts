import { LoginForm } from 'types/pages/login.types';
import axios from 'axios';

export const fetchLogin = (credentials: LoginForm) => axios.post('http://localhost:3001/login', credentials);
