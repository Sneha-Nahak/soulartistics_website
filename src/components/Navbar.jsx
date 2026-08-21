import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import logo from '../assets/soulartistics-logo-white.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdCloseCircle } from "react-icons/io";
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  }

  const isActive = (path) => {
    // For home page sections (with hash)
    if (path.includes('#')) {
      // Only active on home page
      if (location.pathname !== '/') return false;
      // Check if the hash matches the current hash
      return window.location.hash === path.split('/').pop();
    }
    // For full page routes (like /ui-ux-branding)
    return location.pathname === path;
  }

  return (
    <header>
      <nav className='nav-container'>
        <HashLink smooth to='/#hero'><img src={logo} alt="soulartistics-logo" /></HashLink>
        {/* Desktop Navigation */}
        <div className='nav-link'>
          <HashLink smooth to='/#hero' className={location.pathname === '/' && (window.location.hash === '#hero' || window.location.hash === '') ? 'nav-active' : ''}>Home</HashLink>
          <HashLink smooth to='/#about' className={location.pathname === '/' && window.location.hash === '#about' ? 'nav-active' : ''}>About</HashLink>
          <HashLink smooth to='/#mywork' className={location.pathname === '/' && window.location.hash === '#mywork' ? 'nav-active' : ''}>My Work</HashLink>
          <HashLink smooth to='/ui-ux-branding' className={location.pathname === '/ui-ux-branding' ? 'nav-active' : ''}>UI/UX & Branding</HashLink>
        </div>
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={handleToggle}>
          {isOpen ? <IoMdCloseCircle /> : <RxHamburgerMenu />}
        </div>
        {/* Mobile Sidebar */}
        <div className={`sidebar ${isOpen ? 'open-sidebar' : ''}`}>
          <HashLink smooth to='/#hero' onClick={handleToggle} className={location.pathname === '/' && (window.location.hash === '#hero' || window.location.hash === '') ? 'sidebar-active' : ''}>Home</HashLink>
          <HashLink smooth to='/#about' onClick={handleToggle} className={location.pathname === '/' && window.location.hash === '#about' ? 'sidebar-active' : ''}>About</HashLink>
          <HashLink smooth to='/#mywork' onClick={handleToggle} className={location.pathname === '/' && window.location.hash === '#mywork' ? 'sidebar-active' : ''}>My Work</HashLink>
          <HashLink smooth to='/ui-ux-branding' onClick={handleToggle} className={location.pathname === '/ui-ux-branding' ? 'sidebar-active' : ''}>UI/UX & Branding</HashLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
