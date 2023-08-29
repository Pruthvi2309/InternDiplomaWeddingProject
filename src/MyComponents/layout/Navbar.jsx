
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import React, { useState, useEffect } from 'react';


function Navbar() {
  const [search, setSearch] = useState("");
  // const searching = async() =>{
  //     console.log(search);
  //     try {
  //       const response = await fetch('http://localhost:4000/websearch', {
  //         method: 'post',
  //         body: JSON.stringify({ search }),
  //         headers: { 'Content-Type': 'application/json' },
  //       });
  //       if (response.ok) {
  //         const data = await response.json();

  //       } else {
  //         console.error('API response not okay:', response.status);
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };  
  const logout = () => {
    localStorage.clear();
  }
  const [name, setName] = useState("");
  const login = () =>{
    var get_name = localStorage.getItem("name");
    if (get_name != null) {
      var get_name = get_name.slice(1, -1);
      console.log("logged-in")
      setName(get_name);
      document.getElementById("logged-in").style = "display:block";
        
    }
  }
  
  useEffect(() => {
   login()
  },[]);

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
                  <NavLink to="/Vendors"><button className="dropdown-button">Vendors</button></NavLink>
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


              {/* Abouts Us */}

              <NavLink to="/AboutUs" className="link"><button className="aboutus">About Us</button></NavLink>

              {/* Contact Us */}

              <NavLink to="/Contact"><button href="#" className="contactus">Contact Us</button></NavLink>


            </ul>
            <form className="d-flex search">
              <input className="form-control me-sm-2 searchbar" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
              <button type="submit" className="search-icon"><i className="fa fa-search"></i></button>
            </form>

            {/* Resigter & Login Buttons */}

            <form>
              <NavLink to="/Signup"><button className="btn btn-reg my-2 my-sm-0" type="submit">Register</button></NavLink>
              <NavLink to="/Login"><button className="btn  btn-log my-2 my-sm-0" type="submit">Login</button></NavLink>
            </form>
            <div className='logged-in' id="logged-in">
              <div className='row'>
                <div className='col-md-6'>
                <div className="user-name"><b>{name}</b></div>
                </div>
                <div className='col-md-6 cust-img'>
                <div className="nav-item dropdown width">
                  <img className="nav-link dropdown-toggle iconlog" data-bs-toggle="dropdown" src="../images/profile.png" />
                  <div className="dropdown-menu" data-popper-placement="bottom-start">
                    <NavLink to="/ProfileSettings" className="link"><a className="dropdown-item">My Profile</a></NavLink>
                    <NavLink to="/Packages/Profile/General" className="link"><a className="dropdown-item" href="#">Custom Packages</a></NavLink>
                    <NavLink to="/BookingRequest" className="link"><a className="dropdown-item" href="#">Booking Requests</a></NavLink>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={logout}>Log out</a>
                  </div>
                </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Wrapper>
  )
}
const Wrapper = styled.section`
cust-img{
}
.logged-in{
  display:none;
}
.user-name{
  color:white;
  font-size:20px; 
  padding-right:5px;
  padding-top:7px;
}
.link{
  text-decoration:none;
}

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

                            //Navbar - About Us & Contact Us
.aboutus{
  border:none;
  background-color:#e61041;
  padding-left:30px;
  margin-top:8px;
  color:white;
}
.contactus{
  border:none;
  background-color:#e61041;
  color:white;
  padding-left:30px;
  margin-top:8px;
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
  color:white;
}
.btn-log{
  margin-left:10px;
  margin-right:5px;
}

                                  // Settings
      
.dropdown-menu{
  min-width:0px;
  width:140px;
  margin-left:-90px;
  font-size:14px;
}
.dropdown-item{
  padding-left:10px;
}
.iconlog{
  max-width:45px;
  max-height:45px;
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
/* Show the dropdown content when the button is hovered */
.dropdown-container:hover .dropdown-content{
  display: block;
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
  .search{
    margin-left:10px;
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
  .dropdown-menu{
    min-width:0px;
    width:174px;
    height:200px;
    margin-left:220px;
    font-size:20px;
  }
  .dropdown-item{
    padding-left:10px;
  }
  .iconlog{
    max-width:92px;
    max-height:67px;
    margin-left:316px;
    margin-top:-52px;
  }
  .btn-reg{
    z-index:3;
  }
  .btn-log{
    z-index:3;
  }
  .width{
    width:20px;
  }
  
}


`

export default Navbar