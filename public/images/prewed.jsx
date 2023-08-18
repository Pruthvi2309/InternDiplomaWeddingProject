import React, { useState } from 'react';
import styled from 'styled-components';

function Venues() {
  const [showFilterWindow, setShowFilterWindow] = useState(false);

  const handleFilterButtonClick = () => {
    setShowFilterWindow(!showFilterWindow);
  };

  return (
    <Wrapper>
      <>
        <div className="top-container">
        
          <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            
            Filters
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className='row'>
                <div className='col-md-12'>
                  {/* Guests Capacity */}
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <br/>
                  {/* <input type="range" className="htmlForm-range" min="0" max="5" step="1" id="customRange3" /> */}
                </div>
              </div>
              <div className='row'>
                <div className="col-md-2">
                  {/* <div className='indicators'><b>&lt;100</b></div> */}
                </div>
                <div className="col-md-2 ">
                  {/* <div className='indicators'><b>100-250</b></div> */}
                </div>
                <div className="col-md-2">
                  {/* <div className='indicators'><b>250-500</b></div> */}
                </div>
                <div className="col-md-2">
                  {/* <div className='indicators'><b>500-1000</b></div> */}
                </div>
                <div className="col-md-2">
                  {/* <div className='indicator'><b>1000-2000</b></div> */}
                </div>
                <div className="col-md-2">
                  {/* <div className='indicators'><b>2000+</b></div> */}
                </div>
              </div>
              <div className='row'>
                <div className="col-md-12">
                  <br/>
                  Rating
                </div>
                <center>
                <div className="row">
                
                  <div className='col-md-12'>
                  <br/>
                  
                          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">&lt;3</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">3 - 4</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">4 - 4.5</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio4">4.5 - 4.8</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off"/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio5">4.8 - 5</label>
                          </div>
                          
                      </div>
                      
                    </div>
                    </center>
                    <div className="row">
                      <div className='col-md-12'>
                          <br/>
                          Venue Type
                      </div>
                    </div>
                    <center>
                    <div className="row">
                      <div className='col-md-12'>
                      <br/>
                      <div className="btn-group cont1" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck1">4 Star+ Hotels</label>
                          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck2">Banquet Halls</label>
                          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck3">FarmHouses</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div className="btn-group cont2" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck4">Hotels</label>
                          <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck5">Resorts</label>
                          <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"/>
                          {/* <label className="btn btn-primary" htmlFor="btncheck6">Restaurant</label> */}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div className="btn-group cont3" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" className="btn-check" id="btncheck7" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck7">Destination Wedding</label>
                          <input type="checkbox" className="btn-check" id="btncheck8" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck8">Heritage Property</label>
                          </div>
                      </div>
                    </div>
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
                          <input type="range" className="htmlForm-range" min="0" max="5" step="1" id="customRange3" />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-md-2">
                        <div className='indicators'><b>&lt;=25K</b></div>
                      </div>
                      <div className="col-md-2 ">
                        <div className='indicators'><b>25K-50K</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>50K-1L</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>1L-2L</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>2L-5L</b></div>
                      </div>
                      <div className="col-md-2">
                        <div className='indicators'><b>5L+</b></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div className="d-grid gap-2">
                        <br/>
                        <button className="btn btn-lg btn-primary" type="button">Apply</button>
                        <button type="button" className="btn btn-outline-primary">Reset</button>
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
                   <h1 className="pre-wedding-text">PRE-WEDDING SHOOT</h1>
              </div>

                <div className="col-md-2">
                  <input className="htmlForm-control me-sm-2" type="search" placeholder="Search" />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-info my-2 my-sm-0" type="submit">
                    Search
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className='card'>
                    <div className="rating">4.8</div>
                    <img src="images/image1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Eternity Captures</h5>
                      <p className="address">789 Lake Rd, Village, Country</p>
                      <p className="type">Resort</p>
                      <div className="row">
                        <div className='col-md-6'>
                          {/* <p className="veg-price">₹500 per plate (Veg)</p> */}
                        </div>
                        <div className='col-md-6'>
                          {/* <p className="non-veg-price">₹600 per plate (Non-Veg)</p> */}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className="capacity-box">
                            {/* <p className="capacity">500-1000 pax</p> */}
                            {/* <p className="rooms">12 rooms</p> */}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='btn-container'>
                            <a href="#" className="btn btn-primary">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='card'>
                    <div className="rating">4.8</div>
                    <img src="images/image1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Enchanted Moments Photography</h5>
                      <p className="address">789 Lake Rd, Village, Country</p>
                      <p className="type">Resort</p>
                      <div className="row">
                        <div className='col-md-6'>
                          {/* <p className="veg-price">₹500 per plate (Veg)</p> */}
                        </div>
                        <div className='col-md-6'>
                          {/* <p className="non-veg-price">₹600 per plate (Non-Veg)</p> */}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className="capacity-box">
                            {/* <p className="capacity">500-1000 pax</p> */}
                            {/* <p className="rooms">12 rooms</p> */}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='btn-container'>
                            <a href="#" className="btn btn-primary">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className='card'>
                    <div className="rating">4.8</div>
                    <img src="images/image1.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">Dreamy PreWeddings</h5>
                      <p className="address">789 Lake Rd, Village, Country</p>
                      <p className="type">Resort</p>
                      <div className="row">
                        <div className='col-md-6'>
                          {/* <p className="veg-price">₹500 per plate (Veg)</p> */}
                        </div>
                        <div className='col-md-6'>
                          {/* <p className="non-veg-price">₹600 per plate (Non-Veg)</p> */}
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className="capacity-box">
                            {/* <p className="capacity">500-1000 pax</p> */}
                            {/* <p className="rooms">12 rooms</p> */}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='btn-container'>
                            <a href="#" className="btn btn-primary">View More</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
        /* Your existing styles and the added styles htmlFor the filter window */


        .pre-wedding-text {
          margin-left: -21rem; /* Set the margin to adjust the alignment */
        }
        


        .btn-info {
          background-color: #e61041; /* Updated background color */
          color: #fff; /* Updated text color */
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          font-size: 14px;
        }
      
        .btn-info:hover {
          background-color: #c30733; /* Updated hover color */
        }
        .btn-info:active {
          
          color: #fff; /* Updated active text color to white */
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
    padding-top: 10px;
    padding-bottom: 10px;
    // padding-left: 00px; /* Adjust this value according to your preference */
    padding-right: 1000px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  // h1{
  //   margin-left: -21rem;
  //   font-size: 2.2em;
  // }

    


        .card {
          margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 340px;
  }

        .rating {

          
          position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
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

  //       .non-veg-price {
  //         color: red;
  // }

  //       .veg-price {
  //         color: green;
  // }

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
          background-color: #c30733;
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

        `;

        export default Venues;