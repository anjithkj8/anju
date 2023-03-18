import { TextField } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <TextField label='first name' /><br></br>
      <TextField label='last name' />
      <TextField label='email' />
      <TextField label='password' type='password' />
    
    </div>
  )
}

export default Signup
