import React from 'react'
import "../style.css"
const Navbar = ({ filteritem, menulist }) => {
    return (
        <div className='navbar'>
            <div className="btn-group ">
                {menulist?.map((curElem) => {//added ? to verify  if the array is empty and remove error of undefined map
                    return (
                        <>
                            <button
                                className="btn-group__item"
                                onClick={() => filteritem("breakfast")}
                            >
                                Breakfast
                            </button>
                          
                        </>
                    );
                })}
            </div>
        </div>
    )
}

export default Navbar