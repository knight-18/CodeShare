import React from 'react';
import Categories from '../../components/Categories/Categories';
import Codes from '../../components/Codes/Codes';
import Coders from '../../components/TopCoders/Coders';
import "./main.css"
const Landing = () => {
    return ( <>
    <div className="landing__container">
        <div className="landing__hero">
            <div className="landing__herobg"></div>
            <div className="landing__herotxt">
                <h1>BUILD COMMUNITY.</h1>
                <h1>LEARN. <span style={{color:"#004E89"}} >CODE SHARE.</span> </h1>
            </div>
        </div>
       
        <div className="landing__categories">
            <h2>Categories</h2>
            <Categories/>
        </div>
        <div className="landing__top">
            <h2>Todays Top Codes</h2>
            <Codes/>
        </div>
        <div className="landing__top">
            <h2>Top Contributers</h2>
            <Coders/>
        </div>
    </div>
    </> );
}
 
export default Landing;