import React, {} from 'react';
import "./Burger.css"
import Dropdown from '../Filter/Dropdown/Dropdown'
import Array from "../Filter/info_filter"
import { Link } from 'react-router-dom';


const Burger = (props) => {
    
    const Order = Array.find(order => order.name === "Order")
    const Weight = Array.find(order => order.name === "Weight")
    
    return (
        <nav id="mobile-nav" className={props.value ? "is-active" : null}>
            <article>
            <div>
                <li>
                    <Link to="/">
                    Landing
                    </Link>
                </li>
                <li>
                    <Link to="/home">
                    Home
                    </Link>
                </li>
                <li>
                <Link to="/favorites">
                    Favorites
                </Link>                
                </li>
            </div>
            </article>
        </nav>
    );
}


export default Burger;
