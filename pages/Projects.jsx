import React from "react"
import ProjectCards from "../components/ProjectCards"

export default function Projects() {
  const isPage = true
  
  return (
    <section className="page">
      <h3>Projects</h3>
      <div className="card-holder">
        <ProjectCards isPage={isPage}/>
      </div>
    </section>
  )
}