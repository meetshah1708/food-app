import React from 'react'
import Navbar from "../components/Navbar"
import logimg from "../images/chola.jpg"
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <Navbar />
      <form className="row g-3 needs-validation"  >

        <div className="col-md-6">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
          <input type="email" className="form-control" id="staticEmail2" placeholder="email@example.com" name="email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="validationCustom03" className="form-label">Password</label>
          <input type="password" className="form-control" id="validationCustom03" name='password' required />
          <div className="invalid-feedback">
            Please provide a valid password.
          </div>
        </div>


        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Submit form</button>
          <NavLink to="/signup" className="m-3 btn btn-danger">Im  a new user</NavLink>
        </div>
      </form>


      <img className='d-flex w-50 h-25 mx-5 img-fluid  col-6' src={logimg} alt='hi'></img>

    </div>
  )
}

export default Login
