import React from "react"
import { Link } from "react-router-dom"

export default function MiniAbout() {
    return (
        <section className="mini-about">
            <h3>About Me</h3>
            <img 
                src="/assets/Avatar.png"
                alt="illustrated icon avatar of angel deocampo"
                className="icon-img"
            />
            <p>Jack of all trades, master of most! 🤹‍♀️</p>
            
            <p>Graduated from UCI with a B.S in Biology and Minor in Psychology, while leading KKAP UCI Dance Team. Transitioned into the tech world with a <span className="highlight">UX/UI certification</span> from UCI Continuing Education and <span className="highlight">Frontend Development certification</span> from Scrimba.
            </p>
            
            <p>Currently working as the <span className="highlight">Lead UX/UI Designer</span> of an upcoming mobile app and <span className="highlight">Dance Instructor</span> at Origin Hip Hop Academy. I'm also a founder of ARKADE Dance Team and video editor by commission.
            </p>
            
            <Link to="/about" className="link-btn">Learn More</Link>
        </section>
    )
}