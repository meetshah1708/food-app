import React, { useState } from 'react'
//Connection in postman and then reflect it in Content-type in fetch
import { Link } from 'react-router-dom'
function SignUp() {
    const [ credentials, setCredentails ] = useState({ name: "", email: "", password :"",location:""});
    
    const handleSubmit= async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/signup", {
            method: "POST",
            header: {
                'Content-type':'application.json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,location:credentials.location,password:credentials.password})
        })

        const json = await response.json()
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials")
        }
        
    }
    const onChange = (event) => {
        setCredentails({...credentials,[event.target.name]:event.target.value})
    }
    return (
        <>
            <form className="row g-3 needs-validation"  onSubmit={handleSubmit}>
                <div className="col-md-6 ">
                    <label htmlFor="validationCustom01" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="validationCustom01" name="name" value={credentials.name} onChange={onChange} required />
                    <div className="valid-feedback">
                        Looks good!
                    </div>
                </div>
              
                {/* <div className="col-md-4"> */}
                    {/* <label htmlFor="validationCustomUsername" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div> */}
                {/* </div> */}
                <div className="col-md-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="staticEmail2" placeholder="email@example.com" value={credentials.email} name="email" onChange={onChange} />
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">Password</label>
                    <input type="password" className="form-control" id="validationCustom03"  value={credentials.password} name='password' onChange={onChange}  required />
                    <div className="invalid-feedback">
                        Please provide a valid password.
                    </div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationCustom03"  value={credentials.location} name='location'  onChange={onChange}  required />
                    <div className="invalid-feedback">
                        Please provide a valid city.
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
                    <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Submit form</button>
                  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
                </div>
            </form>

        </>
    )
}

export default SignUp
