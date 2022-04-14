import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import Shop from "./Shop"
import Login from "./Login";
import { getToken, setUserSession } from "../Common";
import { slide as Menu } from 'react-burger-menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Tooltip from '@mui/material/Tooltip';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons"
import "../Sidebar.css"

function Nav(props){
    const [authLoading, setAuthLoading] = useState(true)

    useEffect(() =>{
        const token = getToken();
        if(!token){
            return;
        }
        axios.get(`http://localhost:3000/verifyToken?token=${token}`).then(response =>{
            setUserSession(response.data.token, response.data.user);
            setAuthLoading(false);
        }). catch(error =>{
            setAuthLoading(false);
        })
    }, []);

    function refreshPage(){
        setTimeout(()=>{
            window.location.reload(false);
        }, 100);
    }
    
    return(
    <Router>
        <div>
    <nav className="nav-wrap">
        <Menu width={ '20%' }>
            <footer className="menu-footer">
                <h3>About us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
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
            <ul className= "link-right" >
                <li className="Links">
                    <Link className="menu-item" to= "/"><Tooltip title = "Home"><HomeOutlinedIcon></HomeOutlinedIcon></Tooltip></Link>
                </li>
                <li className="Links">
                    <Link onClick={refreshPage} className="menu-item" to="/content"><Tooltip title = "Shop"><ShoppingBagOutlinedIcon></ShoppingBagOutlinedIcon></Tooltip></Link>
                </li>
                <li className="Links">
                    <Link onClick={refreshPage} className="menu-item" to= "/content#/cart"><Tooltip title = "Cart"><ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon></Tooltip></Link>  
                </li>
                <li className="menu-item">
                    <Link className="menu-item" to= "/login"><Tooltip title = "Login"><LoginIcon></LoginIcon></Tooltip></Link>
                </li>
            </ul> 
    </nav>
        </div>
        <Routes>
                <Route path = '/' element = {<Header></Header>}></Route>
                <Route exact path = "/content" element = {<Shop></Shop>}></Route>
                <Route exact path = "/login" element = {<Login></Login>}></Route>
        </Routes> 
    </Router>
    )
}

export default Nav;