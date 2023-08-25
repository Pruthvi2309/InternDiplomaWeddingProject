
import React from 'react';
import styled from 'styled-components';

function AboutUs() {
  return (
    <Wrapper>
     <div className="super">
      <div className="BackgroundImageWrapper crop">
        <img src="images/about.png" className="img1"/>
      </div>
      <div className="ContentContainer">
        <div className="ContentBox">
          <h2 className="heading">About Us</h2>
          <div className="Description">
            <p>
              Welcome to Wedpro, your one-stop destination for creating magical wedding experiences. We are dedicated to making your special day extraordinary, from the proposal to the reception.
            </p>
            <p>
              With a team of passionate wedding planners and creatives, we strive to bring your dream wedding to life. From intimate elopements to grand celebrations, we have the expertise to curate every detail to perfection.
            </p>
            <p>
              Let us be a part of your journey, turning your love story into an enchanting celebration that will be cherished forever.
            </p>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
.super{
  position: relative;
  height: 100vh;
  padding-top:50px;
  overflow: hidden;
}


.BackgroundImageWrapper{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-top:60px;
  z-index: -1;
}  
.img1{
  width: 100%;
  height:100%;
  // object-fit: cover;
}
  
.ContentContainer{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  
}
.ContentBox{
  width: 60%;
  height: 70%;
  padding: 40px;
  background-color: rgba(255, 255, 255,0.5);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
} 
.heading{
  text-align: center;
  font-size: 45px;
  color: #e61041;
  margin-bottom: 20px;
}
.Description{
  text-align: center;
  color: #333;
  font-size: 22px;
  line-height: 1.6;
}
@media only screen and (max-width: 768px){
     .Description{
        font-size: 16px;
     }
     .heading{
        font-size: 30px;
     }
     .ContentBox{
      width: 90%;
      height:450px;
      padding: 20px;
      background-color: rgba(255, 255, 255);
    }
    .ContentContainer{
      margin-top:50px;
      padding-top:550px;
      height:300px;
      padding-bottom:600px;

    }
    .BackgroundImageWrapper{
        background-size: cover;
        background-position: center;
    }
    .crop{
      content:url(images/about_crop.png);
      width:100%;
      height:400px;
    }
    // .img1{
    //   width: 100%;
    //   height: 100%;
    //   object-fit: cover;
    //   float: right;
    //   // background-size: cover;
    //   // background-position: center;
    // }
    //   width: 100%;
    //   height: 100%;
    //   background-size: cover;
    //   // background-position: center;
    // }
  
  }
`;

export default AboutUs;
