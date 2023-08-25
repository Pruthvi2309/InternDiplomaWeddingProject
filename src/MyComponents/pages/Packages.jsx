import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


function Packages() {
    const [data, setData] = useState([]);
    const collectData = async () => {
        try {
            const response = await fetch('http://localhost:4000/packages', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const responseData = await response.json(); // Parse the response JSON
            console.log('Response data from server:', responseData); // Debugging line

            setData(responseData); // Set the fetched data to the state
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [pname,setPackage] = useState("");
    const [venue_name,setVenue] = useState("");
    const sendData = async () => {
        try {
          const response = await fetch('http://localhost:4000/createpackage', {
            method: 'post',
            body: JSON.stringify({pname,venue_name}),
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            // setData(data);
          } else {
            console.error('API response not okay:', response.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(() => {
        collectData();
    }, []);
    return (
        <Wrapper>
            <div className='super-cont'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <center><h1>Packages</h1></center>
                        </div>
                    </div>
                    <div className='row'>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a className="nav-link active" data-bs-toggle="tab" href="#packages" aria-selected="true" role="tab">Your Packages</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a className="nav-link" data-bs-toggle="tab" href="#create" aria-selected="false" role="tab">Create Package</a>
                            </li>
                            <li className="nav-item " role="presentation">
                                <a className="nav-link " data-bs-toggle="tab" href="#add" aria-selected="false" role="tab">Add to Package</a>
                            </li>
                        </ul>
                        <div id="myTabContent" className="tab-content">
                            <div className="tab-pane fade active show" id="packages" role="tabpanel">
                                {data.map((curElem) => {
                                    const img = "venues/" + curElem.pid + ".jpg";
                                    return (
                                        <div className="container cust-cont" key={curElem.pid}>
                                            <div className='row'>
                                                <div className='col-md-8'>
                                                    <div className='row'>
                                                        <div className='col-md-6'><h4>Package Name</h4></div>
                                                        <div className='col-md-6'><h4>Venue Name</h4></div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>{curElem.pname}</div>
                                                        <div className='col-md-6'>{curElem.venue_name}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 view-btn-cont">
                                                <NavLink to={`/Package/${curElem.pname}`}><div className='col-md-4'><button className='btn btn-primary view-btn'>View More</button></div></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="tab-pane fade" id="create" role="tabpanel">
                               
                                <br/>
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="add-btn accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            Create+
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <div className="row">
                                                        
                                                    <h3>Package Details</h3>
                                                    
                                                    <div className="col-md-6">
                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                Package Name:
                                                            </div>
                                                            <div className='col-md-8'>
                                                                <input type="text" className="form-control" placeholder="Enter Package Name" id="inputDefault" value={pname} onChange={(e)=>setPackage(e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='col-md-6'>
                                                        <div className='row'>
                                                            <div className='col-md-4'>
                                                                Venue Name:
                                                            </div>
                                                            <div className='col-md-8'>
                                                                <input type="text" className="form-control" placeholder="Enter Venue Name" id="inputDefault" value={venue_name} onChange={(e)=>setVenue(e.target.value)}/>
                                                            </div>
                                                        </div>  
                                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-md-12'>
                                                        <button className='btn btn-primary create-btn' onClick={sendData}>Create</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade " id="add" role="tabpanel">
                                <br/>
                                <h4>Select the Package to add</h4>
                                {data.map((curElem) => {
                                    const img = "venues/" + curElem.pid + ".jpg";
                                    return (
                                        <div className="container cust-cont" key={curElem.pid}>
                                            <div className='row'>
                                                <div className='col-md-8'>
                                                    <div className='row'>
                                                        <div className='col-md-6'><h4>Package Name</h4></div>
                                                        <div className='col-md-6'><h4>Venue Name</h4></div>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-md-6'>{curElem.pname}</div>
                                                        <div className='col-md-6'>{curElem.venue_name}</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4 view-btn-cont">
                                                    <div className='col-md-4'><button className='btn btn-primary add-to-pkg-btn'>Add to Package</button></div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
.super-cont{
    padding-top:90px;   
    padding-bottom:90px;
}
    .add-btn{
        padding-left:600px;
        font-size:30px;
    }
    .cust-cont{
        margin-top:20px;
        margin-left:50px;
        background-color:#f5f5f5;
        width:90%;
        height:fit-content;
        padding:30px;
        border-radius:10px;
    }
    .view-btn-cont{
        padding-left:200px;
    }
    .view-btn{
        width:100px;
        white-space: nowrap;
    }
    .create-btn{
        width:100px;
        margin-top:10px;
        float:right;
    }
    .add-to-pkg-btn{
        white-space: nowrap;

    }
`;

export default Packages

