import React from "react";
import CareersPage from "../CareersPage";
import HomePage from "../HomePage";
import './style.css'


const company = {
    name: "tech.at.core",
    imgUrl: "https://static.ambitionbox.com/alpha/company/photos/logos/techatcore.jpg"
}

const Navbar = (props) => {
   
    return (
        <>
            <div className="navbar">
                <div className="company-logo">
                    <img className="logo" src={company.imgUrl} alt="Logo" />
                    <h1> {company.name} </h1>
                </div>
                <div className="btn-wrapper">
                <button> Home </button>
                <button> Carrers</button>
                </div>
            </div>
        </>
    );
}

export default Navbar;