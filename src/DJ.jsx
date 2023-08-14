import React, { useState } from 'react';
import styled from 'styled-components';

function DJs() {
  const djs = [
    {
      id: 1,
      name: 'DJ John Smith',
      address: '123 Main St, City, Country',
      genre: 'EDM',
      contact: 'djjohn@example.com',
      price: 10000,
    },
    {
      id: 2,
      name: 'DJ Lisa Johnson',
      address: '456 First Ave, Town, Country',
      genre: 'House',
      contact: 'djlisa@example.com',
      price: 12000,
    },
    {
      id: 3,
      name: 'DJ Max Williams',
      address: '789 Lake Rd, Village, Country',
      genre: 'Hip-Hop',
      contact: 'djmax@example.com',
      price: 15000,
    },
    // Add more DJs here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(djs.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDJs = djs.slice(startIndex, endIndex);

  // List of cities for the dropdown
  const cities = ['City 1', 'City 2', 'City 3', 'City 4', 'City 5'];

  return (
    <Wrapper>
      <a className="btn btn-primary btn-filters" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>

      <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div className="offcanvas-header">
          <h1 className="offcanvas-title" id="offcanvasExampleLabel">Filters</h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <fieldset className="form-group">
            <legend className="mt-4">Ranges</legend>
            <label htmlFor="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1" />
          </fieldset>
          <label htmlFor="cityDropdown" className="form-label">Select City</label>
          <div className="dropdown" style={{ marginBottom: '15px' }}>
            <select className="form-select" id="cityDropdown">
              {cities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h1>DJs</h1>
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
        <div className="row">
          {currentDJs.map((dj) => (
            <div className="col-md-4" key={dj.id}>
              <div className="card">
                <img
                  src="images\download (1).jfif" // Replace with DJ image
                  className="card-img-top"
                  alt={dj.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{dj.name}</h5>
                  <p className="address">{dj.address}</p>
                  <p className="type">{dj.genre}</p>
                  <p className="price">Price: ₹{dj.price} onwards</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="veg-price">{dj.contact}</p>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .btn-filters {
    padding: 10px 20px;
    margin: 20px; /* Adjust margin value as needed */
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
@media only screen and (max-width:768px){
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
}
  /* Add your other styling here */
`;

export default DJs;
