import React from "react"
import { Link } from "react-router-dom"
export default function Favcourses(props){
    
    return(
       <div className="Fav_courses">
              <a href={'/'}></a>
                   <a  href={props.path} className="item">
        <img src={props.img} className="cardfav--image" />

        <h4>{props.title}</h4>
        
        <p className="description-fav">{props.description}</p>
        </a>
      </div>
        
    )
}