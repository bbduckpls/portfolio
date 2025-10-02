import React from "react"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <section className="page">
      <h3>About Me</h3>
      <img 
          src="/assets/Avatar.png"
          alt="illustrated icon avatar of angel deocampo"
          className="icon-img"
      />
      <p>Jack of all trades, master of most! 🤹‍♀️</p>
      
      <div className="card-holder container">
        <div className="rec container border">
          <h4>Experience</h4>
          <ul>
            <li><span className="bold">Jenni</span> - Lead UX/UI Design <span className="current">(current)</span>
            </li>
            <li><span className="bold">Origin HHA</span> - Dance Instructor <span className="current">(current)</span>
            </li>
            <li><span className="bold">Arkade Dance Team</span> - Founder <span className="current">(current)</span>
            </li>              
            <li><span className="bold">Kia America</span> - Customer Care Representative</li>
            <li><span className="bold">KKAP UCI Dance Team</span> - Coordinator</li>
            <li><span className="bold">That Day in August</span> - Web Designer</li>
          </ul>
        </div>
        
        <div className="rec container border">
          <h4>Education</h4>
          <ul>
            <li><span className="bold">UCI Continuing Education</span> - UX/UI</li>
            <li><span className="bold">Scrimba</span> - Frontend Developer Pathway</li>
            <li><span className="bold">UCI</span> - B.S. Biology, Minor Psychology</li>
          </ul>
        </div>
        
        <div className="rec container border">
          <h4>Interests</h4>
          <ul>
            <li>Video Games 🎮</li>
            <li>Board Games 🎲</li>
            <li>Video Editing 🎥</li>
            <li>Dancing 💃</li>
            <li>Puzzles 🧩</li>
          </ul>
        </div>
      </div>
      
      <h4>Links</h4>
      <div className="link-btn-div">
        <Link to="/contact" className="link-btn">Contact</Link>
        <a 
          href="https://angelikadeocampo.notion.site/About-bf590bab74af4856baa11a1e3be17930?pvs=143" 
          className="link-btn" 
          target="_blank" 
          rel="noopener noreferrer"
        >Notion Page</a>
        <a
          href="https://www.youtube.com/@arkadedance"
          className="link-btn"
          target="_blank" 
          rel="noopener noreferrer"
        >Arkade Dance Team YouTube</a>
      </div>
            
    </section>
  )
}