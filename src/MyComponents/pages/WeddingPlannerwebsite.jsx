import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Wrapper>
      <div className="container-fluid hero-section">
        <img src='./images/5.jpg' alt="Wedding" className='content' />
        <p className="hero-text">Wedding.com</p>
      </div>
      <div className="container about-section">
        <div className="row">
          <div className="col-md-6">
            <img src="./images/5.jpg" alt="Description" className='img1' />
          </div>

          <div className="col-md-6">
            <div className="description">
              <h2>About Us</h2>
              <p>Welcome to our wedding planner website! At [Our Wedding Planner Name], we turn dreams into cherished realities. Our mission is crafting unforgettable weddings, filled with love and joy. With years of experience, our passionate team delivers exceptional service tailored to your preferences. From intimate gatherings to grand celebrations, we make your special day uniquely you.

                Planning a wedding can be overwhelming, so we shoulder the responsibilities, leaving you free to savor every moment. Whether you dream of a romantic beach wedding, a rustic countryside affair, or a luxurious city celebration, we make it happen flawlessly.

                Attention to detail and commitment to perfection ensure no aspect is overlooked. From selecting the perfect venue to curating an exquisite menu, we handle it all with precision and care.

                But it's more than logistics; we infuse your personalities into every element. Let us be your trusted partner in bringing your dream wedding to life. Together, we'll create an experience that speaks to your love story and leaves a lasting impression.

                Your happily ever after starts here. Contact us today and let's begin this exciting adventure together!</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .hero-section {
    position: relative;
  }

  .content {
    width: 100%;
    height: 800px;
    object-fit: cover;
  }

  .hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 60px;
    font-family: 'Arial', sans-serif;
    color: #ffffff;
    background-color: #ff6b6b;
    padding: 15px 40px;
    border-radius: 30px;
  }

  .about-section {
    padding: 40px 0;
    background-color: #f9f9f9;
  }

  .aboutus {
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-size: 40px;
    color: #333333;
    margin-top: 40px;
  }

  .description {
    font-size: 18px;
    font-family: 'Montserrat', sans-serif;
    color: #444444;
    margin-top: 20px;
    line-height: 1.6;
  }

  .img1 {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    .hero-text {
      font-size: 40px;
      padding: 10px 30px;
      border-radius: 20px;
    }
    .aboutus {
      font-size: 30px;
    }
    .description {
      font-size: 16px;
    }
  }

  @media (max-width: 576px) {
    .hero-text {
      font-size: 30px;
      padding: 5px 20px;
      border-radius: 15px;
    }
    .aboutus {
      font-size: 24px;
    }
    .description {
      font-size: 14px;
    }
  }
`

export default Home;
