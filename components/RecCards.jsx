import React from "react"
import { LuCircleUserRound } from "react-icons/lu";
import { recs } from "../data"

export default function RecCards() {
  
  return recs.map((rec, index) => {
      const { name, title, quote } = rec
      
      return (
        <div className="rec border container" key={index}>
            <div className="rec-top">
                <LuCircleUserRound className="user-icon"/>
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