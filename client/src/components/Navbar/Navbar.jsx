import React from 'react';
import {RiAccountCircleFill} from "react-icons/ri"
import "./main.css"
const Navbar = () => {
    return ( <>
    <div className="nav__container">
        <div className="nav__brand"></div>
        <div className="nav__searchbar">
            <input className="nav__searchbox" type="text"/>
        </div>
        <div className="nav__account">
            <RiAccountCircleFill size="40px" color="white" />
        </div>
    </div>
    </> );
}
 
export default Navbar;