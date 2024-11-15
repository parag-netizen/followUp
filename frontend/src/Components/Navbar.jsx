import React from 'react'
import logo from '../assets/logo.jpg'
import '../Components/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='Logo'>
                    <img src={logo} alt="Media_logo" height={160} width={160} />
                </div>
                <h1>Cold News</h1>
            </div>

            <div className='Links'>
                <Link className='link' to="/active_trackers">Actively Tracking</Link>
                <Link className='link_write' to="/Write">New Post</Link>
                <span>John doe</span>
                <span>Logout</span>
            </div>
        </div>
    )
}

export default Navbar