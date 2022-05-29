import React from "react";
import { NavLink } from "react-router-dom";
import '../component/NavBar.css'

const Navbar =()=>{

    return(
    <div className="back">
        <button className="linavbar">
            <NavLink to="/Home" style={{textDecoration:'none'}}>Who am I?</NavLink>
        </button>
        <button className="linavbar">
            <NavLink to="/About" style={{textDecoration:'none'}}>About</NavLink>
        </button>
        <button className="linavbar">
            <NavLink to="/Projects" style={{textDecoration:'none'}}>Projects</NavLink>
        </button>
        <button className="linavbar">
            <NavLink to="/Contact" style={{textDecoration:'none'}}>Contact</NavLink>
        </button>

        
    </div>
    )

}
export default Navbar;