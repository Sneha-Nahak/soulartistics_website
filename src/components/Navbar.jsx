import React, { useState } from 'react'
import {HashLink} from 'react-router-hash-link';
import logo from '../assets/soulartistics-logo-white.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);

  const handleToggle=()=>{
    setIsOpen(prev=>!prev);
  }
  return (
    <header>
    <nav className='nav-container'>
      <HashLink smooth to='/#hero'><img src={logo} alt="soulartistics-logo" /></HashLink> 
      {/* Smooth scrolling on the same page*/}
      <div className='nav-link'>
        <HashLink smooth to='/#hero' >Home</HashLink>
        <HashLink smooth to='/#about' >About</HashLink>
        <HashLink smooth to='/#mywork'>My Work</HashLink>
      </div>
      <div className="hamburger" onClick={handleToggle}>
        {isOpen?<IoMdCloseCircle />:<RxHamburgerMenu/>}
        
        </div>
      <div className={`sidebar ${isOpen?'open-sidebar':''}`}>
        <HashLink smooth to='/#hero' onClick={handleToggle}>Home</HashLink>
        <HashLink smooth to='/#about' onClick={handleToggle}>About</HashLink>
        <HashLink smooth to='/#mywork' onClick={handleToggle}>My Work</HashLink>
      </div>
    </nav>
    </header>
  )
}

export default Navbar
