import React, { useRef, useState } from 'react';



function LoginForm() {

    const emailRef=useRef()
    const passwordRef=useRef()
    const genderRef=useRef()
    const [error,setError]=useState('')
    const [passworderror,setpasswordError]=useState('')
    const emailRegx=/code/
    const passwordRegx=/[0-9]/
    function handleform(e){
        e.preventDefault()
        const email=emailRef.current.value
        const password=passwordRef.current.value

        if(!emailRegx.test(email)){
            setError('invalid email')
        }
        else{
            setError('')
            if(!passwordRegx.test(password)){
            setpasswordError('invalid password')
        }
        else{
            setpasswordError('')
            console.log(genderRef.current.value)
        }
        }
        

    }


    return (
        <div>

<form onSubmit={handleform}>
  <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">
      Email:
    </label>
    <input
      type="text"
      className="form-control"
      id="email"
      placeholder="Enter email"
      name="email"
      ref={emailRef}
    />
  </div>
  {error && <span style={{color:'red'}}>invalid credentials</span>}
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Password:
    </label>
    <input
      type="password"
      className="form-control"
      id="pwd"
      placeholder="Enter password"
      name="pswd"
      ref={passwordRef}
    />
  </div>
  <div>
    <select ref={genderRef}>
        <option option='male'>Male</option>
        <option option='female'>female</option>
        
    </select>
  </div>
  {passworderror && <span style={{color:'red'}}>invalid credentials</span>}
  
  {!error && !passworderror && (<button type="submit" className="btn btn-primary">
    Submit
  </button>)}
</form>
</div>
       
    );
}

export default LoginForm;
