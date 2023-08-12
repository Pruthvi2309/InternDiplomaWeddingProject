
import React from 'react'
import styled from 'styled-components'
function Home() {
  return (
    <Wrapper>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap');
      </style>
      {/* Container 1 :  */}


      <div className=".container-fluid overflow1">
        <div className='crop'>
          <img src='./images/home4.jpg' />
        </div>
        <p className="web-title">Wedding.com</p>
      </div>

      {/* container 3 */}

      {/* PC-View */}

      <div id="carouselExampleIndicators" className="carousel slide pc-carousal" data-bs-ride="carousel">
        {/* <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> */}
        <div className="carousel-inner container">
          <h4 className="container3-heading">POPULAR SEARCHES</h4>
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/BridalWear.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Bridal Wear</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/BridalMakeup.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Bridal MakeUp</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/photographer.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Photographers</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/Invitation.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Invitations</h6>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="images/Catering.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Catering Services</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="images/GroomWear.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Groom Wear</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="images/MehendiArtist.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Mehendi Artist</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="images/Decorator.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Decorators</h6>
              </div>
            </div>
          </div>


          <div className="carousel-item">
            <div className="row ">
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/pandit.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Pandits</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/Dj.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">DJ</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/preweddingShoot.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-text">Pre-Weddding Shoot Locations</h6>
              </div>
              <div className="col-md-3">
                <div className="carousal">
                  <img src="./images/Jewellery.jpg" className="d-block w-100" />
                </div>
                <h6 className="caption-te xt">Jewellery</h6>
              </div>
            </div>
          </div>

        </div>
        <button className="carousel-control-prev arrow-btn-cir1" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next arrow-btn-cir2" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

        {/* Mobile View */}

      </div>
      <div id="carouselExampleControls" className="carousel slide mobile-carousal" data-bs-ride="carousel">
        <div className="carousel-inner img-container">
          <div className="carousel-item active carousalm">
            <img src="images/BridalWear.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/BridalMakeup.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/photographer.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/Invitation.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/Catering.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/GroomWear.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/MehendiArtist.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/Decorator.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/pandit.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/Dj.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/preweddingShoot.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item carousalm">
            <img src="images/Jewellery.jpg" className="d-block w-100" alt="..." />
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Container 4 */}

      <h1 className="container4-heading">POPULAR VENUES SEARCHES</h1>

                     {/* Sub-Container 1 */}

      <div className="container ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/TajHotel.jpg"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      4 Star & Above Hotel
                    </h5>
                    <h6>
                      Mumbai | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Iconic, opulent, heritage, hospitality,
                      Mumbai, landmark, luxurious, seafront, history, architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/Resorts.jpg"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      Resorts
                    </h5>
                    <h6>
                      Mumbai | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Relaxing, escape, paradise, amenities, recreation,
                      leisure, tranquil, getaway, hospitality, nature.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="col-md-6 ">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/BanquetHalls.jpg"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      Banquet Halls
                    </h5>
                    <h6>
                      Mumbai | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Spacious, events, celebrations, gatherings,
                      elegant, catering, decor, venue, functions, versatile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/PartyHalls.jpg"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      Party Halls
                    </h5>
                    <h6>
                      Mumbai  | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Lively, festive, entertainment, dancing,
                      food, music, gatherings, celebrations, ambiance, fun.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/Lawns-Farmhouses.jpg"/>
                </div>
                <div className="col-md-6 ">
                  <div className="card-body">
                    <h5 className="card-title">
                      Lawns/Farmhouses
                    </h5>
                    <h6>
                      Mumbai | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Green, open-air, spacious, nature,
                      events, weddings, retreats, relaxation, scenic, outdoor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="row">
                <div className="col-md-6 cardimg">
                  <img src="images/WeddingDestinations.jpg"/>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">
                      Wedding Destination
                    </h5>
                    <h6>
                      Mumbai  | Bangalore | Delhi
                    </h6>
                    <p className="card-text">
                      Exotic,romantic,picturesque,dreamy,destination,
                      vows,love,celebration,memorable,breathtaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

                        {/* Container 2:  About Us */}

      <div className="about-us .container-fluid">
        <div className="background-img"></div>
        <div className="about-wrapper row align-items-left">
          <div className="image-container col-md-4 text-right ">
            <img
              src="https://i.pinimg.com/564x/a9/72/0a/a9720ae02302e88a923fd1a7e915e5f3.jpg"
              alt="Our Journey"
            />
          </div>
          <div className="text-content col-md-8">
            <h2>About Us</h2>
            <p>Welcome to our wedding website! We are excited to share our journey with you.</p>
            <p>Our love story began...</p>
            <p>
              We met in college and instantly connected over our shared love for photography and
              adventure. Our journey has taken us to breathtaking landscapes and wonderful
              memories.
            </p>
            <p>As we embark on this new chapter, we invite you to be a part of our story...</p>
          </div>
        </div>
      </div>


    </Wrapper>
  )
}
const Wrapper = styled.section`

                                  // Container-1

.crop img{
  width:100%;
  height:700px;
}

.pc-carousal{
  display:block;
}
.mobile-carousal{
  display:none;
}

.web-title{
  text-shadow: 1px 1px 5px pink;
  color:#fff;
  font-size:100px;
  font-family: darling;
  position:absolute;
  margin-top:-350px;
  margin-left:40px;
  border-radius:30%;
}

                                      // Container-2

.about-us {
    height: 10px;
    width:105%;
    margin-bottom:400px;
    margin-top:60px;
  }
  .about-wrapper {
    width: 90%;
    height: 100%;
  }
  
  .image-container {
    padding-left:120px;
  }
  
  .image-container img {
    max-width: 100%;

    height: 320px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .text-content {
    padding: 20px;
    background-color: white;
    color: #333; /* Adjust the text color according to the background color */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .text-content h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color:#e61041;
  }
  
  .text-content p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
                                  // container 3
.caption-text{             
  text-align:center;
  padding-top:10px;
  
}
.arrow-btn-cir1{
  background-color:black;
  border-radius:50%;
  width:50px;
  height:50px;
  margin-top:230px;
  margin-left:90px;
}
.arrow-btn-cir2{
  background-color:black;
  border-radius:50%;
  width:50px;
  height:50px;
  margin-top:230px;
  margin-right:100px;
}
.carousal{
  border-radius:5%;
  height:210px;
  width:240px;
  overflow: hidden;
  margin: 0 auto;
} 

.carousal img{
  width: 100%;
  height: 100%;
  transition: 0.5s all ease-in-out;
}

.carousal:hover img {
  transform: scale(1.4);
}



                              // container-3 & 4 Heading 
.container3-heading,.container4-heading{
  font-size:42px;
  text-shadow: 1px 1px 5px black;
  text-align:center;
  padding-top:50px;
  padding-bottom:50px;
  font-family:montserrat;
  color:black;
  
}


                                    // Container-4
// .card{
//   max-width:540px;
// }
.cardimg img{
  width:100%;
  height:200px;
}

@media only screen and (max-width:768px){
  .pc-carousal{
    display:none;
  }
  .mobile-carousal{
    padding:30px;
    display:block;
  }
  .crop{
    content: url(./images/home5.jpg);
    width:100%;
    height:400px;
  }
  .web-title{
    text-shadow: 1px 1px 5px pink;
    color:#fff;
    font-size:64px; 
    font-family: darling;
    position:absolute;
    margin-top:-100px;
    margin-left:20px;
    border-radius:30%;
  }
  .carousalm {
    border-radius:5px;
    width:100%;
    height:300px;

  }
  .carousalm img{
    width:100%;
    height:300px;
    overflow: hidden;
  }
  .sub-container4-col{
    padding-left:50px;
    width:100%;
  }
  .cardimg img{
    height:200px;
    width:100%;
  }
 .card{
   max-width:540px;
  }
  .image-container{
    width:400px;
    
  }
  .image-container img {
    max-width:120%;
    
    height: 330px;
    margin-left:-40px;
    margin-top:-40px;
    margin-bottom:20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  .text-content {
    margin-left:22px;
    background-color: white;
    color: #333; /* Adjust the text color according to the background color */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .about-us{
     margin-bottom:700px;
  }
  
 
}                     
`
export default Home
