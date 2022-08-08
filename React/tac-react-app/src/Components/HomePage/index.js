import React from "react";
import CareersPage from "../CareersPage";
import Navbar from "../Navbar/index"
import "./style.css";
import background from "../../assets/banner.png";

const HomePage = (props) => {
    return (
        <>
            <div className="bg">
                <img src={background} alt="background" />
                <Navbar />
                <div className="banner-content">
                    <h1>Over decade experience with poly skills engineering specialists.</h1>
                    <h5>Working with companies and individuals to solve hard problems with a robust, pragmatic approach and the right technology.</h5>
                    <button onClick={""}>WORK WITH US</button>
                </div>
            </div>

        </>
    );
}

export default HomePage;