import React from "react"
import { projects } from "../data"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react";

export default function ProjectDetail() {
    const [currentProj, setCurrentProj] = React.useState(null)
    const { id } = useParams

    console.log(projects[id])

    return (
        <section className="page">
            
        </section>
    )
}