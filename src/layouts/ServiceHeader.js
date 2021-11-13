import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/ServiceHeader.css'

const Header = () => {
    return (  
        <nav>
            <ul>
            <NavLink to="/" exact> <li>
                <i class="fas fa-home"></i>
                <span>Home</span>
                </li> </NavLink>
            <NavLink to="/d"> <li>
                <i class="far fa-chart-bar"></i>
                <span>Statistic</span>
                </li> </NavLink>
            <NavLink to="/a"> <li>
                <i class="fas fa-user-clock"></i>
                <span>Work Time</span>
                </li> </NavLink>
            <NavLink to="/b"> <li>
                <i class="far fa-comments"></i>
                <span>Chat</span>
                </li> </NavLink>
            </ul>
        </nav>
    );
}
 
export default Header;