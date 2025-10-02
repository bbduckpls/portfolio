import React from "react"

export default function Contact() {
  return (
    <section className="page">
      <h3>Contact</h3>
      <p>Don't be a stranger 🤝 Ask me about anything!
      </p>
      
      
      <div className="recs container">
        <div className="rec container border">
          <h4>Personal</h4>
          <ul>
            <li><span className="bold">Linkedin</span> - <a 
                href="https://www.linkedin.com/in/angelika-deocampo/" 
                target="_blank"
                className="inline-link" 
                rel="noopener noreferrer"
              >linkedin.com/in/angel-deocampo</a>
            </li>
            <li><span className="bold">Email</span> - <a 
                href="mailto:angelikajdeo@gmail.com" 
                target="_blank"
                className="inline-link" 
                rel="noopener noreferrer"
              >angelikajdeo@gmail.com</a>
            </li>              
          </ul>
        </div>
        
        <div className="rec container border">
          <h4>Dance/Video Editing</h4>
          <ul>
            <li><span className="bold">Edited Videos</span> - <a 
                href="https://angelikadeocampo.notion.site/Edits-f3c7e3acf7674784a95a3f6625199f1d?pvs=143" 
                target="_blank"
                className="inline-link" 
                rel="noopener noreferrer"
              >Notion link</a>
            </li>
            <li><span className="bold">Arkade Website</span> - <a 
                href="https://arkade.dance/" 
                target="_blank"
                className="inline-link" 
                rel="noopener noreferrer"
              >arkade.dance</a>
            </li>
            <li><span className="bold">Arkade Email</span> - <a 
                href="mailto:arkadedance@gmail.com" 
                target="_blank"
                className="inline-link" 
                rel="noopener noreferrer"
              >arkadedance@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}