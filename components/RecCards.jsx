import React from "react"
import { CircleUserRound } from "lucide-react";
import { recs } from "../data"

export default function RecCards() {
  
  return recs.map((rec, index) => {
      const { name, title, quote } = rec
      
      return (
        <div className="rec border container" key={index}>
            <div className="rec-top">
                <CircleUserRound className="user-icon"/>
                <div className="rec-title">
                    <h4>{name}</h4>
                    <p>{title}</p>
                </div>
            </div>
            <p>{quote}</p>
        </div>
      ) 
  })

}