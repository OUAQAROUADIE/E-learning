import React from 'react'

function Next(props) {
    const progress = props.progress;

  return (
    <div className='card'>
         <img src={props.img} className="card--image" />
  
  <h4>{props.title}</h4>
  
  <progress id="progress" value={progress} max="100" />
  <p>{progress}%</p>
    </div>
  )
}

export default Next