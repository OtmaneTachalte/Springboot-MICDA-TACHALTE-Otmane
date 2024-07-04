import React, { useState, useEffect } from 'react';
import axios from '../axiosConfig';
import EntryForm from '../components/EntryForm';
import EntryEditForm from '../components/EntryEditForm';
import styles from './Entries.module.scss';

const Entries = ({ user }) => {
  const [entries, setEntries] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    if (user) {
      axios.get(`/entries/user/${user.id}`)
        .then(response => {
          setEntries(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching entries!', error);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    axios.delete(`/entries/${id}`)
      .then(() => {
        setEntries(entries.filter(entry => entry.id !== id));
      })
      .catch(error => {
        console.error('There was an error deleting the entry!', error);
      });
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
  };

  const handleUpdate = (updatedEntry) => {
    axios.put(`/entries/${updatedEntry.id}`, updatedEntry)
      .then(response => {
        setEntries(entries.map(entry => (entry.id === updatedEntry.id ? response.data : entry)));
        setEditingEntry(null);
      })
      .catch(error => {
        console.error('There was an error updating the entry!', error);
      });
  };

  return (
    <div className={styles.entriesContainer}>
      <h1>Entries</h1>
      {user && !editingEntry && <EntryForm user={user} setEntries={setEntries} />}
      {editingEntry && <EntryEditForm entry={editingEntry} handleUpdate={handleUpdate} />}
      <ul className={styles.entryList}>
        {entries.map(entry => (
          <li key={entry.id} className={styles.entryItem}>
            <h2 className={styles.entryTitle}>{entry.title}</h2>
            <p className={styles.entryContent}>{entry.content}</p>
            <p className={styles.entryDate}>{new Date(entry.date).toLocaleString()}</p>
            <div className={styles.buttons}>
              <button className={styles.button} onClick={() => handleEdit(entry)}>Edit</button>
              <button className={`${styles.button} ${styles.delete}`} onClick={() => handleDelete(entry.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries;
