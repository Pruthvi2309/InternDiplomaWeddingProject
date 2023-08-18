
import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <Wrapper>
      <div className="about-us container">
        <div className="background-img"></div>
        <div className="about-wrapper row align-items-center">
          <div className="image-container col-md-6 text-right ">
            <img
              src="https://i.pinimg.com/564x/a9/72/0a/a9720ae02302e88a923fd1a7e915e5f3.jpg"
              alt="Our Journey"
            />
          </div>
          <div className="text-content col-md-6 bg-white text-dark p-4 rounded">
            <h2>About Us</h2>
            <p>Welcome to our wedding website! We are excited to share our journey with you.</p>
            <p>Our love story began...</p>
            <p>
              We met in college and instantly connected over our shared love for photography and
              adventure. Our journey has taken us to breathtaking landscapes and wonderful
              memories.
            </p>
            <p>As we embark on this new chapter, we invite you to be a part of our story...</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};



const Wrapper = styled.div`

  .about-us {
    height: 100px;
    display:flex;
    justify-content:center;
  }

  
  .about-wrapper {
    width: 90%;
    height: 100%;
  }
  
  .image-container {
    text-align: right;
    padding: 20px;
  }
  
  .image-container img {
    max-width: 100%;
    height: 320px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
  
  .text-content {
    padding: 20px;
    background-color: white;
    color: #333; /* Adjust the text color according to the background color */
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  
  .text-content h2 {
    font-size: 28px;
    margin-bottom: 10px;
    color:#e61041;
  }
  
  .text-content p {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 15px;
  }
  @media only screen and (max-width:768px){
    .image-container{
      width:400px;
      
    }
    .image-container img {
      max-width: 100%;
      height: 400px;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default AboutUs;
