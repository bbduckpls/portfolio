import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  
  function toggleSidebar() {
    setIsSidebarOpen(prevState => !prevState)
  }
  
  return (
    <header className="container divider">
      <div className="header-left">
        <img 
            src="/assets/Avatar.png"
            alt="illustrated icon avatar of angel deocampo"
            className="icon-img"
        />
        <h1><NavLink to="/">Angelika Deocampo</NavLink></h1>
      </div>
        <nav>
          <NavLink 
            to="/"
            className={({ isActive }) => (`nav-link ${isActive ? 'active-link' : ''}`)}
          >Home</NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) => (`nav-link ${isActive ? 'active-link' : ''}`)}
          >Projects</NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => (`nav-link ${isActive ? 'active-link' : ''}`)}
          >About</NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => (`nav-link ${isActive ? 'active-link' : ''}`)}
          >Contact</NavLink>
        </nav>
        <Menu className="nav-icon burger" onClick={toggleSidebar}/>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  )
}