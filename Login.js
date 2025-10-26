import React, { useState } from 'react'
import './log.css'

const Login = () => {
  const [storedata, setstoredata] = useState({
    Name:"",
    Email:"",
    Password:"",
  })
  const Onchnagehandlery=(e)=>{
     const {value,name}=e.target;
     setstoredata({...storedata [name],value})
  }
  const Submithandlery=(e)=>{
    e.preventDefault()
    alert("Congratulation Your Data is upload")
    setstoredata({
    Name:"",
    Email:"",
    Password:"",
  })
  }
  return (
    <form onSubmit={Submithandlery}>
      <div className='login'>
        <div className='head'>
          <h1 style={{marginTop:"10px"}}>Apply Form</h1>
        </div>

        <div className='third'>
          <p>Enter User Name</p>
          <input type='text' placeholder='Enter User Name' name='Name' value={storedata.Name} onChange={Onchnagehandlery}></input>
        </div>
        <div className='third'>
          <p>Enter Your Email</p>
          <input type='email' placeholder='Enter Your Email' name='Email' value={storedata.Email} onChange={Onchnagehandlery}></input>
        </div>
        <div className='third'>
          <p>Enter Your Password</p>
          <input type='password' placeholder='Enter Your Password' name='Password' value={storedata.Password} onChange={Onchnagehandlery}></input>
        </div>
        <div className='loginbtnn'>
          <button>Login</button>
        </div>

      </div>
    </form>
  )
}

export default Login