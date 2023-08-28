import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';


function Booking_header() {
  const { vname, pname } = useParams();
  var category = vname;
  var name = pname;
  const [data, setData] = useState([]);
  const collectData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/vendor_details`, {
        method: 'post',
        body: JSON.stringify({ vname, pname }),
        headers: { 'Content-Type': 'application/json' },
      });

      const responseData = await response.json(); // Parse the response JSON
      setData(responseData);
      // Debugging line

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [review, setReview] = useState([]);

  const reviewData = async () => {
    try {
      const response = await fetch('http://localhost:4000/review', {
        method: 'post',
        body: JSON.stringify({ category, name }),
        headers: { 'Content-Type': 'application/json' },
      });

      const responseData = await response.json(); // Parse the response JSON
      console.log(responseData);
      setReview(responseData);
      // Debugging line

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    reviewData();
  }, []);

  useEffect(() => {
    collectData();
  }, []);
  return (
    <Wrapper>
      {data.map((curElem) => {
        var first_letter = vname[0].toLowerCase();
        return (
          <div className="container-fluid top-container" key={curElem[first_letter + "id"]}>
            <div className="row">
              <div className="col-md-12">
                <h1 className=" title">{curElem[first_letter + "name"]}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div id="carouselExampleCaptions" className="carousel slide">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="images/i1.jpg" className="d-block imgs curved" alt="..." />
                      <div className="carousel-caption d-none d-md-block content">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="images/i2.jpg" className="d-block imgs curved" alt="..." />
                      <div className="carousel-caption d-none d-md-block content">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img src="images/i3.jpg" className="d-block imgs curved" alt="..." />
                      <div className="carousel-caption d-none d-md-block content">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="description">
                  <h2>Description</h2>
                  <p>
                    {curElem[first_letter + "description"]}
                  </p>
                </div>
                <div className="rating-reviews">
                  <h3>Rating and Reviews</h3>
                  <div className="rating-info">
                    <div className="star-rating">
                      <h4>Average Rating: {curElem[first_letter + "rating"]}</h4>

                      {Array.apply(null, { length: curElem[first_letter + "rating"] }).map((e, i) => (
                        <span className="busterCards" key={i}>
                          <span className="star">&#9733;</span>
                          {e}
                        </span>
                      ))}
                    </div>
                   
                  </div>
                  <div className="user-review">

                    {review.slice(0, 2).map((curElem) => {
                      return (
                        <div className="container">
                          <div className="row" key={curElem.rid}>
                            <div className='col-md-3'>
                              <h6>{curElem.rname}</h6>

                            </div>
                            <div className="col-md-9 stars">
                              {Array.apply(null, { length: curElem.rstar }).map((e, i) => (
                                <span className="busterCards" key={i}>
                                  <span className="star">&#9733;</span>
                                  {e}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className='row'>
                             <div className='col-md-12'>
                              <p>
                                {curElem.rcontent}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    <div className="view-more-btn">
                      <NavLink to={`/Review/${vname}/${curElem[first_letter + "name"]}`}><button className="btn btn-primary">View more</button></NavLink>
                    </div>
                  </div>
                </div>
                <div className="action-buttons">
                  <div className="view-more-btn">
                    <button className="btn btn-primary">Request Booking</button>
                  </div>
                  <div className="add-to-package-btn">
                  <NavLink to={`/Packages/${category}/${curElem[first_letter + "name"]}`}><button className="btn btn-primary">Add to Package</button></NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
.stars{

}
.top-container{
  padding-top:80px;
  padding-bottom:80px;
}
.curved {
  border-radius: 20px;
}
.title {
  font-size: 36px;
  color: #e61041;
  font-weight: bold;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
}
.p {
  font-size: 18px;
  padding: 10px;
  text-align: justify;
}

.pad-right {
  padding-right: 400px;
  text-align: justify;
}

.pad-top {
  padding-top: 30px;
}

h1.text-center {
  font-size: 28px;
  color: #333;
  font-weight: bold;
  margin-bottom: 20px;
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  border-radius: 10px;
}

.carousel-caption h5 {
  font-size: 20px;
  color: #fff;
}

.carousel-caption p {
  font-size: 16px;
  color: #fff;
}

h3 {
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}

.col-md-4 h4 {
  font-size: 18px;
  color: #333;
}

.col-md-4 h4:last-child {
  margin-top: 10px;
}

.col-md-4 button {
  font-size: 14px;
}

h6 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

/* Add styles for the "View more" and "Add to Package" buttons here */
.btn-primary {
  font-size: 16px;
  padding: 10px 20px;
  margin-right: 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-primary:disabled,
.btn-primary[disabled] {
  /* Add styles for the disabled "Add Review" button */
  opacity: 0.5;
  cursor: not-allowed;
}
.description {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.description h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.description p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

.rating-reviews {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.rating-reviews h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

.rating-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.star-rating h4 {
  font-size: 18px;
  color: #333;
  margin-right: 10px;
}

.star {
  color: #f8d64e;
  font-size: 20px;
}

.user-review {
  margin-bottom: 20px;
}

.user-review h6 {
  font-size: 18px;
  color: #333;
}

.user-review p {
  font-size: 16px;
  color: #555;
}

.view-more-btn,
.add-to-package-btn {
  margin-right: 10px;
}

.action-buttons {
  display: flex;
  align-items: center;
}

.title {
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  color: #e61041;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease-in-out;
  /* Add a subtle shadow effect */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.imgs{
  width:720px;
  height:550px;
}
@media screen and (max-width:768px){
  .imgs{
      width:350px;
      height:350px;
  }
}
`
export default Booking_header;
