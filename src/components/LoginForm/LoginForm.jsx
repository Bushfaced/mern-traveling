import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import './LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <main className='container' id='loginForm'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
            <label  className="form-label">Email</label>
            <input type="email" name="email" className="form-control" aria-describedby="emailHelp" placeholder='What you signed up with or ^' value={credentials.email} onChange={handleChange} required />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="row g-3 align-items-center">
            <label className="form-label">Password</label>
            <input type="password" name="password" className="form-control" placeholder='I hope you know it!' value={credentials.password} onChange={handleChange} required />
            <button type="submit" className="btn btn-primary">LOG IN</button>
        </div>
        <p className="error-message">&nbsp;{error}</p>
      </form>
    </main>
  );
}