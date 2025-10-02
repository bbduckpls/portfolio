import React from "react"
import Intro from "../sections/Intro"
import ProjectsPrev from "../sections/ProjectsPrev"
import Rec from "../sections/Rec"
import MiniAbout from "../sections/MiniAbout"

export default function Home() {
  return (
    <>
      <section className="title">
        <h2>Hi, I'm Angel!</h2>
        <p>Frontend Developer | UX/UI Designer</p>
      </section>
      
      <Intro />
      
      <ProjectsPrev />
      
      <Rec />
      
      <MiniAbout />
    </>
  )
}