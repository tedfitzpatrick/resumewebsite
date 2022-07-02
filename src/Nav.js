import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = () => {

    return <nav>
        
        <ul>

            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/career'>Career</NavLink></li>
            <li><NavLink to='/education'>Education</NavLink></li>
            <li><NavLink to='/portfolio'>Portfolio</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>

        </ul>

    </nav>

};

export default Nav;