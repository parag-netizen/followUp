import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./Login.css"
import { Link } from 'react-router-dom'


const Login = () => {
    return (<>
        <div className='auth'>
            <h1>Login</h1>
            <form>
                <input type="text" placeholder='username' />
                <input type="text" placeholder='email' />
                <input type="password" placeholder='password' />
                <button>Login</button>
                <span>Don't you have an account? <Link to="/register">Register</Link> </span>
            </form>
        </div>
    </>
    )
}

export default Login