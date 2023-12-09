
import React from 'react'
import NavigationHeader from '../NavigationHeader'

const Navbar = () => {
  return (
    <div className='fixed bg-stone-950 w-full z-20 h-16 px-2 flex flex-row justify-between items-center' >
    
    <NavigationHeader/>
    </div>
  )
}

export default Navbar