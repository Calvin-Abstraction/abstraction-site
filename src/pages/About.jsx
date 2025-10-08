import React from 'react'

const leaders = [
  {id:1,name:'Alex Johnson', role:'President (2026)', bio:'Focused on web dev and mentoring new members.'},
  {id:2,name:'Priya Singh', role:'Vice President (2026)', bio:'Interested in ML and data science projects.'},
  {id:3,name:'Marcus Lee', role:'Secretary (2027)', bio:'Systems and cloud enthusiast, organizes workshops.'}
]

export default function About(){
  return (
    <div>
      <h2 className="text-2xl font-bold">About the Club</h2>
      <p className="mt-2 text-slate-300">We are the Calvin University Computer Science Club — a student-run organization that fosters practical learning through workshops, projects, and hackathons. Members gain mentorship, collaborative project experience, and opportunities to present work.</p>

      <section className="mt-6">
        <h3 className="text-xl font-semibold">Leadership</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {leaders.map(l=> (
            <div className="bg-white/5 p-4 rounded-lg shadow-sm" key={l.id}>
              <div className="bg-slate-600 h-24 w-full rounded-md flex items-center justify-center text-white/80">Photo</div>
              <div className="mt-3 text-lg font-semibold">{l.name}</div>
              <div className="text-sm text-slate-400">{l.role}</div>
              <div className="mt-2 text-slate-200">{l.bio}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
