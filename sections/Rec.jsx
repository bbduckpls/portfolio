import React from "react"
import RecCards from "../components/RecCards"

export default function Rec() {
    
    return (
        <section>
            <h3>Recommendations</h3>
            <section className="recs">
                <RecCards />
            </section>
        </section>
    )
}