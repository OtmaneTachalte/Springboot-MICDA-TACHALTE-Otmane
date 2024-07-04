import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Daily Journal</h1>
      <p className={styles.description}>Your personal space to write down your thoughts and keep track of your daily activities.</p>
    </div>
  );
};

export default Home;
