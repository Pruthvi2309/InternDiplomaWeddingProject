import React from 'react';
import styled from 'styled-components';
const StarRatingSystem = () => {
  return (
    <Wrapper>
    <div className="main-section">
      <div className="hedding-title">
        <h1>Star Rating System</h1>
      </div>
      <div className="rating-part">
        <div className="average-rating">
          <h2>2.5</h2>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i className="fa fa-star-half-o" aria-hidden="true"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <p>Average Rating</p>
        </div>
        <div className="loder-ratimg">
          <div className="progress"></div>
          <div className="progress-2"></div>
          <div className="progress-3"></div>
          <div className="progress-4"></div>
          <div className="progress-5"></div>
        </div>
        <div className="start-part">
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <span>80%</span><br />
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <span>60%</span><br />
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <span>40%</span><br />
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <span>20%</span><br />
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <span>10%</span>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
      <div className="reviews">
        <h1>Reviews</h1>
      </div>
      <div className="comment-part">
        <div className="user-img-part">
          <div className="user-img">
            <img src="/demo/man01.png" alt="User" />
          </div>
          <div className="user-text">
            <h4>8 days ago</h4>
            <p>Tom kok</p>
            <span>Report</span>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className="comment">
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.</p>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
      <div className="comment-part">
        <div className="user-img-part">
          <div className="user-img">
            <img src="/demo/man02.png" alt="User" />
          </div>
          <div className="user-text">
            <h4>30 days ago</h4>
            <p>Win Rool</p>
            <span>Report</span>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className="comment">
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.</p>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
      <div className="comment-part">
        <div className="user-img-part">
          <div className="user-img">
            <img src="/demo/man03.png" alt="User" />
          </div>
          <div className="user-text">
            <h4>1 days ago</h4>
            <p>Jui Choal</p>
            <span>Report</span>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className="comment">
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.</p>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
      <div className="comment-part">
        <div className="user-img-part">
          <div className="user-img">
            <img src="/demo/man04.png" alt="User" />
          </div>
          <div className="user-text">
            <h4>24 days ago</h4>
            <p>Jack Mins</p>
            <span>Report</span>
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>
        <div className="comment">
          <i aria-hidden="true" className="fa fa-star"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <i aria-hidden="true" className="fa fa-star-o"></i>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco.</p>
        </div>
        <div style={{ clear: 'both' }}></div>
      </div>
    </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

body{
    background:#00CED1;
    font-family: 'Barlow Semi Condensed', sans-serif;
    }
    .main-section{
    background:#FFFFFF;
    width:80%;
    margin: 0 auto;
    padding: 10px;
    margin-top:50px;
    box-shadow:0px 2px 7px 1px #aa9191;
    }
    .hedding-title h1{
    margin:0px;
    padding:0px 0px 10px 0px;
    font-size:25px;
    }
    .average-rating{
    float:left;
    text-align: center;
    width:30%;
    }
    .average-rating h2{
    margin:0px;
    font-size:80px;
    }
    .average-rating p{
    margin:0px;
    font-size:20px;
    }
    .fa-star,.fa-star-o,.fa-star-half-o{
    color:#FDC91B;
    font-size:25px !important;
    }
    .progress,.progress-2,.progress-3,.progress-4,.progress-5{
    background:#F5F5F5;
    border-radius: 13px;
    height:18px;
    width:97%;
    padding:3px;
    margin:5px 0px 3px 0px;
    }
    .progress:after,.progress-2:after,.progress-3:after,.progress-4:after,.progress-5:after{
    content: '';
    display: block;
    background: #e61041;
    width:80%;
    height: 100%;
    border-radius: 9px;
    }
    .progress-2:after{
    width: 60%;
    }
    .progress-3:after{
    width:40%;
    }
    .progress-4:after{
    width:20%;
    }
    .progress-5:after{
    width:10%;
    }
    .loder-ratimg{
    display: inline-block;
    width:40%;
    }
    .start-part{
    float:right;
    width:30%;
    text-align: center;
    }
    .start-part span{
    color:#337AB7;
    font-size:23px;
    }
    .reviews h1{
    margin:10px 0px 20px 30px;
    }
    .user-img img{
    height: 80px;
    width: 80px;
    border:1px solid blue;
    border-radius: 50%;
    }
    .user-img-part{
    width:30%;
    float:left;
    }
    .user-img{
    width:48%;
    float:left;
    text-align: center;
    }
    .user-text{
    float:left;
    }
    .user-text h4,.user-text p{
    margin:0px 0px 5px 0px;
    }
    .user-text p{
    font-size: 20px;
    font-weight: bold;
    }
    .user-text h4,.user-text span{
    color:#B3B5B4;
    }
    .comment{
    width:68%;
    float:right;
    width:
    }


`



export default StarRatingSystem;
