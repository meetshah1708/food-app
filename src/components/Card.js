import React from 'react'
import firstimg from "../images/chola.jpg"

const Card = (props) => {
    return (
        <div>
            <div className="card mt-3  shadow"  style={{ "width": "18rem", "maxHeight": "auto" }}>
                <img src={firstimg} alt=".." className=' img-fluid '></img>
                <div className="card-body">
                    <h5 className='card-title '>{props.title}</h5>
                    <div className="container w-100 col-3 d-flex">
                        <select name="" id="" className="m-2 h-100   bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select name="" id="" className="m-2   bg-success rounded">
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className="d-inline fs-5 ">Total Price</div>
                        
                    </div> 
                </div>

            </div>

        </div>
    )
}

export default Card
