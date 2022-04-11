import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from "./Header";
import { slide as Menu } from 'react-burger-menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import Shop from "./Shop"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import "../Sidebar.css"

function Nav(){
    const [navbarOpen, setNavbarOpen] = useState(false)

    function handleToggle(){
        setNavbarOpen(prev => !prev) // updating the state using the updater function.
    }
    
    return(
    <Router>
        <div>
    <nav className="nav-wrap">
        <Menu width={ '20%' }>
            <h1>E-COMMERCE</h1>
            <ul className="siderbar">
                <li>
                    <Link className="hamburger-bt" to= "/"><HomeRoundedIcon fontSize="small"></HomeRoundedIcon><span className="link-text">Home</span></Link>
                </li>
                <li className="Links">
                    <Link className="hamburger-bt" to="/content"><ShoppingBagRoundedIcon fontSize = "small"></ShoppingBagRoundedIcon><span className="link-text">Shop</span></Link>
                </li>
            </ul>
            <footer className="menu-footer">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <ul className="SM-footer">
                    <a href="https://twitter.com/">
                    <li><FontAwesomeIcon icon={faTwitter}/></li></a>
                    <a href="https://www.facebook.com/">
                    <li><FontAwesomeIcon icon={faFacebook}/></li></a>
                    <a href= "https://www.instagram.com/">
                    <li id = "instagram-icon"><FontAwesomeIcon icon={faInstagram}/></li></a>
                </ul>
            </footer>
        </Menu>
        {/* <button className="nav-button" onClick={handleToggle}>{navbarOpen ? "Close": "Open"}</button> */}
        <h1 id = "Tittle-name">E-Commerce</h1>
            <ul className= {`link-right ${navbarOpen ? "showMenu" : ""}`}>
                <li className="Links">
                    <Link className="menu-item" to= "/"><Tooltip title = "Home"><HomeOutlinedIcon></HomeOutlinedIcon></Tooltip></Link>
                </li>
                <li className="Links">
                    <Link className="menu-item" to="/content"><Tooltip title = "Shop"><ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon></Tooltip></Link>
                </li>
                <li className="menu-item">
                    <Tooltip title = "Login"><LoginIcon></LoginIcon></Tooltip>
                </li>
            </ul> 
    </nav>
        </div>
        <Routes>
                <Route path = '/' element = {<Header></Header>}></Route>
                <Route exact path = "/content" element = {<Shop></Shop>}></Route>
        </Routes> 
    </Router>
    )
}

export default Nav;