import React from 'react';
import { MdLiveTv } from 'react-icons/md';
import {FaUserFriends} from'react-icons/fa';
import {BiNews} from 'react-icons/bi';
import {ImHome} from 'react-icons/im';
import {CgProfile} from 'react-icons/cg';
import {FiShoppingCart, FiSettings} from'react-icons/fi';
import {Link} from 'react-router-dom';
import '../helper/Sidebar.css'


function Sidenavbar() {
  return (
    <div className='body min-h-screen lg:w-1/4'>
    <div className='navigator mx-2 my-8 w-16 md:w-44 bg-slate-300 rounded-2xl box-[initial]'>
      <ul className='top-0 left-0 w-full pl-1 py-10'>
        <li className='list active relative list-none w-full'>
          <Link to='/User' className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><ImHome className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Home</span>
                </Link>
                </li>
                <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><CgProfile className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Profile</span>
                </a>
                </li>
        <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><BiNews className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>News</span>
                </a>
                </li>
        <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><FaUserFriends className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Connection</span>
                </a>
                </li>
        <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><MdLiveTv className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Live Stream</span>
                </a>
                </li>
        <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><FiShoppingCart className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Market</span>
                </a>
                </li>
        <li className='list relative list-none w-full'>
          <a href="" className=' relative flex w-full text-sky-700 font-bold'>
            <span className='icons relative flex pl-2 min-w-[60px] h-[60px] text-center items-center'><FiSettings className='text-amber-500' /></span>
              <span className='title relative block pl-3 h-[60px] opacity-0 md:opacity-[1]'>Setting</span>
                </a>
                </li>
      </ul>
     
      </div>
    </div>
  )
}

export default Sidenavbar;