import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Hello from './components/helloworld'
// import Wrapperclass from './components/Wrapperclass'
import Home from './MyComponents/pages/Home'
import Footer from './MyComponents/layout/Footer'
import  Navbar from './MyComponents/layout/Navbar'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Hello from './components/helloworld'
import WeddingPlannerWebsite from './MyComponents/pages/WeddingPlannerwebsite'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './MyComponents/pages/Contactus'
import Venues from './MyComponents/pages/Venues'
import Venue from './MyComponents/pages/Venue'
import Vendor from './MyComponents/pages/Vendor'
import Login from './MyComponents/pages/Login'
import Signup from './MyComponents/pages/Signup'
function App() {
  

  return (
    <>
    {/* <Hello/> */}
    {/* Wrapper Class */}
 

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<ContactUs/>}></Route>
      <Route path="/Venues" element={<Venues/>}></Route>
      <Route path="/Venue" element={<Venue/>}></Route>
      <Route path="/Vendor" element={<Vendor/>}></Route>  
      <Route path="/Login" element={<Login/>}></Route>  
      <Route path="/Signup" element={<Signup/>}></Route>  
    </Routes>
    <Footer/>
    </>
  )
}

export default App
