import React from 'react'
import styles from './JoinUs.module.css'

export default function JoinUs(){
  return (
    <div>
      <h2>Join Us</h2>
      <p>Fill out this form to join the mailing list. (Form is non-functional in this MVP.)</p>
      <div className={styles.form}>
        <div className={styles.field}>
          <label>Name</label>
          <input className={styles.input} placeholder="Full name" />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input className={styles.input} placeholder="you@calvin.edu" />
        </div>

        <div className={styles.row} style={{marginTop:10}}>
          <div style={{flex:1}}>
            <label>Year</label>
            <select className={styles.input}>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>

          <div style={{flex:2}}>
            <label>Interests</label>
            <input className={styles.input} placeholder="e.g. web dev, ML, robotics" />
          </div>
        </div>

        <div style={{marginTop:12}}>
          <button className={styles.submit}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}
