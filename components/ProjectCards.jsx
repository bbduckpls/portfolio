import React from "react"
import { projects } from "../data"
import { Wrench } from "lucide-react";

export default function ProjectCards({ isPage }) {
    
    return projects.map(proj => {
        const { id, tags, tools, image, title, focus, link, desc } = proj
        
        const tagArr = tags.map(tag => {
            return <p key={id}>{tag}</p>
        })
        
        const toolList = tools.join(", ")
        
        return (
            <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
                <div className="project container border">
                    <div className="project-top">
                        <img src={image} className="project-img"/>
                        <h4>{title}</h4>
                    </div>
                    <div className="details">
                        {isPage && <p>{desc}</p>}
                        {isPage && 
                            <div className="tool-div">
                                <Wrench className="nav-icon"/>
                                <p className="tool">{toolList}</p>
                            </div>
                        }
                    </div>
                    <div className="tags">
                        <p className="main-tag">{focus}</p>
                        {tagArr}
                    </div>
                </div>
            </a>
        )
  })
}