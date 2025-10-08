import React from 'react';

export default function Footer(){
  return (
    <footer className="site-footer flex flex-wrap justify-between gap-4">
      <div>
        <div className="text-sm text-slate-200 font-semibold">Calvin University CS Club</div>
        <div className="text-sm text-slate-400">Contact: csclub@calvin.edu</div>
        <div className="text-sm text-slate-400">Grand Rapids, MI</div>
      </div>

      <div className="flex gap-4 items-center">
        <a className="text-slate-200 hover:underline" href="/">Home</a>
        <a className="text-slate-200 hover:underline" href="/projects">Projects</a>
        <a className="text-slate-200 hover:underline" href="/about">About</a>
        <a className="text-slate-200 hover:underline" href="/join">Join Us</a>
      </div>

      <div className="flex gap-3 items-center">
        <a className="text-slate-200 hover:underline" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a className="text-slate-200 hover:underline" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </footer>
  )
}
