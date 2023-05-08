import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [username,setusername]=useState('')
    const history=useNavigate

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:7000/signup",{
                email,password,username
            })
            .then(res=>{
                // eslint-disable-next-line
                 if(res.data=="exist"){
                  alert("user  exist")
                 }
                 // eslint-disable-next-line
                 else if(res.data=="notexist"){
                    history("/home",{state:{id:username}})
                 }
              })
              .catch(e=>{
                 alert("user is Registered Go to login page")
                 
              })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='login'>
        <div className="login-form">
        <h1>Signup</h1>
        <form action="POST">
            <label>Email:</label>
            <input type="email" placeholder='email'  onChange={(e)=>{setemail(e.target.value)}} />
            <label>UserName:</label>
            <input type="Text" placeholder='UserName'  onChange={(e)=>{setusername(e.target.value)}} />
            <label>Password:</label>
            <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} />
            <button className='submit' type='submit' onClick={submit}>Signup</button>
        </form>
        <br/>
        <div className="link">
        <a href="/login">I have a account / Login</a>
        </div>
        </div>
        <div className='company'>
            <div className='company-privacy'>
          <div className="logo">NICKE</div>
          <ul>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
          </ul>
          <div className='company-link'>
          <a href='/'>About Us</a>
          <a href='/'>Contact Us</a>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Signup