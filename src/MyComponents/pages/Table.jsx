import React from 'react'
// import img1 from './MyComponents/images/classic.jpeg'
// import img2 from './MyComponents/images/Rustic.jpg'
// import img3 from './MyComponents/images/mordern.jpg'
import styled from 'styled-components'
function Table() {
  return (
    <Wrapper>
  {/* <div className='tab'> */}
    <center>
    <div className="row ">
      <div className="col-md">
        <div className='card'>
      <button className='cancel btn' >X</button>
          <img src="images/classic.jpeg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Decoration</h5>
          <p className="address">Vendors to:-Wedding & Flowers Decor</p>
          <p className="type">Classic Wedding Theme</p>
          <div className="row">
            <div className='col-md-12'>
              <p className="price">₹2,00,000 </p>
          </div>
          </div>
                </div>
              </div>
            </div>
            </div>
            <div className="row ">
      <div className="col-md">
        <div className='card'>
      <button className='cancel btn' >X</button>
          <img src="images/Rustic.jpg"  className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Bridal Wear</h5>
          <p className="address">Vendors to:-Nayak Wed Clothes</p>
          <p className="type">Bridal Wedding wear </p>
          <div className="row">
            <div className='col-md-12'>
              <p className="price">₹50,000 </p>
          </div>
          </div>
                </div>
              </div>
            </div>
            </div>


            <div className="row">
      <div className="col-md">
        <div className='card'>
      <button className='cancel btn' >X</button>
          <img src="images/mordern.jpg"className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title"></h5>
          <p className="address">Vendors to:-Nayak Wed Clothes</p>
          <p className="type">Bridal Wedding wear </p>
          <div className="row">
            <div className='col-md-12'>
              <p className="price">₹50,000 </p>
          </div>
          </div>
                </div>
              </div>
            </div>
            </div>
        {/* <table className="table table-hover ">
  <thead >
    <tr>
    <th scope="col">Vendors type</th>
      <th scope="col">vendors Name</th>
      <th scope="col" className='tabl' >Price</th>
      <th scope="col">vendors Image</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Decor</th>
      <td>Wedding Decor & Flowers</td>
      <td className='tabl' >₹2,00,000</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row">Bridal wear</th>
      <td>Nayak Wed clothes</td>
      <td className='table' >₹50,000</td>
      <td><img src={img2} /></td>
    </tr>
    <tr>
      <th scope="row">pandit</th>
      <td>Column content</td>
      <td className='table' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row">Photography</th>
      <td>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row">makeup</th>
      <td>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row">Groom wear</th>
      <td>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row">Mehndi</th>
      <td>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >jewellery & Accessiories</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >Invites & Gifts</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >Music & Dance</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" > Food</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >Bridal & groom Spa</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >HoneyMoon Package</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
    <tr>
      <th scope="row" >Total</th>
      <td className='table1'>Column content</td>
      <td className='tabl' >Column content</td>
      <td><img src={img1} /></td>
    </tr>
  </tbody>
        </table> */}
        </center>
        </Wrapper>
      
    // </div>
   
  )
}
const Wrapper=styled.div`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.btn-primary{
  background-color:#e61041;
}
.btn-primary:hover{
  background-color:#c30733; 
}
.searchpart{
  margin-left:70px;
}
.cont1 ,.cont2 ,.cont3{
  width:100%;
 }
.cont1 .btn{
  border-radius:0px;
 }
.cont2 .btn{
   border-radius:0px;
 }
        .cont3 .btn{
          border-radius:0px;
 }
        .indicators{
          font-size:9px;
          padding:0px;
 }
        .indicator{
          font-size:8px;
        padding:0px;
  }
        .apply-btn{
          display:flex;
        justify-content:center;
        padding-top:25px;
  }
        .top-container {
          padding-top: 70px;
          padding-left: 40px;
          padding-bottom: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }



.card {
   margin-bottom: 20px;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
   width: 340px;
  }

        .rating {
          position: absolute;
        top: 10px;
        right: 10px;
        color: #fff;
        padding: 5px 10px;
        font-weight: bold;
        font-size: 16px;
  }

        .address {
          color: #555;
        font-size: 14px;
        margin-top: 5px;
  }

        .type {
          color: #555;
        font-size: 14px;
  }

        .non-veg-price,
        .veg-price {
          font-size: 12px;
        margin-top: 10px;
  }

        .non-veg-price {
          color: red;
  }

        .veg-price {
          color: green;
  }

        .capacity-box {
          background-color: #f1f1f1;
        padding: 8px;
        display: inline-block;
        margin-top: 10px;
        text-align: center;
  }

        .capacity,
        .rooms {
          color: #555;
        font-size: 12px;
        margin: 0;
        padding: 0;
  }

        .btn-container {
          padding: 10px;
  }

        .btn-primary {
          background-color: #007bff;
        color: #fff;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        margin-top:10px;
  }

        .btn-primary:hover {
          background-color: #0056b3;
  }
  .searchpart{
    padding-left:20px;
  }

        .filter-window {
          position: absolute;
        top: 55px;
        left: 0;
        background-color: #ffffff;
        border-top:1pt solid;
        border-color:black;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        z-index:4;
  }
        .filter-title{
          text-align:center;
  }
        .filter-content{
          font-size:14px; 
  }
        .check{
          display:flex;
        justify-content:center;

  }
  @media only screen and (max-width:768px){
    .Venuestitle{
        font-size:20px;
    }
  }

.cancel
{
  background-color:  #e61041;
  border-radius: 30%;
  padding: 2px;
display: inline;
position: absolute;
top: 10px;
right: 10px; ;

}
.cancel:hover{
  background-color: #c30733;
  color: white;
}
.price {
  color: #e61041;
  border: 2px solid   #e61041;

}
.price:hover{
background-color:  #e61041;
color: white;
}
.card{
  border: 2px solid #e61041;
  border-radius: 20%                   ;
}
.card-img-top{
  border-radius: 25%;
}
.navigation{
  background-color: #e61041;
  color:#ffffff;
}
.button{
  border-radius: 20px;
  background-color: #e61041;
  color: #f0f0f0;
}
.button:hover
{
  background-color: #c30733;
  color: #f0f0f0;
}
`
export default Table