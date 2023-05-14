import { ChangeEvent, FormEvent, useState } from "react";
import { LoginForm } from 'types/pages/login.types';
import { fetchLogin } from 'utils/login.request';
import { LocalStorage } from "utils/LocalStorage";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
  const initialFormValues: LoginForm = { username: '', password: '' };
  const [credentials, setCredentials] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleCredentialsChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    fetchLogin(credentials)
      .then((res) => {
        LocalStorage.jwt = res.data;
        setCredentials(initialFormValues);
        navigate('/dashboard');
      })
      .catch((err) => {
        LocalStorage.jwt = null;
        console.log(err);
      })
      .finally(() => setLoading(false));
  }
  const formDisabled = !credentials.username || !credentials.password;

  if (LocalStorage.jwt) {
    return <Navigate to="/dashboard" replace />
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      {loading && <span>Loading...</span>}
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" placeholder="Username" value={credentials.username} onChange={handleCredentialsChanges} />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" placeholder="Password" value={credentials.password} onChange={handleCredentialsChanges} />
      <button type="submit" disabled={formDisabled} >Submit</button>
    </form>
  )
};
