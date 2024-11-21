import { useState } from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Login = lazy(() => import('./Components/login'))
const Home = lazy(() => import('./Components/Home'))
const Register = lazy(() => import('./Components/Register'))
const User_reg = lazy(() => import('./Components/User_reg'))
import Journo_reg from './Components/journo_reg'
const Active_tracks = lazy(() => import('../src/Components/Active_tracks'))
const Write = lazy(() => import('./Components/Write'))
const SinglePost = lazy(() => import('./Components/SinglePost'))
import "./App.css"

function App() {

  return (
    <>
      <Routes>
        <Route path="/active_trackers" element={
          <Suspense fallback='Loading...'>
            <Active_tracks></Active_tracks>
          </Suspense>}>
        </Route>
        <Route path="/singlePost" element={
          <Suspense fallback='Loading...'>
            <SinglePost></SinglePost>
          </Suspense>}>
        </Route>
        <Route path="/Write" element={
          <Suspense fallback='Loading...'>
            <Write></Write>
          </Suspense>}></Route>
        <Route path='/' element={
          <Suspense fallback='Loading...'>
            <Login></Login>
          </Suspense>}></Route>
        <Route path='/register' element={
          <Suspense fallback='Loading...'>
            <Register></Register>
          </Suspense>}></Route>
        <Route path='/register/user' element={
          <Suspense fallback='Loading...'>
            <User_reg></User_reg>
          </Suspense>}></Route>
        <Route path='/:id' element={
          <Suspense fallback='Loading...'>
            <Home></Home>
          </Suspense>}></Route>
      </Routes >
    </>
  )
}

export default App
