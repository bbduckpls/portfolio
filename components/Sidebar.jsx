import React from "react"
import { NavLink } from "react-router-dom"
import { LuX } from "react-icons/lu";

export default function Sidebar({ isOpen, toggleSidebar }) {
    return (
        <div className={`sidebar ${isOpen ? 'active' : ''}`}>
            <div className="side-header divider">
                <LuX onClick={toggleSidebar} className="nav-icon x"/>
            </div>
            <nav>
                <NavLink 
                    to="/" 
                    end
                    className={({ isActive }) => (
                        `side-link ${isActive ? "active-link" : ""}`
                    )}
                    onClick={toggleSidebar}
                >Home</NavLink>
                <NavLink 
                    to="/projects"
                    className={({ isActive }) => (
                        `side-link ${isActive ? "active-link" : ""}`
                    )}
                    onClick={toggleSidebar}
                >Projects</NavLink>
                <NavLink 
                    to="/about"
                    className={({ isActive }) => (
                        `side-link ${isActive ? "active-link" : ""}`
                    )}
                    onClick={toggleSidebar}
                >About</NavLink>
                <NavLink 
                    to="/contact"
                    className={({ isActive }) => (
                        `side-link ${isActive ? "active-link" : ""}`
                    )}
                    onClick={toggleSidebar}
                >Contact</NavLink>
            </nav>
        </div>
    )
}