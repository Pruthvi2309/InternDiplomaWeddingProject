import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

function BookingRequest() {
  return (
    <Wrapper>
    <div className=".container-fluid super mob">
        <div className="row">
            <div className="col-12">
                <h1 className="heading">Booking Request</h1>
            </div>
        </div>
        <div className="row cont">
            <div className="col-12">
                <NavLink to="/Chat" className="link"><button className="content">
                  A  Message  For  Booking  Request 
                  <i  className='fas icon' > 
                        <span className="num position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                 99+
                        </span>&#xf27a;
                  </i>
                </button>
                </NavLink>
            </div>  
        </div>   
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
.super{
  padding-top:50px;
  padding-bottom:30px;
}
.link{
  text-decoration:none;
}
.num{
  margin-top:261px;
  margin-left:-67px;
  font-size:15px;
  width:40px;
  height:25px;
}
.row{
  margin-left:20px;
  margin-right:20px;
}
.heading{
 font-size:42px;
  text-shadow: 1px 1px 5px black;
  text-align:center;
  padding-top:50px;
  padding-bottom:50px;
  font-family:montserrat;
  color:black;
  
}
.cont{
  color:#f9f9f9;
}
.content{
  padding-top:25px;
  padding-left:20px;
  text-align:left;
  font-size:20px;
  color:black;
  border-radius:10px;
  border:none;
  font-family:arial;
}
.icon{
  width:fit-content;
  padding-left:1200px;
  padding-right:50px;
  padding-top:0px;
  font-size:30px;
  color:black;
}
@media (max-width: 767px) {
  /* Mobile view styles */
  .heading {
    font-size: 30px; /* Adjust this value as needed */
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .icon {
    padding-top:10px;
    padding-top:5px;
    padding-left: 10px; /* Adjust this value as needed */
    font-size: 24px; /* Adjust this value as needed */
  }
  .num {
    font-size: 12px; /* Adjust this value as needed */
    margin-top: 20px; /* Adjust this value as needed */
    margin-left: -35px; /* Adjust this value as needed */
    width: 30px; /* Adjust this value as needed */
    height: 20px; /* Adjust this value as needed */
    z-index:3px;
  }
}

`
export default BookingRequest


