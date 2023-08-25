import React, { useState } from 'react';
import styled from 'styled-components'


const Wrapper=styled.div`

body {
    background: rgb(99, 39, 120)
}

.form-control:focus {
    box-shadow: none;
    border-color: #BA68C8
}

.profile-button {
    background: rgb(99, 39, 120);
    box-shadow: none;
    border: none
}

.profile-button:hover {
    background: #682773
}

.profile-button:focus {
    background: #682773;
    box-shadow: none
}

.profile-button:active {
    background: #682773;
    box-shadow: none
}

.back:hover {
    color: #682773;
    cursor: pointer
}

.labels {
    font-size: 11px
}

.add-experience:hover {
    background: #BA68C8;
    color: #fff;
    cursor: pointer;
    border: solid 1px #BA68C8
}
.pad-cont{
    padding-top:50px;
}

`



export default function ProfileSettings() {
    const sendData = async () =>{
      
        let result = await fetch('http://localhost:4000/profilesetting', {
            method: 'post',
            body: JSON.stringify({profid,profname,profsname,profmobno,profaddress,profemail,profcountry,profstate}),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(result);
        // result = await result.json();
        // localStorage.setItem("items", JSON.stringify(result));
      
    }
    const [profname,setprofname] = useState("");
    const [profsname,setprofsname] = useState("");
    const [profmobno,setprofmobno] = useState("");
    const [profaddress,setprofaddress] = useState("");
    const [profemail,setprofemail] = useState("");
    const [profcountry,setprofcountry] = useState("");
    const [profstate,setprofstate] = useState("");
    return (
        <Wrapper>
        <div className="container pad-cont rounded bg-white mb-5">
            <div className="row">
                <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">edogaru@mail.com.my</span>
                    </div>
                </div>
                <div className="col-md-5 border-right">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <form>
                        <div className="row mt-2">
                            <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" value={profname} onChange={(e)=>setprofname(e.target.value)} placeholder="first name" /></div>
                            <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value={profsname} onChange={(e)=>setprofsname(e.target.value)}  placeholder="surname"/></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" value={profmobno} onChange={(e)=>setprofmobno(e.target.value)} placeholder="enter phone number"/></div>
                            <div className="col-md-12"><label className="labels">Address Line 1</label><textarea className="form-control" value={profaddress} onChange={(e)=>setprofaddress(e.target.value)} placeholder="enter address"></textarea></div> 
                            <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" value={profemail} onChange={(e)=>setprofemail(e.target.value)} placeholder="enter email id"/></div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control"  value={profcountry} onChange={(e)=>setprofcountry(e.target.value)} placeholder="country"/></div>
                            <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value={profstate} onChange={(e)=>setprofstate(e.target.value)}  placeholder="state"/></div>
                        </div>
                        </form>
                        <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={sendData}>Save Profile</button></div>
                    </div>
                </div>
                {/* {/* <div className="col-md-4">
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center experience">
                            <span>Edit Experience</span>
                            <span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span>
                        </div>
                        <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience"   /></div>
                        <br />
                        <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details"   /></div>
                    </div>
                </div> */}
            </div>
        </div>
    </Wrapper>);
}


