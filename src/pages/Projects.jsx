import React from 'react'
import styles from './Projects.module.css'

const projects = [
  {id:1, title:'Campus Map App', desc:'A React app to navigate campus buildings with accessibility filters.', repo:'https://github.com/calvin-cs/campus-map'},
  {id:2, title:'StudyBuddy Mobile', desc:'A React Native app connecting students for study sessions and resource sharing.', repo:'https://github.com/calvin-cs/studybuddy'},
  {id:3, title:'Hackathon Dashboard', desc:'Data dashboard showcasing hackathon submissions and analytics.', repo:'https://github.com/calvin-cs/hackathon-dashboard'},
  {id:4, title:'ML Project: Course Recommender', desc:'A small recommender system to suggest courses using simple collaborative filtering.', repo:'https://github.com/calvin-cs/course-recommender'}
]

export default function Projects(){
  return (
    <div>
      <h2>Projects</h2>
      <p>Selected projects by our members. Click the GitHub link to explore the code.</p>
      <section className={styles.projectsGrid}>
        {projects.map(p=> (
          <div key={p.id} className={styles.projCard}>
            <div className={styles.thumb}>{p.title}</div>
            <div style={{marginTop:10,fontWeight:700}}>{p.title}</div>
            <div className={styles.meta} style={{marginTop:6}}>{p.desc}</div>
            <div style={{marginTop:10}}><a className={styles.btn} href={p.repo} target="_blank" rel="noreferrer">View on GitHub</a></div>
          </div>
        ))}
      </section>
    </div>
  )
}
