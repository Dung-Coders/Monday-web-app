import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate();
  return (
    <div className='flex flex-row-1 h-[70px] w-screen mt-[0px] items-center justify-between bg-slate-400'>
        <div className='flex flex-grow items-center justify-start'>
            <h1>Monday.com</h1>
            <ul className='flex flex-grow items-center justify-around'>
                <li>Products</li>
                <li>Teams</li>
                <li>Platform</li>
                <li>Resources</li>
            </ul>
        </div>
        <div className='flex flex-grow items-center justify-start ml-[50px]'>
            <ul className='flex flex-grow items-center justify-around'>
                <li>Prices</li>
                <li>Contact sales</li>
                <li>Log in</li>
            </ul>
            <button className='mr-[20px] bg-lime-400 color-white' 
                                onClick={()=>navigate('signup')}>Get stated<span></span></button>
        </div>
    </div>
  )
}

export default Header