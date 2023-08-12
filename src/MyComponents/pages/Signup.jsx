import { NavLink } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components'

const Signup = () => {
  return (
    <Wrapper>
    <div>
    <div class="signup-page">
      <div class="form">
        <div class="signup">
          <div class="signup-header">
            <h3>SIGNUP</h3>
          </div>
        </div>
        <form class="signup-form">
          <input type="text" placeholder="username"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="confirm password"/>
          <button>signup</button>
          <p class="message">Already have an account? <NavLink to="/Login"><a href="#">Login here</a></NavLink></p>
        </form>
      </div>
    </div>
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    
    .signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.signup-form {
    background: #FFFFFF;
    max-width: 360px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}

.signup h3 {
    color: #e61041;
    text-align:center; 
}

.signup-header p {
    color: #333;
    
}

.signup-form input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
}

.signup-form button {
    text-transform: uppercase;
    outline: 0;
    background-color: #e61041;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #fff;
    font-size: 14px;
    transition: background-color 0.3s ease;
    cursor: pointer;
}

.signup-form button:hover {
    background-color: #ab052b;
}

.message {
    margin: 15px 0 0;
    color: #555;
    font-size: 12px;
}

.message a {
    color:  #e61041;
    text-decoration: none;
} 
`;

export default Signup
