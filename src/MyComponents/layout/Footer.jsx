import React from 'react'
import styled from 'styled-components'
function Footer() {
  return (
<Wrapper>
  <footer className="footer bg-dark text-light py-4">
     <h4 className="heading">Wedding.com - Your Personal Wedding Planner</h4>
     <br/>
      <p className="content-text">Plan your wedding with Us</p>
      <p className="content-txt">Wedding.com is an Indian Wedding Planning Website and app where you 
        can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in India, or looking for the top photographers, or just some ideas and inspiration for your wedding. WedMeGood can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration
        gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
    <div className=".container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h5 className="contact-Us">Contact Us to get best deals</h5>
          <br/>
          <div className="row">
            <div className="col-md-6 ">
              <h6 className="contact-Us">For Vendors</h6>
              <p className="contact-Us">vendor@wedding.com</p>
              <p className="contact-Us">1234567899</p>
            </div>
            <div className="col-md-6">
              <h6 className="contact-Us">For Users</h6>
              <p className="contact-Us">info@wedding.com</p>
              <p className="contact-Us">1234567898</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h5 className="follow">Follow Us</h5>
          <br/>
          <ul className="social-icons list-inline icons">
            <li className="list-item"><a href="#"><i className="fab fa-facebook-f"></i></a>&nbsp;Wedding123@facebook.com</li>
            <li className="list-item"><a href="#"><i className="fab fa-instagram"></i></a>&nbsp;Wedding123@instagram.com</li>
            <li className="list-item"><a href="#"><i className="fab fa-twitter"></i></a>&nbsp;Wedding123@twitter.com</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <center>All Rights Reserved © Wedding.com</center>
          </div>
        </div>
    </div>
    </footer>
</Wrapper>
  )
}
const Wrapper=styled.section`
.heading{
  padding-top:10px;
  padding-left:20px;
  width:400px;
}
.content-text,.content-txt{
  padding-left:20px;
  text-align:justify;
  width:1320px;
}
.contact-Us{
  padding-left:20px;
  text-align:justify;
}
.follow{
  padding-left:20px;
  text-align:justify;
}
.footer{
  width:100%;
}
@media only screen and (max-width:768px){
  .content-text,.content-txt{
    width:400px;
    padding-left:20px;
    padding-right:20px;
    text-align:justify;
  }
  .contact-Us{
    padding-left:20px;
    text-align:justify;
  }
  .icons{
    padding-left:20px;
  }
  .footer{
    width:405px;
  }
}

`
export default Footer
