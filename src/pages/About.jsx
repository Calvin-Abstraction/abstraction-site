import React from 'react'
import styles from './About.module.css'

const leaders = [
  {id:1,name:'Alex Johnson', role:'President (2026)', bio:'Focused on web dev and mentoring new members.'},
  {id:2,name:'Priya Singh', role:'Vice President (2026)', bio:'Interested in ML and data science projects.'},
  {id:3,name:'Marcus Lee', role:'Secretary (2027)', bio:'Systems and cloud enthusiast, organizes workshops.'}
]

export default function About(){
  return (
    <div>
      <h2>About the Club</h2>
      <p>We are the Calvin University Computer Science Club — a student-run organization that fosters practical learning through workshops, projects, and hackathons. Members gain mentorship, collaborative project experience, and opportunities to present work.</p>

      <section style={{marginTop:20}}>
        <h3>Leadership</h3>
        <div className={styles.teamGrid}>
          {leaders.map(l=> (
            <div className={styles.card} key={l.id}>
              <div className={styles.photo}>Photo</div>
              <div className={styles.name}>{l.name}</div>
              <div className={styles.role}>{l.role}</div>
              <div style={{marginTop:8,color:'#444'}}>{l.bio}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
