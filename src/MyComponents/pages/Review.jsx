
import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const StarRatingSystem = () => {
  const { category,name } = useParams();
  var rcategory = category;
  var rfor = name;
  console.log(rcategory,rfor);
  const [data, setData] = useState([]);
  
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState("");
  const collectData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/review`, {
        method: 'post',
        body: JSON.stringify({ category,name }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      const responseData = await response.json(); // Parse the response JSON
      console.log(responseData);
      setData(responseData);
       // Debugging line
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [review, setReview] = useState([]);
  useEffect(() => {
    //  console.log("collecting data");
    collectData();




  }, []);
  
    console.log(content);

  var sum = 0;
  var count = 0;
  var arr = [];
  data.map((curElem) => {
    sum = sum + curElem.rstar;
    count++;
    arr = [...arr, curElem.rstar]
  })

  var avg = sum / count;
  avg = avg.toFixed(1);
  var star = [0, 0, 0, 0, 0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      star[0]++;
    }
    if (arr[i] == 2) {
      star[1]++;
    }
    if (arr[i] == 3) {
      star[2]++;
    }
    if (arr[i] == 4) {
      star[3]++;
    }
    if (arr[i] == 5) {
      star[4]++;
    }
  }
  var per1 = ((star[0] / arr.length) * 100).toFixed(0);
  var per2 = ((star[1] / arr.length) * 100).toFixed(0);
  var per3 = ((star[2] / arr.length) * 100).toFixed(0);
  var per4 = ((star[3] / arr.length) * 100).toFixed(0);
  var per5 = ((star[4] / arr.length) * 100).toFixed(0);
  console.log(`width:${per1}%`);
  
  // const rdate = cur_day + "/" + cur_month + "/" + cur_year;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  var rdate = dd + '/' + mm + '/' + yyyy;
  console.log(rdate);
  var items = localStorage.getItem("name");
  // console.log(items);
  const rname = items.slice(1,-1);
  console.log(rname);
  

  const sendReview = async () =>{
     var rstar = rating;
     count++;
     var average = ((sum + rstar)/count).toFixed(1);
     var rcontent = content;
    let result = await fetch('http://localhost:4000/addreview', {
        method: 'post',
        body: JSON.stringify({rname,rdate,rstar,rcontent,rcategory,rfor,average,category,name}),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(result);
    window.location.reload();
    // result = await result.json();
    // localStorage.setItem("items", JSON.stringify(result));
  
}
  return (
    <Wrapper>
      <div className="super">
        <div className="main-section">
          <div className="hedding-title">
            <h1>Star Rating System</h1>
          </div>
          <div className="rating-part">
            <div className="average-rating">
              <h2>{avg}</h2>
              {Array.apply(null, { length: avg }).map((e, i) => (
                <span className="busterCards" key={i}>
                  <i aria-hidden="true" className="fa fa-star"></i>
                  {e}
                </span>
              ))}

              <p>Average Rating</p>
            </div>
            <div className="loder-ratimg">
              <div className="progress"><ProgressBar progress={per5} /></div>
              <div className="progress"><ProgressBar progress={per4} /></div>
              <div className="progress"><ProgressBar progress={per3} /></div>
              <div className="progress"><ProgressBar progress={per2} /></div>
              <div className="progress"><ProgressBar progress={per1} /></div>
            </div>
            <div className="start-part">
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <span>{per5}%</span><br />
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <span>{per4}%</span><br />
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <span>{per3}%</span><br />
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <span>{per2}%</span><br />
              <i aria-hidden="true" className="fa fa-star"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <i aria-hidden="true" className="fa fa-star-o"></i>
              <span>{per1}%</span>
            </div>
            <div style={{ clear: 'both' }}></div>
          </div>
          <div className="write-review">
            <div className="row">
                <h3>Write a Review</h3>
              <div className='col-md-4'>
                <h4>{rating}</h4>
                <div className="star-rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onDoubleClick={() => {
                          setRating(0);
                          setHover(0);
                        }}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <span className="star ">&#9733;</span>
                      
                      </button>
                    );
                  })}
                </div>
              </div>
                <div className='col-md-8'>
                <textarea className="form-control" id="exampleTextarea" rows="3" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
                <button type="button" className="btn btn-primary cust-btn" onClick={sendReview}>Submit</button>
                </div>
            </div>
          </div>
          <div className="reviews">
            <br />
            <h1>Reviews</h1>
            <br />

          </div>


          {data.map((curElem) => {
            const img = '/venues/' + curElem.vid + '.jpg';
            return (
              <div className="comment-part" key={curElem.vid}>
                <div className="user-img-part">
                  <div className="user-img">
                    <img src="images/profile.png" alt="User" />
                  </div>
                  <div className="user-text">
                    <h5>{curElem.rdate}</h5>
                    <p>{curElem.rname}</p>
                    <span></span>
                  </div>
                  <div style={{ clear: 'both' }}></div>
                </div>
                <div className="comment">

                  <section>
                    {Array.apply(null, { length: curElem.rstar }).map((e, i) => (
                      <span className="busterCards" key={i}>
                        <i aria-hidden="true" className="fa fa-star"></i>
                        {e}
                      </span>
                    ))}
                  </section>

                  <p>{curElem.rcontent}</p>
                </div>
                <div style={{ clear: 'both' }}></div>
                <br />
              </div>

            );
          })}

        </div>
      </div>
    </Wrapper>
  );
};

const ProgressBar = ({ progress }) => {
  return (
    <div className="progress-inner" style={{ width: `${progress}%` }}></div>
  );
};
const Wrapper = styled.div`

.cust-btn{
  background-color:#e61041;
  border:none;
  float:right;
  margin-top:10px;
}
.super{
  padding-top:100px;
}
.star-rating{
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: #FF9529;
  }
  .off {
    color: #FDCC0D;
  }
  
}
.star{
  font-size:40px;

}
body{
    background:#00CED1;
    font-family: 'Barlow Semi Condensed', sans-serif;
    }
    .main-section{
    background:#FFFFFF;
    width:80%;
    margin:0 auto;
    padding: 10px;
    padding-top:20px;
    margin-bottom:30px;
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
    .progress{
    background:#F5F5F5;
    border-radius: 13px;
    height:18px;
    width:100%;
    padding:3px;
    margin:5px 0px 15px 0px;
    }
    .progress-inner{
      display: block;
      background: #e61041;
      height: 100%;
      border-radius: 9px;
    }
    .write-review{
      margin-top:20px;
      margin-left:50px;
      background-color:#f5f5f5;
      width:90%;
      height:fit-content;
      padding:30px;
      
      border-radius:10px;

      h4{
        margin-left:110px;
        margin-top:20px;
        font-size:40px;
      }
      h3{
        margin-left:35px;
      
      }
    }
    
    .loder-ratimg{
    display: inline-block;
    width:40%;
    }
    .start-part{
    float:right;
    width:30%;
    text-align: center;
    margin-top:-10px;
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
    .user-text h5,.user-text p{
    margin:0px 0px 5px 0px;
    }
    .user-text p{
    font-size: 20px;
    font-weight: bold;
    }
    .user-text h5,.user-text span{
    color:#B3B5B4;
    }
    .comment{
    width:68%;
    float:right;
    width:
    }


`



export default StarRatingSystem;
