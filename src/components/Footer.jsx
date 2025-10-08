import React from 'react';

export default function Footer(){
  return (
    <footer className="w-full border-t border-slate-800 mt-8 py-6 px-6 text-slate-300 bg-slate-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
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
      </div>
    </footer>
  )
}
