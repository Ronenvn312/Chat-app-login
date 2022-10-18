import React from 'react'
import './login.css'
export default function login() {
  return (
    <div>
        <form action='/login' method='POST' encType='mulmultipart/form-data'>  
            <div className='form-group'> 
                <label for="inp_email">Email:</label>
                <input placeholder='Nhap email' type="text" name="inp_email" />
            </div>
        </form>
    </div>
  )
}
