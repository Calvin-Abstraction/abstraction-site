import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header(){
  return (
    <header className={styles.nav}>
      <div className={styles.brand}>
        <div className={styles.logo}>CS</div>
        <div>
          <div style={{fontWeight:700}}>Calvin CS Club</div>
          <div style={{fontSize:12,color:'#666'}}>Computer Science Student Organization</div>
        </div>
      </div>

      <nav className={styles.links}>
        <NavLink to="/" exact className={styles.link} activeStyle={{fontWeight:700,color:'#648942'}}>Home</NavLink>
        <NavLink to="/projects" className={styles.link} activeStyle={{fontWeight:700,color:'#648942'}}>Projects</NavLink>
        <NavLink to="/about" className={styles.link} activeStyle={{fontWeight:700,color:'#648942'}}>About</NavLink>
        <NavLink to="/join" className={styles.link} activeStyle={{fontWeight:700,color:'#648942'}}>Join Us</NavLink>
        <a className={styles.cta} href="https://abstractionhackathon.org/" target="_blank" rel="noopener noreferrer">Calvin Hackathon</a>
      </nav>
    </header>
  )
}
