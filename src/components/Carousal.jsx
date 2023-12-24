import React from 'react'
import firstimg from "../images/chola.jpg"
import secimg from '../images/maggi.jpg'
import thirdimg from "../images/samosa.jpg"


const Carousal = () => {
  return (
    <div>
     
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner" style={{maxHeight:"1200px",objectFit:"cover",opacity:0.7}}>
    <div className="carousel-item active" >
      <img src={firstimg} className="d-block h-25  w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={secimg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={thirdimg} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </div>
  )
}

export default Carousal
