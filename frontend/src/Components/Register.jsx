import React, { useState } from 'react'
import './reg.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate();
    return (
        <>
            < div className='reg' >
                <h1>Register as a Viewer or a Journalist</h1>
                <div className='buttons'>
                    <button onClick={() => navigate("/register/user")}>User</button>
                    <button onClick={() => navigate("/register/journo")}>Journalist</button></div>
            </div >
        </>
    )
}

export default Register;