import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Venues() {
  const [data, setData] = useState([]);
  const [rating, setRating] = useState(-1);
  const [radio, setRadio] = useState(-1);
  const [budget, setBudget] = useState(-1);
  const [search, setSearch] = useState("");
  const range_arr = ["<100", "100-250", "250-500", "500-1000", "1000-2000", "2000+"];
  const rating_arr = ["<3", "3-4", "4-4.5", "4.5-4.8", "4.8-5"];
  const budget_arr = ["<=25K", "25K-50K", "50K-1L", "1L-2L", "2L-5L", "5L+"];
  const [selectedVenues, setSelectedVenues] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/photographer', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseData = await response.json(); // Parse the response JSON
      console.log('Response data from server:', responseData); // Debugging line

      setData(responseData); // Set the fetched data to the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const filters = () => {
    // Add your filter logic here
    console.log('Applying filters...');
    console.log('Rating:', rating);
    console.log('Level:', radio);
    console.log('Budget:', budget);
    console.log("sending data");
    // if(range!=-1)
    // document.getElementById("filter1").style="display:block";
    // if(radio!=-1)
    // document.getElementById("filter2").style="display:block";
    // if(check.length != 0)
    // document.getElementById("filter3").style="display:block";
    // if(budget!=-1)
    // document.getElementById("filter4").style="display:block";
    sendData();
  };
  const reset = () => {
    // document.getElementById("filter1").style="display:none";
    // document.getElementById("filter2").style="display:none";
    // document.getElementById("filter3").style="display:none";
    // document.getElementById("filter4").style="display:none";
    collectData();
  };
  useEffect(() => {
    console.log("collecting data");
    collectData();

  }, []);

  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:4000/photofilter', {
        method: 'post',
        body: JSON.stringify({ radio, rating, budget }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error('API response not okay:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const searchData = async () => {
    console.log(search);
    try {
      const response = await fetch('http://localhost:4000/photographysearch', {
        method: 'post',
        body: JSON.stringify({ search }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setData(data);
      } else {
        console.error('API response not okay:', response.status);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
                  <br></br>

                  {/* Experience Level */}
                  <div className="row">
                    <div className="col-md-12">
                      <label>Experience Level:</label>
                      <div className="btn-group" role="group" aria-label="Experience Level">
                        <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel1" autoComplete="off" onClick={() => setRadio(0)} />
                        <label className="btn btn-outline-primary" htmlFor="experienceLevel1">Beginner</label>
                        <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel2" autoComplete="off" onClick={() => setRadio(1)} />
                        <label className="btn btn-outline-primary" htmlFor="experienceLevel2">Intermediate</label>
                        <input type="radio" className="btn-check" name="experienceLevel" id="experienceLevel3" autoComplete="off" onClick={() => setRadio(2)} />
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
                      <br />

                      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => setRating(0)} />
                        <label class="btn btn-outline-primary" for="btnradio1">&lt;3</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => setRating(1)} />
                        <label class="btn btn-outline-primary" for="btnradio2">3 - 4</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={() => setRating(2)} />
                        <label class="btn btn-outline-primary" for="btnradio3">4 - 4.5</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" onClick={() => setRating(3)} />
                        <label class="btn btn-outline-primary" for="btnradio4">4.5 - 4.8</label>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" onClick={() => setRating(4)} />
                        <label class="btn btn-outline-primary" for="btnradio5">4.8 - 5</label>
                      </div>

                    </div>

                  </div>
                </center>
                <div className="row">
                  <div className='col-md-12'>
                    <br />
                    {/* Venue Type
                      </div>
                    </div>
                    <center>
                    <div className="row">
                      <div className='col-md-12'>
                      <br/>
                      <div class="btn-group cont1" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck1">4 Star+ Hotels</label>
                          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck2">Banquet Halls</label>
                          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck3">FarmHouses</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div class="btn-group cont2" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck4" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck4">Hotels</label>
                          <input type="checkbox" class="btn-check" id="btncheck5" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck5">Resorts</label>
                          <input type="checkbox" class="btn-check" id="btncheck6" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck6">Restaurant</label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className='col-md-12'>
                      <div class="btn-group cont3" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" class="btn-check" id="btncheck7" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck7">Destination Wedding</label>
                          <input type="checkbox" class="btn-check" id="btncheck8" autocomplete="off"/>
                          <label class="btn btn-primary" for="btncheck8">Heritage Property</label>
                          </div>
                      </div>
                    </div>
                    </center>
                    <div className="row">
                      <div className='col-md-12'>
                          <br/> */}
                    Budget
                  </div>
                </div>
                <div className="row">
                  <div className='col-md-12'>
                    <br />
                    <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3" value={budget} onChange={e => setBudget(e.target.value)} />
                  </div>
                </div>
                <div className='row'>
                  <div className="col-md-2">
                    <div className='indicators'><b>&lt;=2.5K</b></div>
                  </div>
                  <div className="col-md-2 ">
                    <div className='indicators'><b>2.5L-3.0L</b></div>
                  </div>
                  <div className="col-md-2">
                    <div className='indicators'><b>4.0L-5.0L</b></div>
                  </div>
                  <div className="col-md-2">
                    <div className='indicators'><b>7.0L-10L</b></div>
                  </div>
                  <div className="col-md-2">
                    <div className='indicators'><b>10L+</b></div>
                  </div>
                  <div className="col-md-2">
                    <div className='indicators'><b>15L</b></div>
                  </div>
                </div>
                <div className="row">
                  <div className='col-md-12'>
                    <div class="d-grid gap-2">
                      <br />
                      <button class="btn btn-lg btn-primary" type="button" onClick={filters}>Apply</button>
                      <button type="button" class="btn btn-outline-primary" onClick={reset}>Reset</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>Photography</h1>
            </div>

            <div className="col-md-2">
              <input className="form-control me-sm-2 mob-width" value={search} onChange={e => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
              />
            </div>
            <div className="col-md-2">
              <button className="btn btn-primary mob-btn" type="submit" onClick={searchData}>
                Search
              </button>
            </div>
          </div>

          <div className="row">
            {data.map((curElem) => {
              const img = "venues/" + curElem.pid + ".jpg";
              const path = `${curElem.pname}`;
              // const { vid, vname, vlocation, vrating, vcategory, veg_price, non_price, rooms, guest_capacity } = curElem;
              return (
                
                  <div className="col-md-4" key={curElem.pid}>
                    <NavLink to={path} className="link">
                    <div className="card">
                      <div className="rating">{curElem.prating}</div>
                      <img src="images/pic1.jpg" className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{curElem.pname}</h5>
                        <p className="address">{curElem.plocation}</p>
                        <p className="type">{curElem.ptype}</p>
                        <p className='type'>{curElem.pprice}</p>
                      </div>
                    </div>
                    </NavLink>
                  </div>
              
              );
            })}
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
        /* Your existing styles and the added styles for the filter window */
        .link{
          text-decoration:none;
        }
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
    margin-bottom:20px;
    }
    .top-container btn-primary{
      margin-left:0px;
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
          background-color: #0056b3;
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
    .mob-width{
      width:200px;
      margin-bottom:20px;
    }
    .mob-btn{
      position:absolute;
      margin-left:-250px;
      margin-top:-59px;
      
      z-index:3;
    }
  }

 `;

export default Venues;