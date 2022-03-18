import { useState } from 'react';
import profile from './img/dia.png';
import Nav from './Nav';
import './App.css';

function App() {

  return (
    <div className="App font-mono">
      <Nav />

      <div className='header flex justify-center items-center bg-gray-800 h-screen'>
          <img src='https://avatars.githubusercontent.com/u/51194584?v=4' className='profile w-80 rounded-full shadow-lg mr-40' />
          <div className='inf w-2/6'>
            <div className='inform font-semibold text-5xl text-white mb-5'>Boseok Son</div>
            <div className='inform-content text-xl text-slate-300 mb-5'>I'm a 16(15) years old middle school student who likes Programming from Korea. I have been learning Programming since elementary school and My hobbies are watching anime and reading light novels. &#60;3</div>
            <div className='role'>
              <span className='mr-4 px-2 py-1 rounded-md bg-slate-600 shadow-md'><span className='px-1 py-py rounded-full bg-cyan-300 mr-3'></span> <span className='text text-slate-100'>Coder</span> </span>
              <span className='px-2 py-1 rounded-md bg-slate-600 shadow-md'><span className='px-1 py-py rounded-full bg-cyan-400 mr-3'></span> <span className='text text-slate-100'>Full-Stack</span> </span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App
