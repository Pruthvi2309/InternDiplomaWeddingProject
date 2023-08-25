import React from 'react'
import styled from 'styled-components'

function BookingRequest() {
  return (
    <Wrapper>
    <div className=".container-fluid super">
        <div className="row">
            <div className="col-12">
                <h1 className="heading">Booking Request</h1>
            </div>
        </div>
        <div className="row cont">
            <div className="col-12">
                <button className="content">
                  A  Message  For  Booking  Request 
                  <i  className='fas icon' > 
                        <span className="num position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                 99+
                        </span>&#xf27a;
                  </i>
                </button>
            </div>  
        </div>   
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`

.num{
  margin-top:195px;
  margin-left:-95px;
  font-size:15px;
  width:40px;
  height:25px;
}
.row{
  margin-left:20px;
  margin-right:20px;
}
.heading{
//  font-size:40px;
//  font-family:Arial;
//  text-align:center;
//  margin-bottom:20px;
//  color:;
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
  padding-bottom:30px;
  padding-left:20px;
  font-size:20px;
  color:black;
  border-radius:10px;
  border:none;
  font-family:arial;
  

}
.icon{
  padding-left:890px;
  padding-right:50px;
  padding-bottom:0px;
  font-size:35px;
  color:black;
}
`
export default BookingRequest


