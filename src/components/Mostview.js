import React from 'react'

function Mostview(props) {
  return (
    <div className="most-viewd-card">
    <img src={props.img} className="card--image" />
    <div className="duree">
    <img src="./images/duree1.png" className="duree-icone" />
    <span>{props.duree}Month</span>
    </div>
    <h4>{props.title}</h4>
    <p>{props.description}</p>
    <div className="carde_prix">
    <div className="username_div">
        <img src="./images/profile.png" className="profile"></img>
        <h4>Username</h4>
    </div>
    <div className="username_div">
        <p><del>{props.prixOriginal}$</del></p>
        
        <p>{props.solde}$</p>
        
    </div>
    </div>

</div>
  )
}

export default Mostview