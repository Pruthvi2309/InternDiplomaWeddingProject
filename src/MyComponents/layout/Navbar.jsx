import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function Navbar() {
  return (
  <Wrapper>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&family=REM&display=swap');

      </style>
       <nav className="navbar navbar-expand-lg bg">
          <div className="container-fluid">
              <NavLink to="/"><button className="navbar-brand logo">Wedding.com</button></NavLink>
              <button className="navbar-toggler nav-icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
              </button>
               <div className="collapse navbar-collapse" id="navbarColor01">
               <ul className="navbar-nav me-auto txt">
                     
                                      {/* Venues */}

                     <li className="nav-item">
                     <div className="dropdown-container">
                        <NavLink to="/Venues"><button className="dropdown-button">Venues</button></NavLink>
                        <div className="dropdown-content venues">
                          <div className='row'>
                            <div className="col-md-6">
                            <div className="in-drop">By Type</div>  

                              <a href="#">Banquet Hall</a>
                              <a href="#">Resort</a>
                              <a href="#">Lawns/Farmhouses</a>
                              <a href="#">Party Halls</a>
                              <a href="#">Destination Wedding</a>
                              <a href="#">4 star and above Hotels</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                          
                            <div className="col-md-6">
                            <div className="in-drop">By City</div>  
                              <a href="#">Mumbai</a>
                              <a href="#">Banaglore</a>
                              <a href="#">New Delhi</a>
                              <a href="#">Kolkata</a>
                              <a href="#">Ludhiana</a>
                              <a href="#">Nashik</a>
                              <a href="#">Hyderabad</a>
                              <a href="#">Ahemdabad</a>
                              <a href="#"><b>More</b></a>
                            </div>
                          </div>
                        </div>
                      </div>
                     </li>

                                      {/* Vendors */}

                     <li className="nav-item">
                     <div className="dropdown-container">
                        <NavLink to="/Vendor"><button className="dropdown-button">Vendors</button></NavLink>
                        <div className="dropdown-content vendors">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="in-drop">Photographers</div>
                              <a href="#">Photographers</a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Bridal Wear</div>  
                              <a href="#">Bridal Lehengas</a>
                              <a href="#">Kanjeevaram/Silk Sarees</a>
                              <a href="#">Cocktail Gowns</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Jewellery & Accessories</div>
                              <a href="#">Jewellery</a>
                              <a href="#">Flower Jewellery</a>
                              <a href="#">Bridal Jewllery on rent</a>
                              <a href="#">Accessories</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop" >Food</div>
                              <a href="#">Catering Services</a>
                              <a href="#">Cake</a>
                              <a href="#">Chaat and food stals</a>
                              <a href="#">Bartenders</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="in-drop">Makeup</div>
                              <a href="#">Bridal Makeup</a>
                              <a href="#">Family Makeup</a>
                              
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Groom Wear</div>  
                              <a href="#">Sherwani</a>
                              <a href="#">Wedding Suits/Tuxes</a>
                              <a href="#">Sherwani on rent</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Invites & Gifts</div>
                              <a href="#">Invitations</a>
                              <a href="#">Favors</a>
                              <a href="#">Invitations Gifts</a>
                              <a href="#">Mehendi Favors</a>
                              <a href="#"><b>View All</b></a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop" >Pandits</div>
                              <a href="#">Wedding Padits</a>
                              
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-3">
                              <div className="in-drop">Pre-wedding Shoot</div>
                              <a href="#">Pre-wedding Shoot Locations</a> 
                              <a href="#">Pre-wedding Photogrphers</a> 
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Music & Dance</div>  
                              <a href="#">DJs</a>
                              <a href="#">Sangeet Choreographer</a>
                              <a href="#">Wedding Entertainment</a>
                              
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Planning and Decor</div>
                              <a href="#">Wedding Planners</a>
                              <a href="#">Decorators</a>
                              <a href="#">Small Function Decor</a>
                            </div>
                            <div className="col-md-3">
                            <div className="in-drop">Mehendi</div>
                              <a href="#">Mehendi</a>
                            </div>
                          </div>  
                        </div>
                      </div>
                     </li>

                                              {/* Photos */}

                     {/* <li className="nav-item">
                     <div className="dropdown-container">
                        <button className="dropdown-button">Photos</button>
                        <div className="dropdown-content photos"> */}
                          {/* row1 */}
                          {/* <div className="row">
                             <div className="col-md-4 ">
                                 <div className="in-drop">Outfit</div>
                                 <a>Bridal Lehenga</a>
                                 <a>Wedding Sarees</a>
                                 <a>Engagement</a>
                                 <a>Mehndi</a>
                                 <a>Blouse Designs</a>
                                 <a><b>More</b></a>
                             </div>
                             <div className="col-md-4 g-0">
                                 <div className="in-drop">Jewellery & Accessories</div>
                                 <a>Bridal Jewellery</a>
                                 <a>Engagement Rings</a>
                                 <a>Floral Jewellery</a>
                                 <a><b>More</b></a>
                             </div>
                             <div className="col-md-4 g-0">
                                 <div className="in-drop">Wedding Photography</div>
                                 <a>Pre Wedding Shoot</a>
                                 <a>Wedding</a>
                                 <a>Wedding Photoshoot & Poses</a>
                                 <a><b>More</b></a>
                             </div>
                          </div>
                        </div>
                      </div>
                     </li> */}

                                           {/* Abouts Us */}

                         <button href="#" className="aboutus">About Us</button>

                                            {/* Contact Us */}
                                          
                         <NavLink to="/Contact"><button href="#" className="contactus">Contact Us</button></NavLink>


              </ul>
              <form className="d-flex search">
                   <input className="form-control me-sm-2 searchbar" type="search" placeholder="Search"/>
                   <button type="submit" className="search-icon"><i className="fa fa-search"></i></button>
              </form>

                                      {/* Resigter & Login Buttons */}

           <form className="d-flex">
               <NavLink to="/Signup"><button className="btn  my-2 my-sm-0" type="submit">Register</button></NavLink>
               <NavLink to="/Login"><button className="btn  btn-splite my-2 my-sm-0" type="submit">Login</button></NavLink>
           </form>
         </div>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper= styled.section`

                              //Navbar-WebsiteLogo
.logo{
  border-width:0px;
  background-color:#e61041;

  font-size:30px;
  color:white;
  text-decoration:none;
}

                              // Navbar-Text
.txt{
  color:white;
  font-family:sans-serif;
}


                              // Navbar-BackgroundColor
.bg{
  background-color:#e61041;
  position:fixed;
  width:100%;
  z-index:5;
}

                              // Navbar-Venues
.caption-img{
 color:black;
 text-align:center;
 padding-top:2px;
} 
.venues{
  width:400px;
  height: 300px;
}
.venue-img{
  width:128px;
  height:96px;
  border-radius:5px;
}

                            // Navbar-Vendors

.vendors{
  width:800px;
  height: 400px;
}
.mobile{
  display:block;
}
//                             // Navbar-Photos
// .photos{
//   width:700px;
//   height:200px;
// }
                            //Navbar - About Us & Contact Us
.aboutus,.contactus{
  border:none;
  background-color:#e61041;
  padding-left:30px;
  color:white;
}
.contactus{
  border:none;
  background-color:#e61041;
  color:white;
  padding-left:30px;
  margin-top:8px;
}
/* Show the dropdown content when the button is hovered */
.dropdown-container:hover .dropdown-content{
  display: block;
}

@media only screen and (max-width:768px){
  .aboutus{
    border:none;
    background-color:#e61041;
    color:white;
    text-align:justify;
    margin-top:10px;
    margin-left:10px;
    margin-bottom:10px;
    padding-left:8px;
  }
  .contactus{
     padding-left:15px;
     padding-bottom:20px;
  }
  .nav-icon{
    margin-right:10px;
  }
  .bg{
    width:410px;
  }
  .dropdown-container:hover .dropdown-content{
    display: none;
  }
}
                            // SearchBar


                         
.searchbar{
  width:200px;
}
.search-icon{
  margin-left:-50px;
  margin-top:5px;
  margin-bottom:5px;
  border:none;
  margin-right:40px;
  background-color:white;
}

                            //Navbar-Register & Login Buttons
.btn{
  background-color:#e61041;
  // border:1px solid;  
  color:white;
}
.btn-splite{
  margin-left:10px;
}

                              // Navbar - Dropdown

/* Basic styling for the dropdown button and content */
.dropdown-container {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color:#e61041;
  border: none ;
  color:#FFF;
  padding: 8px 16px;
  cursor: pointer;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
.in-drop{
  padding-top:10px;
  color:#e72e77;
  padding-left:10px;
  font-family: 'REM', sans-serif; 
  font-size:16px;
}





/* Optional: Style the individual items in the dropdown */
.dropdown-content a {
  display: block;
  color: #333;
  padding: 1px 10px;
  text-decoration: none;
  font-size:12px;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

`

export default Navbar
