import { NavLink } from 'react-router-dom'
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* Add any additional global styles you need */
    
  .vendors-container {
    margin-top:0px;
  }

  .vendor-card {
    width: 100%;
    background-color: #f6f6f6;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    margin-bottom:40px;
  }

  .vendor-card:hover {
    transform: translateY(-5px);
  }

  .vendor-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .vendor-content {
    padding: 20px;
  }

  .vendor-title {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #e61041;
  }

  .vendor-description {
    color: #777;
    margin-bottom: 15px;
  }

  .vendor-services {
    color: #999;
  }

  .vendor-services ul {
    padding-left: 0;
    margin-top: 15px;
  }

  .vendor-services li {
    font-size: 0.9rem;
    margin-bottom: 5px;
    position: relative;
    padding-left: 20px;
  }

  .vendor-services li::before {
    position: absolute;
    left: 0;
    color: #e61041;
  }
  .title{
    color:#e61041;
    font-family:montserrat semibold;
    margin-top:100px;
  }
  .link{
    text-decoration:none;
  }
`;

function Vendors() {
  return (
    <Wrapper>
      

      <div className="container vendors-container">
        
      
        {/* Vendor 1 */}
        <div className="row">
        <h1 className="text-center mb-4 title">Vendors</h1> 
          <div className="col-md-4">
          <NavLink to="/Photography" className="link">
            <div className="vendor-card">
              <img
                src="images/photographer.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Photography</h2>
                <p className="vendor-description">
                  Capturing moments that last a lifetime. Our photography is a blend of creativity and artistry.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Wedding Photography</li>
                    <li>Portrait Sessions</li>
                    <li>Event Coverage</li>
                    <li>Photo Albums</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>

          </div>
          <div className="col-md-4">
            <div className="vendor-card">
              <img
                src="images/BridalWear.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Bridal Wear</h2>
                <p className="vendor-description">
                  Elegance personified. Discover our stunning collection of bridal wear that defines grace.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Bridal Lehengas</li>
                    <li>Jewellery</li>
                    <li>Cocktail Gowns</li>
                    <li>Custom Tailoring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
          <NavLink to="/Jewellery" className="link"><div className="vendor-card">
              <img
                src="images/Jewellery.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Jewellery and Accessories</h2>
                <p className="vendor-description">
                  Exquisite jewelry and accessories to complement your special day.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Bridal Jewelry</li>
                    <li>Accessories</li>
                    <li>Jewelry Customization</li>
                    <li>Rental Jewellery</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          
        </div>

        {/* Vendor 2 */}
        <div className="row">
          <div className="col-md-4">
          <NavLink to="/Food" className="link"><div className="vendor-card">
              <img
                src="images/Catering.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Food</h2>
                <p className="vendor-description">
                  Delightful and delectable cuisine to make your event memorable.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Wedding Catering</li>
                    <li>Event Menus</li>
                    <li>Specialty Cuisines</li>
                    <li>Dessert Buffets</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Makeup" className="link">
            <div className="vendor-card">
              <img
                src="images/BridalMakeup.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Makeup</h2>
                <p className="vendor-description">
                  Elevate your beauty with our professional makeup services.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Bridal Makeup</li>
                    <li>Makeup Trials</li>
                    <li>Makeup Workshops</li>
                    <li>Makeup Packages</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Groom" className="link">
            
            <div className="vendor-card">
              <img
                src="images/GroomWear.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Groom Wear</h2>
                <p className="vendor-description">
                  Discover sophisticated and stylish attire for the groom.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Groom's Outfits</li>
                    <li>Sherwanis</li>
                    <li>Suits</li>
                    <li>Accessories</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
        </div>

        {/* Vendor 3 */}
        <div className="row">
          <div className="col-md-4">
          <NavLink to="/Gift" className="link"><div className="vendor-card">
              <img
                src="images/Invitation.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Invites & Gifts</h2>
                <p className="vendor-description">
                  Thoughtful invitations and gifts to share the joy of your event.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Wedding Invitations</li>
                    <li>Custom Stationery</li>
                    <li>Gift Selection</li>
                    <li>Gift Wrapping</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Pandits" className="link"><div className="vendor-card">
              <img
                src="images/pandit.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Pandits</h2>
                <p className="vendor-description">
                  Spiritual guidance and rituals for a harmonious ceremony.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Wedding Ceremonies</li>
                    <li>Puja Services</li>
                    <li>Vedic Rituals</li>
                    <li>Spiritual Consultation</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Prewedding" className="link"><div className="vendor-card">
              <img
                src="images/preweddingShoot.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Pre-wedding Shoot</h2>
                <p className="vendor-description">
                  Capture your love story with creative and romantic pre-wedding shoots.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Location Shoots</li>
                    <li>Conceptual Themes</li>
                    <li>Cinematic Videos</li>
                    <li>Custom Packages</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          
        </div>

        {/* Vendor 4 */}
        <div className="row">
        <div className="col-md-4">
            <NavLink to="/Dj" className="link"><div className="vendor-card">
              <img
                src="images/music_dance.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Music & Dance</h2>
                <p className="vendor-description">
                  Enchanting melodies and captivating performances to elevate your celebration.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Live Performances</li>
                    <li>DJ Services</li>
                    <li>Dance Choreography</li>
                    <li>Music Selection</li>
                  </ul>
                </div>
              </div>
            </div>
          </NavLink>

          </div>
          <div className="col-md-4">
          <NavLink to="/Decor" className="link">

            <div className="vendor-card">
              <img
                src="images/Decorator.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Planning and Decor</h2>
                <p className="vendor-description">
                  Transform your venue with innovative decor and meticulous planning.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Event Planning</li>
                    <li>Theme Design</li>
                    <li>Floral Arrangements</li>
                    <li>Lighting Setup</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          <div className="col-md-4">
          <NavLink to="/Mehendi" className="link">
            <div className="vendor-card">
              <img
                src="images/MehendiArtist.jpg"
                alt="Vendor"
                className="vendor-image"
              />
              <div className="vendor-content">
                <h2 className="vendor-title">Mehendi</h2>
                <p className="vendor-description">
                  Intricate and beautiful mehendi designs for an auspicious adornment.
                </p>
                <div className="vendor-services">
                  <p>Services:</p>
                  <ul>
                    <li>Mehendi Application</li>
                    <li>Traditional Designs</li>
                    <li>Custom Artistry</li>
                    <li>Bridal Mehendi</li>
                  </ul>
                </div>
              </div>
            </div>
            </NavLink>
          </div>
          

        </div>

        {/* ... (Add more vendor rows for other vendors if needed) */}
      </div>
    </Wrapper>
  );
}

export default Vendors;





