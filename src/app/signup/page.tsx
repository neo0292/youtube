"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
//import { axios } from 'axios'

function Signup() {
  const router = useRouter();

  //What data I want to collect from user
  const [user,setUser] = React.useState({
    email : "",
    password : "",
    username : ""
  })

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSignup =async () => {
    
  }

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0  && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
        setButtonDisabled(true); 
    }
  },[user]);

  return (
    <div className='flex flex-col items-center 
    justify-center min-h-screen py-2'>
      <h1>Signup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input className='p-2 rounded-md text-black'
          id='username'
          type='text'
          value={user.username}
          onChange={(e)=> setUser({...user,username:e.target.value})}
          placeholder='username' />
<label htmlFor="password">password</label>
<input className='p-2 rounded-md text-black'
          id='password'
          type='text'
          value={user.password}
          onChange={(e)=> setUser({...user,password:e.target.value})}
          placeholder='password' />
<label htmlFor="Email">email</label>
<input className='p-2 rounded-md text-black'
          id='email'
          type='text'
          value={user.email}
          onChange={(e)=> setUser({...user,email:e.target.value})}
          placeholder='email' />

          <button className='p-2 border border-gray-300 bg-black-400 m-5 rounded-md'
          onClick={onSignup}>{buttonDisabled ? "No Signup" : "Signup"}</button>

          <Link href="/login">Visit Login page</Link>

          
    </div>
  )
}

export default Signup