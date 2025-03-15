import React from 'react';
import styles from './Phrase.module.css';

const Phrase = () => {
  return (
    <div className={styles.phraseContainer}>
      <h2 className={styles.phraseTitle}>SURFACES, SPORT FLOORING AND EQUIPMENT</h2>
      <p className={styles.phraseText}>
        Thousands of athletes competed on MONDO surfaces and artificial turf systems reaching
        outstanding results, breaking world records and overcoming their own limits.
      </p>
      <p className={styles.phraseText}>
        It is thanks to their help and constant feedback that we have redefined the standards of
        sports flooring, setting the benchmark for new achievements to come.
      </p>
    </div>
  );
};

export default Phrase;