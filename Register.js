import React, { useState } from 'react'
import './reg.css'
import { Link } from 'react-router-dom'


const Register = () => {
  const [savedata, setsavedata] = useState({
    Name:"",
    Email:"",
    Number:"",
    Password:"",
  })
  const Onchnagehandleryyy=(e)=>{
    const {value,name}=e.target
    setsavedata({...savedata, [name]:value})
  }
  const Submithandleryyy=(e)=>{ // for input data delet
     e.preventDefault()
     setsavedata({
    Name:"",
    Email:"",
    Number:"",
    Password:"",
  })
  }
    return (
        <form onSubmit={Submithandleryyy}>
      <div className='register'>
        <div className='heading'>
          <h1 style={{marginTop:"10px"}}>Apply Form</h1>
        </div>

        <div className='first'>
          <p>Enter Your Name</p>
          <input type='text'  placeholder='Enter Your Name' name='Name' value={savedata.Name} onChange={Onchnagehandleryyy}/>
        </div>

        <div className='first'>
          <p>Enter Your Email</p>
          <input type='text'  placeholder='Enter Your Email' name='Email' value={savedata.Email} onChange={Onchnagehandleryyy}/>
        </div>

        <div className='first'>
          <p>Enter Your Number</p>
          <input type='number' placeholder='Enter Your Number' name='Number' value={savedata.Number} onChange={Onchnagehandleryyy}/>
        </div>

        <div className='first'>
          <p>Enter Your Password</p>
          <input type='password'  placeholder='Enter Your Password'name='Password' value={savedata.Password} onChange={Onchnagehandleryyy}/>
        </div>

        {/* <div className='radio'>
          <div><input type='radio' name='Gemder' value="Male" />Male</div>
          <div><input type='radio' name='Gemder' value="Female" />Female</div>
          <div><input type='radio' name='Gemder' value="Other" />Other</div>
        </div> */}

        <div className='registerbtn'>
          <button><Link to={'/login'} style={{textDecoration:"none"}}>Register</Link></button>
        </div>
      </div>
    </form>
   
    )
}

export default Register
