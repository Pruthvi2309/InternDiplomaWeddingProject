import React from 'react'
import styled from 'styled-components'

function chat() {
  return (
    <Wrapper>
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-6">
               fddvdddsdvscvsxvsxv
            </div>
            <div className="col-md-6 content">
                <h3>Welcome Dear Customer Mr.Nikunj</h3>
                <h5>UserName: Rana Nikunj </h5>
                <h5>Country:India</h5>
                <h5>Phone No: 9875647822</h5>
                <h5>Date of Booking : 15\01\2019</h5>
                <h5>No of Guests : 40</h5>
                <h5>No of Rooms : 10</h5>
                <h5>Type : Pre-Wedding</h5>
                <h5>Timming of Event : 11 Auguest ,2019  08:00:00pm</h5>
            </div>
        </div>
      
    </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
.content{
    float:right;
    margin-top:10px;
    // margin-left:840px;
    width:fit-content;
    height:fit-content;
    padding:20px;
  border-width:0px;
  background-color:#edece8;
  border-radius:20px 0px 20px 20px;
}
`
export default chat
