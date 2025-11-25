
import React, { useState } from 'react'
import './reg.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const [savedata, setsavedata] = useState({
    Name: "",
    Email: "",
    Number: "",
    Password: "",
  })

  const Onchnagehandleryyy = (e) => {
    const { value, name } = e.target
    setsavedata({ ...savedata, [name]: value })
  }

  const Submithandleryyy = (e) => {
    e.preventDefault()

    if (!savedata.Name || !savedata.Email || !savedata.Number || !savedata.Password) {
      alert("Please fill all input fields before Registering!")
      return
    }

    alert("Registered Successfully!")


    setsavedata({
      Name: "",
      Email: "",
      Number: "",
      Password: "",
    })
    navigate('/login')
  }

  const isDisabled =
    !savedata.Name || !savedata.Email || !savedata.Number || !savedata.Password

  return (
    <form onSubmit={Submithandleryyy}>
      <div className='register'>
        <div className='heading'>
          <h1 style={{ marginTop: "10px" }}>Apply Form</h1>
        </div>

        <div className='first'>
          <p>Enter Your Name</p>
          <input type='text' placeholder='Enter Your Name' name='Name' value={savedata.Name} onChange={Onchnagehandleryyy} />
        </div>

        <div className='first'>
          <p>Enter Your Email</p>
          <input type='text' placeholder='Enter Your Email' name='Email' value={savedata.Email} onChange={Onchnagehandleryyy} />
        </div>

        <div className='first'>
          <p>Enter Your Number</p>
          <input type='number' placeholder='Enter Your Number' name='Number' value={savedata.Number} onChange={Onchnagehandleryyy} />
        </div>

        <div className='first'>
          <p>Enter Your Password</p>
          <input type='password' placeholder='Enter Your Password' name='Password' value={savedata.Password} onChange={Onchnagehandleryyy} />
        </div>

        <div className='registerbtn'>
          <button disabled={isDisabled} style={{ opacity: isDisabled ? 0.5 : 1 }}>
            Register
          </button>
        </div>
      </div>
    </form>
  )
}

export default Register
