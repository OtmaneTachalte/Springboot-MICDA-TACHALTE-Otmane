import React, { useState, useEffect } from 'react';
import styles from './EntryEditForm.module.scss';

const EntryEditForm = ({ entry, handleUpdate }) => {
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  useEffect(() => {
    setTitle(entry.title);
    setContent(entry.content);
  }, [entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntry = {
      ...entry,
      title,
      content,
      date: new Date().toISOString() // Ensure the date is updated
    };
    handleUpdate(updatedEntry);
  };

  return (
    <form className={styles.entryEditForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Title</label>
        <input
          className={styles.input}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Content</label>
        <textarea
          className={styles.input}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">Update Entry</button>
    </form>
  );
};

export default EntryEditForm;
