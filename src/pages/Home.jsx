import React, { useState } from 'react'
import styles from './Home.module.css'

const sampleEvents = [
  {
    id:1, title:'Intro to React Workshop', date:'2025-10-05', club:'Computer Science Club', brief:'Learn the basics of React and build a small app.',
    details:{ time:'4:00 PM - 6:00 PM', location:'Science Building 101', contact:'csclub@calvin.edu', links:['https://github.com/calvin-cs/react-workshop'], full:'A hands-on workshop introducing React fundamentals: components, hooks, and state. Bring a laptop.' }
  },
  {
    id:2, title:'Math Modeling Seminar', date:'2025-10-12', club:'Math Club', brief:'Explore mathematical modeling techniques used in CS and engineering.',
    details:{ time:'2:00 PM - 3:30 PM', location:'Kuyper Hall 202', contact:'mathclub@calvin.edu', links:[], full:'Guest speakers present case studies on mathematical models used in real-world problems.' }
  },
  {
    id:3, title:'Robotics Demo Night', date:'2025-11-03', club:'Engineering Club', brief:'See the latest robotics projects from the engineering teams.',
    details:{ time:'6:00 PM - 8:00 PM', location:'Engineering Lab', contact:'engclub@calvin.edu', links:['https://calvin.edu/engineering'], full:'Demos, refreshments, and opportunities to join project teams.' }
  },
  {
    id:4, title:'Data Science Lightning Talks', date:'2025-11-20', club:'Data Science Club', brief:'Short talks on data projects, tools, and career paths.',
    details:{ time:'5:00 PM - 7:00 PM', location:'Library Auditorium', contact:'datasci@calvin.edu', links:['https://github.com/calvin-ds'], full:'Students present 5-10 minute lightning talks showcasing data analysis and visualizations.' }
  }
]

function Modal({event, onClose}){
  if(!event) return null
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e=>e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <div>
            <div style={{fontWeight:700,fontSize:18}}>{event.title}</div>
            <div style={{color:'#666'}}>{event.date} • {event.details.time}</div>
          </div>
          <button className={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        <div style={{marginTop:12}}>
          <div style={{fontWeight:700}}>Hosted by: <span className={styles.highlight}>{event.club}</span></div>
          <div style={{marginTop:10}}>{event.details.full}</div>
          <div style={{marginTop:8}}><strong>Location:</strong> {event.details.location}</div>
          <div style={{marginTop:4}}><strong>Contact:</strong> {event.details.contact}</div>
          {event.details.links && event.details.links.length>0 && (
            <div style={{marginTop:8}}>
              <strong>Links:</strong>
              <ul>
                {event.details.links.map((l,i)=> <li key={i}><a href={l} target="_blank" rel="noreferrer">{l}</a></li>)}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function EventCard({e, onClick}){
  return (
    <div className={styles.card} onClick={()=>onClick(e)} role="button" tabIndex={0} onKeyDown={(k)=>k.key==='Enter' && onClick(e)}>
      <div className={styles.title}>{e.title}</div>
      <div className={styles.meta}>{e.date} • <span className={styles.highlight}>{e.club}</span></div>
      <div className={styles.desc}>{e.brief}</div>
    </div>
  )
}

export default function Home(){
  const [active, setActive] = useState(null)

  return (
    <div>
      <div className={styles.hero}>
        <div>
          <h1 style={{margin:0}}>Upcoming Events</h1>
          <p style={{margin:0,color:'#555'}}>Join club events, workshops, and meetups across campus.</p>
        </div>
        <a className={styles.ctaBtn} href="https://abstractionhackathon.org/" target="_blank" rel="noreferrer">Calvin Hackathon</a>
      </div>

      <section className={styles.calendar} aria-label="Event calendar">
        {sampleEvents.map(ev => (
          <EventCard key={ev.id} e={ev} onClick={(e)=>setActive(e)} />
        ))}
      </section>

      <Modal event={active} onClose={()=>setActive(null)} />
    </div>
  )
}
