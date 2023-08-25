import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'
function  Pandits() {
  const pandits = [
    {
      id: 1,
      name: 'Pandit Ramesh Sharma',
      address: '123 Main St, City, Country',
      specialization: 'Vedic rituals and customs',
      contact: 'panditramesh@example.com',
      price: 10000,
    },
    {
      id: 2,
      name: 'Pandit Meena Patel',
      address: '456 First Ave, Town, Country',
      specialization: 'Inclusive approach to weddings',
      contact: 'panditmeena@example.com',
      price: 12000,
    },
    {
      id: 3,
      name: 'Pandit Sanjay Verma',
      address: '789 Lake Rd, Village, Country',
      specialization: 'Ancient scriptures and mantras',
      contact: 'panditsanjay@example.com',
      price: 15000,
    },
    // Add more Pandits here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pandits.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPandits = pandits.slice(startIndex, endIndex);

  // List of cities for the dropdown
  const cities = ['Mumbai', 'Bangalore', 'Delhi', 'Chennai', 'Ahmedabad'];

  return (
    <Wrapper>
      <div className="top-container btn-filters">
      <a className="btn btn-primary " data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>
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
          <label htmlFor="cityDropdown" className="form-label">Select City</label>
          <div className="dropdown" style={{ marginBottom: '15px' }} >
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
            <h1>Pandits</h1>
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
          {currentPandits.map((pandit) => (
            <div className="col-md-4" key={pandit.id}>
              <NavLink to="/Vendor" className="link">
              <div className="card">
                <img
                  src="images\download (1).jfif" // Replace with DJ image
                  className="card-img-top"
                  alt={pandit.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{pandit.name}</h5>
                  <p className="address">{pandit.address}</p>
                  <p className="type">{pandit.genre}</p>
                  <p className="price">Price: ₹{pandit.price} onwards</p>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="veg-price">{pandit.contact}</p>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
.pagin{
  margin-top:20px;
}
.link{
  text-decoration:none;
}
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
.top-container {
  padding-top: 80px;
  padding-bottom: 10px;
  // padding-left: 00px; /* Adjust this value according to your preference */
  padding-right: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
@media only screen and (max-width:768px){
  .card{
    margin-bottom:20px;
    margin-left:20px;
  }
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
  .btn-filters{
    padding-right:350px;
  }
}
  /* Add your other styling here */
`;

export default Pandits;
