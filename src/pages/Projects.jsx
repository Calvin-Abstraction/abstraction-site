import React from 'react'

const projects = [
  {id:1, title:'Campus Map App', desc:'A React app to navigate campus buildings with accessibility filters.', repo:'https://github.com/calvin-cs/campus-map'},
  {id:2, title:'StudyBuddy Mobile', desc:'A React Native app connecting students for study sessions and resource sharing.', repo:'https://github.com/calvin-cs/studybuddy'},
  {id:3, title:'Hackathon Dashboard', desc:'Data dashboard showcasing hackathon submissions and analytics.', repo:'https://github.com/calvin-cs/hackathon-dashboard'},
  {id:4, title:'ML Project: Course Recommender', desc:'A small recommender system to suggest courses using simple collaborative filtering.', repo:'https://github.com/calvin-cs/course-recommender'}
]

export default function Projects(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects</h2>
      <p className="mt-2 text-slate-300">Selected projects by our members. Click the GitHub link to explore the code.</p>
      <section className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map(p=> (
          <div key={p.id} className="bg-white/5 p-4 rounded-lg shadow-sm">
            <div className="bg-slate-600 h-28 rounded-md flex items-center justify-center text-white/80">{p.title}</div>
            <div className="mt-3 font-semibold">{p.title}</div>
            <div className="text-slate-300 mt-2">{p.desc}</div>
            <div className="mt-3"><a className="inline-block bg-emerald-600 text-white px-3 py-1 rounded" href={p.repo} target="_blank" rel="noreferrer">View on GitHub</a></div>
          </div>
        ))}
      </section>
    </div>
  )
}
