import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/login'
import Home from './Components/Home'
import Register from './Components/Register'
import "./App.css"
import User_reg from './Components/User_reg'
import Journo_reg from './Components/journo_reg'
import Active_tracks from '../src/Components/Active_tracks'
import Write from './Components/Write'
import SinglePost from './Components/SinglePost'

function App() {

  return (
    <>
      <Routes>
        <Route path="/active_trackers" element={<Active_tracks></Active_tracks>}></Route>
        <Route path="/singlePost" element={<SinglePost></SinglePost>}></Route>
        <Route path="/Write" element={<Write></Write>}></Route>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/register/user' element={<User_reg></User_reg>}></Route>
        <Route path='/register/journo' element={<Journo_reg></Journo_reg>}></Route>
        <Route path='/:id' element={<Home></Home>}></Route>
      </Routes>
    </>
  )
}

export default App
