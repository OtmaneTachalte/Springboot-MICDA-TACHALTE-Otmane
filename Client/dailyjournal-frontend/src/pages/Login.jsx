import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/login', { username, password })
      .then(response => {
        const token = response.data;
        localStorage.setItem('token', token);
        setUser({ username, token });
        alert('Login successful');
        navigate('/entries'); // Redirect to entries page
      })
      .catch(error => {
        alert('Invalid username or password');
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.button} type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
