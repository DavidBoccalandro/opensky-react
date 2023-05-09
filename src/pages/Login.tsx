import { ChangeEvent, FormEvent, useState } from "react";
import { LoginForm } from 'types/pages/login.types';
import { fetchLogin } from 'utils/login.request';

export const Login = () => {
  const initialFormValues: LoginForm = { username: '', password: '' };
  const [credentials, setCredentials] = useState(initialFormValues);
  const [loading, setLoading] = useState(false);
  const handleCredentialsChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    fetchLogin(credentials)
      .then((res) => {
        console.log(res);
        setCredentials(initialFormValues);
      })
      .catch(console.log)
      .finally(() => setLoading(false));
  }
  const formDisabled = !credentials.username || !credentials.password;

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
