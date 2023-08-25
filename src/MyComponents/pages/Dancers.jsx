import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

function Dancers() {
  const dancers = [
    {
      id: 1,
      name: 'Dancer Emily White',
      address: '123 Main St, City, Country',
      style: 'Contemporary',
      contact: 'danceremily@example.com',
      price: 8000,
    },
    {
      id: 2,
      name: 'Dancer Alex Brown',
      address: '456 First Ave, Town, Country',
      style: 'Hip-Hop',
      contact: 'danceralex@example.com',
      price: 10000,
    },
    {
      id: 3,
      name: 'Dancer Sofia Martinez',
      address: '789 Lake Rd, Village, Country',
      style: 'Ballet',
      contact: 'dancersofia@example.com',
      price: 12000,
    },
    // Add more dancers here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(dancers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDancers = dancers.slice(startIndex, endIndex);

  const cities = ['Mumbai', 'Delhi', 'Chennai', 'Chennai', 'Ahmedabad'];
  const danceTypes = ['Indian Classical', 'Hip Hop', 'Contemporary', 'Ballet']; // Add more if needed

  return (
    <Wrapper>
      <a className="btn btn-primary btn-filters" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>

      <div className="row">
          <div className="col-md-8 pad">
            <h1>Dancers</h1>
          </div>
          <div className="col-md-2">
            <input
              className="form-control me-sm-2 mob-width "
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
          <fieldset className="form-group">
            <legend className="mt-4">Ranges</legend>
            <label htmlFor="customRange1" className="form-label">Example range</label>
            <input type="range" className="form-range" id="customRange1" />
          </fieldset>

          <fieldset className="form-group">
            <legend className="mt-4">Dance Types</legend>
            {danceTypes.map((danceType, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" value="" id={`danceTypeCheck${index}`} />
                <label className="form-check-label" htmlFor={`danceTypeCheck${index}`}>
                  {danceType}
                </label>
              </div>
            ))}
          </fieldset>

          <div className="form-group mb-3">
            <label htmlFor="citySelect" className="form-label">Select City</label>
            <select className="form-select" id="citySelect">
              {cities.map((city, index) => (
                <option key={index}>{city}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-2">Submit</button>
        </div>
      </div>

      <br />
      <div className="container">
        <div className="row">
          {currentDancers.map((dancer) => (
            <div className="col-md-4" key={dancer.id}>
              <NavLink to="/Vendor" className="link">
              <div className="card">
                <img
                  src="images\download (3).jfif" // Replace with dancer image
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">{dancer.name}</h5>
                  <p className="address">{dancer.address}</p>
                  <p className="type">{dancer.style}</p>
                  <p className="price">Price: ₹{dancer.price} onwards</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="veg-price">{dancer.contact}</p>
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
              </NavLink>
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
.link{
  text-decoration:none;
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
.pad{
  padding-left:220px;
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
}cd
  `;
export default Dancers;

