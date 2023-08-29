import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function jwellery() {

  const [data,setData]=useState([]);
  const [rating,setRating] = useState(-1);
  // const [radio,setRadio] = useState(-1);
  const [ check,setCheck] = useState([]);
  const [budget,setBudget] = useState(-1);
  const [search,setSearch] = useState("");
  const range_arr = ["<100","100-250","250-500","500-1000","1000-2000","2000+"];
  const rating_arr = ["<3","3-4","4-4.5","4.5-4.8","4.8-5"];
  const budget_arr = ["<=25K","25K-50K","50K-1L","1L-2L","2L-5L","5L+"];
  const [selectedVenues, setSelectedVenues] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/jewellery', {
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
    console.log('Selected Venues:', selectedVenues);
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
  useEffect(()=>{ 
      console.log("collecting data");
      collectData();
      
    toggleVenue();
  },[]);

  useEffect(() => {
    console.log('Selected Venues:', selectedVenues);
    setCheck(selectedVenues);
  }, [selectedVenues]);

  
  const toggleVenue = (venue) => {
    setSelectedVenues(prevSelectedVenues => {
      if (prevSelectedVenues.includes(venue)) {
        return prevSelectedVenues.filter(v => v !== venue);
      } else {
        return [...prevSelectedVenues, venue];
      }
      
    });
    //  console.log(selectedVenues);
  }

  const venueTypes = [
    'Gold', 'Silver', 'Diamond',
  ];
  
  
  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:4000/jwelleryfilter', {
        method: 'post',
        body: JSON.stringify({ rating, budget, check}),
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
      const response = await fetch('http://localhost:4000/searchjwell', {
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
                <div className="col-md-12">
                  <br/>
                  Rating
                </div>
                <center>
                <div className="row">
                
                  <div className='col-md-12'>
                  <br/>
                  
                          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={()=>setRating(0)}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio1">&lt;3</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={()=>setRating(1)}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio2">3 - 4</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={()=>setRating(2)}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio3">4 - 4.5</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off" onClick={()=>setRating(3)}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio4">4.5 - 4.8</label>
                            <input type="radio" className="btn-check" name="btnradio" id="btnradio5" autoComplete="off" onClick={()=>setRating(4)}/>
                            <label className="btn btn-outline-primary" htmlFor="btnradio5">4.8 - 5</label>
                          </div>
                          
                      </div>
                      
                    </div>
                    </center>
                    <div className="row">
                      <div className='col-md-12'>
                          <br/>
                          Jwellery Type
                      </div>
                    </div>
                    <center>
                    {/* <div className="row">
                      <div className='col-md-12'>
                      <br/>
                      <div className="btn-group cont1" role="group" aria-label="Basic checkbox toggle button group">
                          <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck1">Gold</label>
                          <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck2">Silver</label>
                          <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>
                          <label className="btn btn-primary" htmlFor="btncheck3">Diamond</label>
                        </div>
                      </div>
                    </div>
                    */}


<div className='row'>
    {venueTypes.map((venue, index) => (
      <div className='col-md-4' key={index + 1}>
        <br />
        <input
  type='checkbox'
  className='btn-check'
  id={`btncheck${index}`}
  autoComplete='off'
  onClick={() => {
    toggleVenue(venue);
  }}
/>         

        <label className='btn btn-primary' htmlFor={`btncheck${index}`}>
          {venue}
        </label>
      </div>
    ))}
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
                          <input type="range" class="form-range" min="0" max="5" step="1" id="customRange3" />
                      </div>
                    </div>
                    <div className='row'>
                      <div className="col-md-2">
                        <div className='indicators'><b>&lt;=2.5LK</b></div>
                      </div>
                      <div className="col-md-2 ">
                        <div className='indicators'><b>2.5K-3.0L</b></div>
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
                      <div className="d-grid gap-2">
                        <br/>
                        <button className="btn btn-lg btn-primary" type="button" onClick={filters}>Apply</button>
                        <button type="button" className="btn btn-outline-primary" onClick={reset}>Reset</button>
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
                  <h1>Jwellery</h1>
                </div>
                <div className="col-md-2">
                  <input className="htmlForm-control me-sm-2" type="search" placeholder="Search" value={search} onChange={e=>setSearch(e.target.value)} />
                </div>
                <div className="col-md-2">
                  <button className="btn btn-info my-2 my-sm-0" type="submit" onClick={searchData}>
                    Search
                  </button>
                </div>
              </div>
              <div className="row">
              {data.map((curElem) => {
               const img = "venues/"+curElem.vid + ".jpg";
               const path = `${curElem.jname}`;
                // const { vid, vname, vlocation, vrating, vcategory, veg_price, non_price, rooms, guest_capacity } = curElem;
                return (
                <div className="col-md-4" key={curElem.jid}>
                   <NavLink to={path} className="link">
                  <div className='card'>
                    <div className="rating">{curElem.jrating}</div>
                    <img src="images/j2.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{curElem.jname}</h5>
                     
                      <div className="row">
                        <div className='col-md-6'>
                          <p className="jname">{curElem.jprice}</p>
                        </div>
                      
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                         
                        </div>
                        <div className='col-md-6'>
                          <div className='btn-container'>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </NavLink>
                </div>
                );})}
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
          </div>
        </Wrapper >
        );
}

        const Wrapper = styled.div`
        .link{
          text-decoration:none;
        }
        /* Your existing styles and the added styles htmlFor the filter window */
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
        padding-right: 54rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  // h1{
  //   margin-left: -32rem;
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
        color: #e61041;
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
 
.page-item.active .page-link,
.page-item .page-link:hover {
  background-color: #e61041;
  border-color: #e61041;
  color: #fff;
}

.btn-info {
    background-color: #e61041;
    border-color: #e61041;
    color: #fff;
  }
  
  /* Style for the search button on hover */
  .btn-info:hover {
    background-color: #c50033;
    border-color: #c50033;
  }


        `;

        export default jwellery;