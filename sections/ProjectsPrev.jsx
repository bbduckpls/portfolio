import React from "react"
import ProjectCards from "../components/ProjectCards"

export default function CaseStudy() {
  return (
    <section className="projects">
      <h3>Projects</h3>
      <div className="card-holder">
        <ProjectCards />
        <a 
          href="https://www.notion.so/angelikadeocampo/Hi-I-m-Angel-8a300bd98f194d2bb9dbd1ecce6c39b5" 
          target="_blank"
          className="link-btn" 
          rel="noopener noreferrer"
        >View All Projects</a>
      </div>
    </section>
  )
}