import React from 'react'
import '../Components/active_tracks.css'
import Navbar from './Navbar'

const Active_tracks = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='content'>
                <h1>Actively Tracked</h1>
            </div>
        </>
    )
}

export default Active_tracks;