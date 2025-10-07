import React from "react"

export default function Footer() {
  return (
      <footer className="container">
          <div className="footer-links">
            <a 
              href="https://www.linkedin.com/in/angelika-deocampo/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >LinkedIn</a>
            
            <a 
              href="https://docs.google.com/document/d/1ADpRPM6CJ2Iz37CB3EUJELVtVDvLRIZrY4JTB_M4cJA/edit?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >Resume</a>

            <a 
              href="https://www.notion.so/angelikadeocampo/Hi-I-m-Angelika-8a300bd98f194d2bb9dbd1ecce6c39b5"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >Notion</a>

            <a 
              href="https://github.com/bbduckpls"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >Github</a>
            <a 
              href="mailto:angelikajdeo@gmail.com"
              rel="noopener noreferrer"
              className="nav-link"
            >Email</a>
          </div>
          <p>&#169; 2025 Angelika Deocampo</p>
      </footer>
    )
}