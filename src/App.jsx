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
// import Hello from './components/helloworld'
// import WeddingPlannerWebsite from './MyComponents/pages/WeddingPlannerwebsite'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './MyComponents/pages/Contactus'
import Venues from './MyComponents/pages/Venues'
import Venue from './MyComponents/pages/Venue'
import Vendors from './MyComponents/pages/Vendors'
import Vendor from './MyComponents/pages/Vendor'
import Login from './MyComponents/pages/Login'
import Signup from './MyComponents/pages/Signup'
import Dancers from './MyComponents/pages/Dancers'
import DJ from './MyComponents/pages/DJ'
import Gift from './MyComponents/pages/Gift'
import Jewellery from './MyComponents/pages/Jewellery'
import Makeup from './MyComponents/pages/Makeup'
import Mehendi from './MyComponents/pages/Mehendi'
import Review from './MyComponents/pages/Review'
import ProfileSettings from './MyComponents/pages/ProfileSettings'
import Payments from './MyComponents/pages/Payments'
import Photography from './MyComponents/pages/Photography'
import Prewedding from './MyComponents/pages/Prewedding'
// import Pandits from './MyComponents/pages/Pandits'
import Pandits1 from './MyComponents/pages/Pandits1'
import AboutUsmain from './MyComponents/pages/AboutUsmain'
// import Table from './MyComponents/pages/Table'
import BookingRequest from './MyComponents/pages/BookingRequest'
import Chat from './MyComponents/pages/chat'
function App() {
  

  return (
    <>
    {/* <Hello/> */}
    <Chat/>
    {/* <BookingRequest/> */}
    {/* Wrapper Class */}

   {/* <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Contact" element={<ContactUs/>}></Route>
      <Route path="/Venues" element={<Venues/>}></Route>
      <Route path="/Venue" element={<Venue/>}></Route>
      <Route path="/Vendors" element={<Vendors/>}></Route>  
      <Route path="/Vendor" element={<Vendor/>}></Route>  
      <Route path="/Login" element={<Login/>}></Route>  
      <Route path="/Signup" element={<Signup/>}></Route>  
      <Route path="/Dancer" element={<Dancers/>}></Route>  
      <Route path="/DJ" element={<DJ/>}></Route>  
      <Route path="/Gift" element={<Gift/>}></Route>  
      <Route path="/Jewellery" element={<Jewellery/>}></Route>  
      <Route path="/Makeup" element={<Makeup/>}></Route>  
      <Route path="/Mehendi" element={<Mehendi/>}></Route>  
      <Route path="/Review" element={<Review/>}></Route>  
      <Route path="/ProfileSettings" element={<ProfileSettings/>}></Route>  
      <Route path="/Payments" element={<Payments/>}></Route>  
      <Route path="/Photography" element={<Photography/>}></Route>  
      <Route path="/Prewedding" element={<Prewedding/>}></Route>  
      <Route path="/Pandits1" element={<Pandits1/>}></Route>  
      <Route path="/AboutUsmain" element={<AboutUsmain/>}></Route>  
    </Routes>  */}
    {/* <Table/> */}
    {/* <Footer/> */}
    </>
  )
}

export default App
