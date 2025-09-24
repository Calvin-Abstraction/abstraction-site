import React from 'react';
import styles from './Footer.module.css';

export default function Footer(){
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.small}><strong>Calvin University CS Club</strong></div>
        <div className={styles.small}>Contact: csclub@calvin.edu</div>
        <div className={styles.small}>Grand Rapids, MI</div>
      </div>

      <div className={styles.links}>
        <a href="/">Home</a>
        <a href="/projects">Projects</a>
        <a href="/about">About</a>
        <a href="/join">Join Us</a>
      </div>

      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
