import React, { useState } from 'react'

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
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-sky-950 rounded-lg shadow-lg max-w-xl w-full p-6" onClick={e=>e.stopPropagation()}>
        <div className="flex items-start justify-between">
          <div>
            <div className="font-semibold text-lg">{event.title}</div>
            <div className="text-sm text-emerald-600">{event.date} -- {event.details.time}</div>
          </div>
          <button className="text-slate-500 hover:text-slate-600 ml-4" onClick={onClose}>
            &#10005;
          </button>
        </div>
        <div className="mt-4 text-zinc-300">
          <div className="font-medium">Hosted by: <span className="text-emerald-600 font-semibold">{event.club}</span></div>
          <div className="mt-2">{event.details.full}</div>
          <div className="mt-3"><strong>Location:</strong> {event.details.location}</div>
          <div className="mt-1"><strong>Contact:</strong> {event.details.contact}</div>
          {event.details.links && event.details.links.length>0 && (
            <div className="mt-3">
              <strong>Links:</strong>
              <ul className="list-disc list-inside text-emerald-600 mt-1">
                {event.details.links.map((l,i)=> <li key={i}><a className="underline" href={l} target="_blank" rel="noreferrer">{l}</a></li>)}
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
    <div className="bg-white/5 p-4 rounded-lg shadow-sm hover:shadow-md cursor-pointer transition" onClick={()=>onClick(e)} role="button" tabIndex={0} onKeyDown={(k)=>k.key==='Enter' && onClick(e)}>
      <div className="font-semibold text-md">{e.title}</div>
      <div className="text-sm text-slate-400">{e.date}  <span className="text-emerald-500 font-medium">{e.club}</span></div>
      <div className="mt-2 text-slate-200">{e.brief}</div>
    </div>
  )
}

export default function Home(){
  const [active, setActive] = useState(null)

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 text-white rounded-lg p-8">
        <h1 className="text-2xl font-bold m-0">Upcoming Events</h1>
        <p className="m-0 text-slate-100/90 mt-1">Join club events, workshops, and meetups across campus.</p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label="Event calendar">
        {sampleEvents.map(ev => (
          <EventCard key={ev.id} e={ev} onClick={(e)=>setActive(e)} />
        ))}
      </section>

      <Modal event={active} onClose={()=>setActive(null)} />
    </div>
  )
}
