import React from 'react'

function Courses(props) {
  return (
    <div className='courses-card'>
          <img src={props.img} className="cour-icon"></img>
                    <div className='cour-info'>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
    </div>
  )
}

export default Courses