import React, { useState  , useEffect} from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function WeddingPlanner() {
  const [data,setData]=useState([]);
  const [range,setRange] = useState(-1);
  const [drop,setDrop] = useState("");
  // const [radio,setRadio] = useState(-1);
  // const [check,setCheck] = useState([]);
  // const [budget,setBudget] = useState(-1);
  const [search,setSearch] = useState("");
  const range_arr = ["10000-25000","25000-50000","50000-75000","75000-90000","90000-115000","115000+"];
  const rating_arr = ["<3","3-4","4-4.5","4.5-4.8","4.8-5"];
  const budget_arr = ["<=25K","25K-50K","50K-1L","1L-2L","2L-5L","5L+"];
  const [selectedVenues, setSelectedVenues] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch('http://localhost:4000/weddingdecro', {
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
  
const options = [ "Navsari","Anand", "Mumbai","Vadodara","Nadiad",,"Bhavnagar","Surat","Rajkot"];

  const filters = () => {
    // Add your filter logic here
    console.log('Applying filters...');
    console.log('Range:', range);
    console.log('drop:', drop);
    // console.log('Selected Venues:', selectedVenues);
    // console.log('Budget:', budget);
    // console.log("sending data");
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
      
    // toggleVenue();
  },[]);

  // useEffect(() => {
  //   console.log('Selected Venues:', selectedVenues);
  //   setCheck(selectedVenues);
  // }, [selectedVenues]);

  
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
    '4 Star+ Hotels', 'Banquet Halls', 'FarmHouses', 
    'Hotel', 'Resort', 'Restaurant', 
    'Destination Wedding', 'Heritage Property'
  ];
  
  
  const sendData = async () => {
    try {
      const response = await fetch('http://localhost:4000/filter_weddingdecro', {
        method: 'post',
        body: JSON.stringify({ range, drop}),
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
      const response = await fetch('http://localhost:4000/weddingdecrosearch', {
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
      <div className='top-container'>
      <a className="btn btn-primary btn-filters" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>

      <div className="row">
        <div className="col-md-8 pad">
          <h1>Wedding Planners</h1>
        </div>
        <div className="col-md-2">
          <input
            className="form-control me-sm-2 mob-width"
            type="search"
            placeholder="Search"
            value={search} onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary mob-btn" type="submit" onClick={searchData}>
            Search
          </button>
        </div>
      </div>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <div className='row'>
                <div className='col-md-12'>
                  Select Price 
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <br />
                  <input type="range" className="form-range" min="0" max="5" step="1" id="customRange3" value={range} onChange={(e)=>setRange(e.target.value)} />
                </div>
              </div>
              <div className='row'>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>10000-25000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>25000-50000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicators'><b>50000-75000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>75000-90000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='oneline'><b>90000-115000</b></div>
                </div>
                <div className="col-md-2 indi-width">
                  <div className='indicator'><b>115000+</b></div>
                </div>
              </div>
              <div className='row'>
              <div className='col-md-12'>
                  Select City
                </div>
                <div className='col-md-12'>
                  <br />
                  <select
                     className="form-control width" 
                     id="country"
                     onChange={(e) => setDrop(e.target.value)}
                    defaultValue={drop}
                   >
                    {options.map((option, idx) => (
                     <option key={idx}>{option}</option>
                   ))}
                  </select>
                </div>
                </div>     
                <button className="btn btn-lg btn-primary" type="button" onClick={filters}>Apply</button>&nbsp;
                <button type="button" className="btn btn-outline-primary" onClick={reset}>Reset</button>
        </div>
      </div>
      </div>
      <br />
      <div className="container">
        <div className="row">
        {data.map((curElem) => {
              //  const img = "venues/"+curElem.vid + ".jpg";
            const path = `${curElem.dname}`;
               
                return (
            <div className="col-md-4" key={curElem.did}>
                <NavLink to={path} className="link">

              <div className="card">
                <img
                  src="images\download.jfif" 
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{curElem.dname}</h5>
                  <p className="address">{curElem.daddress}</p>
                  <p className="address">{curElem.dcity}</p>
                  <p className="type">{curElem.dservices}</p>
                  <p className="type">{curElem.dcontact}</p>
                  <p className="type">{curElem.dprice}</p>

                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="btn-container">
                        <a href="#" className="btn btn-primary">
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </NavLink>
            </div>
                            );
                          })}
            
          
        </div>
      {/* </div> */}
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
.link{
  text-decoration:none;
}
.top-container{
  padding-top: 60px;
  height:127px;
  // padding-left: 40px;
  margin-bottom: 80px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
  .btn-filters {
    padding: 10px 20px;
    margin: 20px;
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

  .indicators{
    font-size:9px;
    padding:0px;
}

  .pad {
    padding-left: 220px;
  }

  @media only screen and (max-width: 768px) {
    .mob-width {
      width: 200px;
      margin-bottom: 20px;
    }
    .mob-btn {
      position: absolute;
      margin-left: 210px;
      margin-top: -59px;
      z-index: 3;
    }
  }
`;

export default WeddingPlanner;
