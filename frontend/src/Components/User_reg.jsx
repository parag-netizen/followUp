import React from 'react'
import './User_reg.css'

const User_reg = () => {
    return (
        < div className='reg' >
            <h1>Register as a Viewer</h1>
            <form className='viewer_reg'>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default User_reg;