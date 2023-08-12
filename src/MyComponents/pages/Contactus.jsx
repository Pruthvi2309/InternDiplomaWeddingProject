import React from 'react';
import styled from 'styled-components';


const ContactUs = () => {
  return (
    <Wrapper>
      <div className='map1'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.4677652000814!2d72.92061917448001!3d22.561601933374856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f536f5d68db%3A0x717301ed283599e6!2sInnoBrain%20Technologies!5e0!3m2!1sen!2sin!4v1690974510848!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> 
      </div>
      
      <div className="contact-bg"></div>
      <div className="container mt-5 contact-container">
        <h1 className="mb-4">Contact Us</h1>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" id="message" rows="6" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className='col-md-6'>
            <img className='IMG' src="images\contactusimg.jpg"></img>
          </div>
        <div className='row contents'>
          <div className="col-md-12">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <p>
                <strong>Address:</strong> 123 Main Street, City, State 12345
              </p>
              <p>
                <strong>Phone:</strong> +919664556901
              </p>
              <p>
                <strong>Email:</strong> abcd123@gmail.com
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
      
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* Custom styles here */
  .map1{
    // width: 100%;
    height: 300px;
    margin-bottom: 0px;
    padding-top:60px;
    overflow: hidden;
  }


  .container {
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    top :-150px;
    background-color:white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1;
    border-radius: 15px;
    padding: 30px;S
    margin-top: -40px; /* Overlap the image by 40px */
  }
  
  h1 {
    text-align: center;
    font-size: 3rem;
    color: #333;
    margin-bottom: 40px;
  }

  form {
    padding: 20px;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    color: #555;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    
  }

  textarea {
    resize: vertical;
  }

  button[type="submit"] {
    width: 100%;
    padding: 15px;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
  }

  button[type="submit"]:hover {

  }
  .IMG{
    position absolute;
    top: 20px;
    height: 300px;
    width:380px;
    border-radius: 20px;
  }

  .contact-info {
    text-align: center;
    position:absolute;
    bottom: 50px;
    right:50px;
    
  }
  @media only screen and (max-width:768px){
   .map1{
    width:420px;
    padding-top:75px;
   }
   .contents{
    margin-top:200px;
   }
  .IMG{
      padding-right:10px;
   }
   .contact-container{
    margin-bottom:-130px;
   }
  }

`;



export default ContactUs;
