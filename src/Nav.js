import React from "react";
// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Nav = () => {

    return <nav>
        
        <ul>

            <li><NavLink to='/' className={'tf-navlinkhome'}>Home</NavLink></li>
            <li><NavLink to='/career' className={'tf-navlinkcareer'}>Career</NavLink></li>
            <li><NavLink to='/education' className={'tf-navlinkeducation'}>Education</NavLink></li>
            <li><NavLink to='/portfolio' className={'tf-navlinkportfolio'}>Portfolio</NavLink></li>
            <li><NavLink to='/about' className={'tf-navlinkabout'}>About</NavLink></li>

        </ul>

    </nav>

};

export default Nav;