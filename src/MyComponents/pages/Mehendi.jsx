import React, { useState } from 'react';
import styled from 'styled-components';

function MehndiArtists() {
  const mehndiArtists = [
    {
      id: 1,
      name: 'Mehndi Artist Reena Khan',
      address: '123 Main St, City, Country',
      specialization: 'Traditional Indian Mehndi',
      contact: 'reenakhan@example.com',
      price: 8000,
    },
    {
      id: 2,
      name: 'Mehndi Artist Sameera Ahmed',
      address: '456 First Ave, Town, Country',
      specialization: 'Arabic Mehndi Designs',
      contact: 'sameeraahmed@example.com',
      price: 10000,
    },
    {
      id: 3,
      name: 'Mehndi Artist Zoya Kapoor',
      address: '789 Lake Rd, Village, Country',
      specialization: 'Contemporary Mehndi Art',
      contact: 'zoyakapoor@example.com',
      price: 12000,
    },
    // Add more Mehndi Artists here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(mehndiArtists.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMehndiArtists = mehndiArtists.slice(startIndex, endIndex);
  const cities = ['Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'Ahmedabad'];
  return (
   
   <Wrapper>
      {/* Offcanvas filters */}
      <div className="top-container btn-filters">

      <button
        className="btn btn-primary "
        data-bs-toggle="offcanvas"
        href="#offcanvasExample"
        role="button"
        aria-controls="offcanvasExample"
      >
        Filters
      </button>
      </div>
      <div className="row">
          <div className="col-md-8 pad">
            <h1>Mehendi Artists</h1>
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
          <fieldset className="form-group">
            <legend className="mt-4">Price Range</legend>
            <label htmlFor="customRange1" className="form-label">Select Price Range</label>
            <input type="range" className="form-range" id="customRange1" min="0" max="20000" step="1000" />
          </fieldset>
          <div className="form-group">
            <label htmlFor="citySelect">Select City</label>
            <select className="form-select" id="citySelect">  
              {/* ... (city options) */
                cities.map((city, index) => (
                  <option key={index}>{city}</option>
              ))
              }
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3 mb-3">Apply</button> {/* Added mb-3 for bottom margin */}
        </div>
      </div>

      {/* Artists */}
      <div className="container">
        <div className="row">
          {currentMehndiArtists.map((artist) => (
            <div className="col-md-4" key={artist.id}>
              <div className="card">
                <img
                  src="images\download (2).jfif" // Replace with the artist's image URL
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{artist.name}</h5>
                  <p className="address">{artist.address}</p>
                  <p className="type">{artist.specialization}</p>
                  <p className="price">Price: ₹{artist.price} onwards</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="veg-price">{artist.contact}</p>
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

      {/* Pagination */}
      <div className="row">
        <div className="col-md-12 pagin">
          {/* ... (pagination code) */}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
  

.btn-filters {
    padding: 10px 20px;
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
  padding-left:125px;
}
  /* Add your other styling here */
  .top-container {
    padding-top: 80px;
    margin-bottom: 20px;
    // padding-left: 00px; /* Adjust this value according to your preference */
    padding-right: 1000px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

export default MehndiArtists;
