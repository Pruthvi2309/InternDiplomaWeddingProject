import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Venues() {
  const [showFilterWindow, setShowFilterWindow] = useState(false);

  const handleFilterButtonClick = () => {
    setShowFilterWindow(!showFilterWindow);
  };

  return (
    <Wrapper>
      <>
      <div className="top-container">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
          Filters
          </button>
          <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <div className='row'>
                <div className='col-md-12'>

                {/* Location */}
                <div className="row">
            <div className="col-md-12">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" className="form-control" placeholder="Enter location" />
            </div>
          </div>
          <br></br>
                {/* Experience Level */}
                <div className="row">
            <div className="col-md-12">
              <label>Experience Level:</label>
              <div className="btn-group" role="group" aria-label="Experience Level">
                <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel1" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="experienceLevel1">Beginner</label>
                <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel2" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="experienceLevel2">Intermediate</label>
                <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel3" autoComplete="off" />
                <label className="btn btn-outline-primary" htmlFor="experienceLevel3">Experienced</label>
              </div>
            </div>
          </div>
          <br></br>
                  {/* Guests Capacity */}
                {/* </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <br/>
                  <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3" />
                </div>
              </div>
              <div className='row'>
                <div className="col-md-2">
                  <div className='indicators'><b>&lt;100</b></div>
                </div>
                <div className="col-md-2 ">
                  <div className='indicators'><b>100-250</b></div>
                </div>
                <div className="col-md-2">
                  <div className='indicators'><b>250-500</b></div>
                </div>
                <div className="col-md-2">
                  <div className='indicators'><b>500-1000</b></div>
                </div>
                <div className="col-md-2">
                  <div className='indicator'><b>1000-2000</b></div>
                </div>
                <div className="col-md-2">
                  <div className='indicators'><b>2000+</b></div>
                </div>
              </div>
              <div className='row'>
                <div className="col-md-12">
                  <br/> */}
                  Rating
                </div>
                <center>
                <div className="row">
                
                  <div className='col-md-12'>
                  <br/>
                  
                          <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio1">&lt;3</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio2">3 - 4</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio3">4 - 4.5</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio4">4.5 - 4.6</label>
                            <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off"/>
                            <label class="btn btn-outline-primary" for="btnradio5">4.6 - 5</label>
                          </div>
                      </div>
                      
                    
                    </div>
                    </center>
                    <div className="row">
                      <div className='col-md-12'>
                          <br/>
                          Styles
                      </div>
                    </div>
                    <center>
                    <div className="row">
                      <div className='col-md-12'>
                      <br/>
                      <div class="btn-group cont1" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck1">Natural</label>
                          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck2">Glamorous</label>
                          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck3">Vintage</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div class="btn-group cont2" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck4">Bohemian</label>
                          <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck5">Matt</label>
                          <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck6">Airbrush</label>
                          <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck6">HD</label>
                          {/* <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off"/> */}
                          {/* <label class="btn btn-primary" for="btncheck6">High Definition</label> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className="row">
                      <div className='col-md-12'>
                      <div class="btn-group cont3" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck7">Destination Wedding</label>
                          <input type="checkbox" class="btn-check" id="btncheck8" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck8"></label>
                          </div>
                      </div>
                    </div> */}
                    </center>
                    <div className="row">
                      <div className='col-md-12'>
                          <br/>
                          Budget
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                        <br/>
                          <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3" />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-md-2">
                        <div className='indicators'><b>&lt;=10,000</b></div>
                      </div>
                      <div className="col-md-2 ">
                        <div className='indicators'><b>10,000-17,000</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>20,000-25,000</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>&gt;=30,000</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>31,000-40,000</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>50,000</b></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div class="d-grid gap-2">
                        <br/>
                        <button class="btn btn-lg btn-primary" type="button">Apply</button>
                        <button type="button" class="btn btn-outline-primary">Reset</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <br/>
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <h1>Makeup</h1>
                </div>
                <div className="col-md-2">
                  <input className="form-control me-sm-2 mob-width"
                  type="search"
                  placeholder="Search" 
                   />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary mob-btn" type="submit">
                    Search
                  </button>
                </div>
              </div>
              <div className="row">
           <div className="col-md-4">
           <NavLink to="/Vendor" className="link">
           <div className="card">
            <div className="rating">4.7</div>
              <img src="images/i1.jpg" className="card-img-top"/>
              <div className="card-body">
                <h5 className="card-title">Glamour Makeup Studio</h5>
                <p className="address">123 Beauty Avenue, Banglore</p>
                <p className="type">Makeup Artist</p>
                <p className='type'>Price 16000 per person</p>
            </div>
           </div>
           </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Vendor" className="link">
            <div className="card">
              <div className="rating">4.8</div>
              <img src="images/i2.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">krishna Beauty Parlour</h5>
                <p className="address">Sf-16 City Point, Borsad</p>
                <p className="type">Makeup Artist</p>
                <p className='type'>Price 31000 for each</p>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Vendor" className="link">
            <div className="card">
              <div className="rating">4.8</div>
              <img src="images/i3.jpg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Narsinh Makeup Studio</h5>
                <p className="address">69 Tepalnagar, Vadodara </p>
                <p className="type">Makeup Artist</p>
                <p className='type'>Price 20000 each perosn</p>
              </div>
            </div>
            </NavLink>
          </div>
        </div>
      </div>

            <div className="row">
              <div className="col-md-12 pagin">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#">
                      &laquo;
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      4
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      5
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &raquo;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </>
        </Wrapper >
        );
}

const Wrapper = styled.div`
.link{
  text-decoration:none;
}
/* Your existing styles and the added styles htmlFor the filter window */
.card-img-top{
    height:200px;
}
.cont1 ,.cont2 ,.cont3{
  width:100%;
}
.cont1 .btn{
  border-radius:0px;
}
.cont2 .btn{
  border-radius:0px;
}
.cont3 .btn{
  border-radius:0px;
}
.indicators{
  font-size:9px;
  padding:0px;
}
.indicator{
  font-size:8px;
padding:0px;
}
.apply-btn{
  display:flex;
justify-content:center;
padding-top:25px;
}

.top-container {
padding-top: 80px;
// padding-left: 40px;
padding-bottom: 10px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h1{
margin-left: ;
margin-top:11px;
margin-bottom:20px;
}


.card {
  margin-bottom: 20px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
width: 340px;
}

.rating {
  position: absolute;
top: 10px;
right: 10px;
color: #e61014;
padding: 5px 10px;
font-weight: bold;
font-size: 16px;
}

.address {
  color: #555;
font-size: 14px;
margin-top: 5px;
}

.type {
  color: #555;
font-size: 14px;
}

.non-veg-price,
.veg-price {
  font - size: 12px;
margin-top: 10px;
}

.non-veg-price {
  color: red;
}

.veg-price {
  color: green;
}

.capacity-box {
background-color: #f1f1f1;
padding: 8px;
display: inline-block;
margin-top: 10px;
text-align: center;
}

.capacity,
.rooms {
  color: #555;
font-size: 12px;
margin: 0;
padding: 0;
}

.btn-container {
  padding: 10px;
}

.btn-primary {
margin-left:10px;
background-color: #e61041;
color: #fff;
border: none;
padding: 8px 16px;
border-radius: 4px;
text-decoration: none;
display: inline-block;
font-size: 14px;
}

.btn-primary:hover {
background-color: #c30733;
  }
.filter-window {
  position: absolute;
top: 55px;
left: 0;
background-color: #ffffff;
border-top:1pt solid;
border-color:black;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
width: 100%;
z-index:4;
}
.filter-title{
  text-align:center;
}
.filter-content{
  font-size:14px; 
}
.check{
  display:flex;
justify-content:center;

}
@media only screen and (max-width:768px){
//   .mob-width{
//     width:200px;
//     margin-bottom:20px;
//   }
//   .mob-btn{
//     position:absolute;
//     margin-left:-250px;
//     margin-top:-59px; 
//     z-index:3;
//   }
.mob-width{
  width:200px;
  margin-bottom:20px;
}
.mob-btn{
  position:absolute;
  margin-left:210px;
  margin-top:-59px;
  z-index:3;
  }
  .card{
    margin-left:20px;
  }
}

`;

export default Venues;
