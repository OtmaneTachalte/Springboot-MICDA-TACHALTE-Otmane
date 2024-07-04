import React, { useState } from 'react';
import axios from '../axiosConfig';
import styles from './EntryForm.module.scss';

const EntryForm = ({ user, setEntries }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Change here: send userId directly instead of nested user object
    const entryData = {
      title,
      content,
      date: new Date().toISOString(), // Ensuring date is sent as ISO string
      userId: user.id  // Assuming the backend expects 'userId' directly
    };
    axios.post('/entries', entryData)
      .then(response => {
        setEntries(prevEntries => [...prevEntries, response.data]);
        alert('Entry added successfully!');
      })
      .catch(error => {
        console.error('There was an error!', error);
        alert('Error while adding entry: ' + error.message);
      });
  };

  return (
    <form className={styles.entryForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title</label>
        <input className={styles.input} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Content</label>
        <textarea className={styles.input} value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <button className={styles.button} type="submit">Add Entry</button>
    </form>
  );
};

export default EntryForm;

