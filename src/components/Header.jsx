import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(){
  return (
    <header className="site-header">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-emerald-400 flex items-center justify-center text-white font-bold">CS</div>
        <div>
          <div className="font-semibold">Calvin CS Club</div>
          <div className="text-sm text-slate-400">Computer Science Student Organization</div>
        </div>
      </div>

      <nav className="flex items-center gap-4">
        <NavLink to="/" end className={({isActive}) => `px-2 py-1 rounded-md transition ${isActive? 'font-semibold text-emerald-600' : 'text-slate-200 hover:bg-white/3 hover:-translate-y-0.5'}`} >Home</NavLink>
        <NavLink to="/projects" className={({isActive}) => `px-2 py-1 rounded-md transition ${isActive? 'font-semibold text-emerald-600' : 'text-slate-200 hover:bg-white/3 hover:-translate-y-0.5'}`}>Projects</NavLink>
        <NavLink to="/about" className={({isActive}) => `px-2 py-1 rounded-md transition ${isActive? 'font-semibold text-emerald-600' : 'text-slate-200 hover:bg-white/3 hover:-translate-y-0.5'}`}>About</NavLink>
        <NavLink to="/join" className={({isActive}) => `px-2 py-1 rounded-md transition ${isActive? 'font-semibold text-emerald-600' : 'text-slate-200 hover:bg-white/3 hover:-translate-y-0.5'}`}>Join Us</NavLink>
        <a className="ml-2 inline-block bg-emerald-600 text-white px-3 py-1 rounded-md" href="https://abstractionhackathon.org/" target="_blank" rel="noopener noreferrer">Calvin Hackathon</a>
      </nav>
    </header>
  )
}
