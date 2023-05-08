import axios from 'axios'
import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import "./css/login.css"
import { useLocation } from 'react-router-dom'
const Login = () => {

    const [username,setusername]=useState('')
    const [password,setpassword]=useState('')
    const history=useNavigate();

    async function submit(e){
      e.preventDefault();
      localStorage.setItem("user",JSON.stringify(username,password))
      try {
          await axios.post("http://localhost:7000/login",{
              username,password
          })
            .then(res=>{
              // eslint-disable-next-line
               if(res.data=="exist"){
                 history("/",)
               }
               // eslint-disable-next-line
               else if(res.data=="notexist"){
                 alert("user is not registered")
               }
            })
            .catch(e=>{
               alert("wrong details")
               
            })

      } catch (error) {
          console.log(error)
      }
  }
  return (
    <div className='login'>
      <div className="login-form">
        <h1>login</h1>
        <form action="POST">
          <label>UserName:</label>
            <input type="username" name='username' placeholder='username' autoComplete='off' onChange={(e)=>{setusername(e.target.value)}} />
            <label>Password:</label>
            <input type="password" placeholder='password' autoComplete='off' onChange={(e)=>{setpassword(e.target.value)}} />
            
            <button 
             className='submit' type='submit' onClick={submit}>Login</button>
             
             
        </form>
        <br/>
        <div className='link'>
        <a href="/signup">Don't Yet Have account? signup</a>
        </div>
        </div>
        <div className="company">
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

export default Login