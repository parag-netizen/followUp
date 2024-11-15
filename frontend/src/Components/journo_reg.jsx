import React from 'react'
import './journo_reg.css'
import { Link } from 'react-router-dom'

const Journo_reg = () => {
    return (
        < div className='reg' >
            <h1>Register as a Journalist</h1>
            <form className='journo_reg'>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='email' />
                <input type="number" placeholder='Journalist ID no' />
                <input type="tel" placeholder='Phone.' />
                <input type="password" placeholder='password' />
                <input type="password" placeholder='Confirm password' />
                <button>Submit</button>
                <span>Don't you have an account? <Link to="/">Login</Link> </span>
            </form>
        </div>
    )
}

export default Journo_reg;