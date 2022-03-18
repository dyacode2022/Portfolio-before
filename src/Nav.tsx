import { useState } from 'react';
import profile from './img/dia.png';
import './App.css';

function Nav() {

  return (
    <div className="Nav font-mono">
      <nav className="absolute top-0 left-0 right-0 sm:mx-16 xl:mx-64 py-12 flex justify-between mx-12">
        <a className="flex text-lg cursor-pointer gap-x-1" href="/">
            <span className="text-2xl font-bold text-white">DiA</span>
        </a>
        <a className="flex gap-x-1 items-center text-slate-300 hover:text-white text-xl" href='https://github.com/dya-code'>
            <span className='font-light'>Github</span>
        </a>
    </nav>
    </div>
  )
}

export default Nav