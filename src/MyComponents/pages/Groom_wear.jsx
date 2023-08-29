import React, { useState } from 'react';
import styled from 'styled-components';

function GroomWearPage() {
  const [budget, setBudget]=useState(-1);
  const groomWearItems = [
    {
      id: 1,
      name: 'Classic Tuxedo',
      description: 'A black tuxedo with a satin lapel.',
      type: 'Tuxedo',
      price: 5000,
    },
    {
      id: 2,
      name: 'Modern Suit',
      description: 'A slim-fit charcoal suit with a modern design.',
      type: 'Suit',
      price: 3500,
    },
    {
      id: 3,
      name: 'Traditional Sherwani',
      description: 'An elegant sherwani with intricate embroidery.',
      type: 'Sherwani',
      price: 7000,
    },
    // Add more groom wear items here...
  ];

  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(groomWearItems.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentGroomWearItems = groomWearItems.slice(startIndex, endIndex);

  const types = ['Tuxedo', 'Suit', 'Sherwani', 'Kurta']; // Add more if needed
  
  

  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredGroomWearItems = selectedType
    ? groomWearItems.filter((item) => item.type === selectedType)
    : currentGroomWearItems;

  return (
    <Wrapper>
      <a className="btn btn-primary btn-filters" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Filters
      </a>

      <div className="row">
        <div className="col-md-8 pad">
          <h1>Groom Wear Collection</h1>
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
            <label htmlFor="typeSelect" className="form-label">Select Type</label>
            <select className="form-select" id="typeSelect" value={selectedType} onChange={handleTypeChange}>
              <option value="">All Types</option>
              {types.map((type, index) => (
                <option key={index} value={type}>
                  {type}
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
          {filteredGroomWearItems.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card">
                <img
                  src="images\6.jpg" // Replace with groom wear item image
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="description">{item.description}</p>
                  <p className="type">Type: {item.type}</p>
                  <p className="price">Price: ₹{item.price}</p>
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

  .pad {
    padding-left: 220px;
  }

  .indicators{
    font-size:9px;
    padding:0px;
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

export default GroomWearPage;
