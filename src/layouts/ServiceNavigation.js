import React from 'react'
import {NavLink} from 'react-router-dom';
import "../styles/ServiceNav.css"

const list = [
    {name: "New", path:"/new-jobs"},
    {name: "Current", path:"/current-jobs"},
    {name: "Finish", path:"/finish-jobs"},
]
const Navigation = () => {
    const menu = list.map(item => 
    <NavLink to={item.path} className="buttonService" key={item.name}>
        <i class="fas fa-wrench"></i>
        <p>3</p>
        <span>{item.name}</span>
    </NavLink>)
    return (  
       <nav>
            {menu}  
       </nav>


    );
}
 
export default Navigation;