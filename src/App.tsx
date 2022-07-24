import { useState } from 'react';

// imgs
// import profile from './img/dia.png';
// import sekai from './img/sekai.png';
// import mcinfo from './img/mcinfo.png';

import Nav from './Nav';
import './App.css';

function App() { 

  return (
    <div className="App font-mono">

      <Nav />

      <div className='header md:flex justify-center items-center bg-gray-800 h-screen'>

          <img src='https://avatars.githubusercontent.com/u/51194584?v=4' className='profile w-80 rounded-full shadow-lg mr-40' />
          <div className='inf w-2/6'>
            <div className='inform font-semibold text-5xl text-white mb-5'>Boseok Son</div>
            <div className='inform-content text-xl text-slate-300 mb-5'>I'm a 16(15) years old middle school student who likes Programming from Korea. I have been learning Programming since elementary school &#60;3</div>
            <div className='role'>
              <span className='mr-4 px-2 py-1 rounded-md bg-slate-600 shadow-md'><span className='px-1 py-py rounded-full bg-cyan-200 mr-3'></span> <span className='text text-slate-100'>Student</span> </span>
              <span className='mr-4 px-2 py-1 rounded-md bg-slate-600 shadow-md'><span className='px-1 py-py rounded-full bg-cyan-300 mr-3'></span> <span className='text text-slate-100'>Coder</span> </span>
              <span className='px-2 py-1 rounded-md bg-slate-600 shadow-md'><span className='px-1 py-py rounded-full bg-cyan-400 mr-3'></span> <span className='text text-slate-100'>Full-Stack</span> </span>
            </div>
          </div>
      </div>

      <div className='project bg-gray-700 text-center p-20 shadow-sm'>
        <span className='text text-white text-5xl font-bold '>Projects</span>

        <div className='card-main flex justify-center items-center'>

          <a className='card m-10 font-normal p-2 rounded-sm bg-slate-600 w-96 hover:-translate-y-1 duration-100'>
            <div className='card-title text-white text-xl mt-2'>-</div>
          </a>

        </div>
      </div>

      <div className='footer text-center p-20 shadow-sm bg-gray-800'>
        <div className="Nav font-mono">
          <nav className="top-0 left-0 right-0 sm:mx-16 xl:mx-64 py-8 flex justify-between mx-12">
            <a className="flex text-lg cursor-pointer gap-x-1" href="/">
                <span className="text-2xl font-bold text-white">	&copy;2022 DiA</span>
            </a>
          </nav>
        </div>
      </div>

    </div>

    
  )
}

export default App
