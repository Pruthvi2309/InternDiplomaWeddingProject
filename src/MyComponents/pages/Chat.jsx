import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function Chat() {
  return (
    <Wrapper>
       <style>
        
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=REM&display=swap');
      
      </style>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <div className="container-fluid super">
        <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5 Content-cus">
                <h3>Welcome Dear Customer Nikunj</h3>
                <h5>UserName: Rana Nikunj </h5>
                <h5>Country:India</h5>
                <h5>Phone No: 9875647822</h5>
                <h5>Date of Booking : 15\01\2019</h5>
                <h5>No of Guests : 40</h5>
                <h5>No of Rooms : 10</h5>
                <h5>Type : Pre-Wedding</h5>
                <h5>Timming of Event : 11 Auguest ,2019  08:00:00pm</h5>
                <h6>10:30pm</h6>
              </div>
          </div>
          <div className="row">
            <div className="col-md-5 Content-sys">
              <h5>Your Booking Request is in Pending</h5>
              <h6>10:30pm</h6>
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
              </div>
          </div>
          <div className="row">
            <div className="col-md-5">
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5 Content-cus">
              <h5>ok</h5>
              <h6>10:30pm</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5 Content-sys">
              <h5>Your booking is approved, click on confirm and proceed to payment to confirm...</h5>
              <h6>10:30pm</h6>
              <NavLink to="/Payments"><button className="confbtn">Confirm</button></NavLink>
            </div>
            <div className="col-md-2">
            </div>
            <div className="col-md-5">
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <form className="search">
                   <input className="form-control  searchbar" type="search" placeholder="Enter a Text"/>
                   <button className="send-icon"><i className="material-icons">send</i></button>
              </form>
            </div>
          </div>
      </div>
         {/* <div className="row">
            <div className="col-md-6 content-cus1">
              <h6 className="show">10:30pm</h6>
               <h5>Ok</h5>
            </div>
            <div className="col-md-6 content-sys1">
              <h6 className="time">10:30pm</h6>
               <h5>Your Booking Is Succesufully Done</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
            <form className="search">
                   <input className="form-control  searchbar" type="search" placeholder="Enter a Text"/>
                   <button className="send-icon"><i className="material-icons">send</i></button>
              </form>
            </div>
            </div> */}
    </Wrapper>
  )
}
const Wrapper=styled.div`
.confbtn{
  border-radius:5px;
}
.super{
  padding-top:80px;
  padding-bottom:20px;
}
.Content-sys{
  width:fit-content;
  height:fit-content;
  padding:20px;
  border-width:0px;
  background-color:#edece8;
  border-radius:0px 20px 20px 20px;

}
.Content-cus{
  width:fit-content;
  height:fit-content;
  padding:20px;
  border-width:0px;
  background-color:#edece8;
  border-radius:20px 0px 20px 20px;

}
.material-icons{
  color:#f9f9f9;
  padding-top:7px;
  padding-left:8px;
  padding-right:4px;
}

.searchbar{
  margin-top:20px;
  margin-left:400px;
  margin-bottom:20px;
  border-radius:40px;
  width:500px;
  height:50px;
}
.send-icon{
  position:absolute;
  font-size:20px;
  margin-left:924px;
  margin-top:-64px;
  border-width:0px;
  border-radius:5px;
  background-color:#e61041;
 
}
@media (max-width: 767px) {
  /* Mobile view styles */
  .Content-cus{
    width:300px;
    font-size:20px;
  }
  .Content-sys {
    width: 100%;
    border-radius: 20px;
    margin-bottom: 20px;
  }

  .searchbar {
    margin: 20px auto;
    width: 80%;
    max-width: 500px;
  }

  .send-icon {
    margin: 0 auto;
  }
}
`
export default Chat
