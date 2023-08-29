import React, { useState } from 'react';
import styled from 'styled-components';

function WeddingPlanner() {
  const [budget, setBudget]=useState(-1); 
  const planners = [
    {
      id: 1,
      name: 'Wedding Planner Emily White',
      address: '123 Main St, City, Country',
      services: 'Full Wedding Planning',
      contact: 'planneremily@example.com',
      price: 20000,
    },
    {
      id: 2,
      name: 'Wedding Planner Alex Brown',
      address: '456 First Ave, Town, Country',
      services: 'Partial Wedding Planning',
      contact: 'planneralex@example.com',
      price: 15000,
    },
    {
      id: 3,
      name: 'Wedding Planner Sofia Martinez',
      address: '789 Lake Rd, Village, Country',
      services: 'Day-of Coordination',
      contact: 'plannersofia@example.com',
      price: 8000,
    },
    // Add more wedding planners here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(planners.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlanners = planners.slice(startIndex, endIndex);

  const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];
  const serviceTypes = ['Full Planning', 'Partial Planning', 'Day-of Coordination', 'Destination Wedding']; // Add more if needed

  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const filteredPlanners = selectedCity
    ? planners.filter((planner) => planner.address.includes(selectedCity))
    : currentPlanners;

  return (
    <Wrapper>
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
          />
        </div>
        <div className="col-md-2">
          <button className="btn btn-primary mob-btn" type="submit">
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
          <div className="form-group mb-3">
            <label htmlFor="citySelect" className="form-label">Select City</label>
            <select className="form-select" id="citySelect" value={selectedCity} onChange={handleCityChange}>
              <option value="">All Cities</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Other filters */}
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
          
          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row">
          {filteredPlanners.map((planner) => (
            <div className="col-md-4" key={planner.id}>
              <div className="card">
                <img
                  src="images\7.jpg" // Replace with planner image
                  className="card-img-top"
                  alt={planner.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{planner.name}</h5>
                  <p className="address">{planner.address}</p>
                  <p className="type">{planner.services}</p>
                  <p className="price">Price: ₹{planner.price} onwards</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="veg-price">{planner.contact}</p>
                    </div>
                  </div>
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
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 pagin">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handlePrevPage}>
                  &laquo;
                </button>
              </li>
              <li className="page-item">
                <button className="page-link">{currentPage}</button>
              </li>
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <button className="page-link" onClick={handleNextPage}>
                  &raquo;
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
