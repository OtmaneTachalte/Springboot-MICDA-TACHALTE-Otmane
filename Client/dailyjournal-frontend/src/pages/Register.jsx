import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.scss';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/api/users/register', { username, password })
      .then(response => {
        alert('User registered successfully');
        navigate('/login'); // Redirect to login page
      })
      .catch(error => {
        alert('Error registering user');
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form className={styles.registerForm} onSubmit={handleRegister}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Username</label>
          <input className={styles.input} type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input className={styles.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
