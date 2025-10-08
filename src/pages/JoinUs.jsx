import React from 'react'

export default function JoinUs(){
  return (
    <div>
      <h2 className="text-2xl font-bold">Join Us</h2>
      <p className="mt-2 text-slate-300">Fill out this form to join the mailing list. (Form is non-functional in this MVP.)</p>
      <div className="mt-4 bg-white/5 p-4 rounded-md max-w-xl">
        <div className="mb-3">
          <label className="block text-sm text-slate-200 mb-1">Name</label>
          <input className="w-full bg-transparent border border-slate-700 rounded px-3 py-2 text-slate-100" placeholder="Full name" />
        </div>

        <div className="mb-3">
          <label className="block text-sm text-slate-200 mb-1">Email</label>
          <input className="w-full bg-transparent border border-slate-700 rounded px-3 py-2 text-slate-100" placeholder="you@calvin.edu" />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-sm text-slate-200 mb-1">Year</label>
            <select className="w-full bg-transparent border border-slate-700 rounded px-3 py-2 text-slate-100">
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm text-slate-200 mb-1">Interests</label>
            <input className="w-full bg-transparent border border-slate-700 rounded px-3 py-2 text-slate-100" placeholder="e.g. web dev, ML, robotics" />
          </div>
        </div>

        <div className="mt-4">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </div>
  )
}
