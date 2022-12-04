import React, {} from 'react';
import "./Burger.css"
import Dropdown from '../Filter/Dropdown/Dropdown'
import Array from "../Filter/info_filter"



const Burger = (props) => {
    
    const Order = Array.find(order => order.name === "Order")
    const Weight = Array.find(order => order.name === "Weight")
    console.log(Weight)
    return (
        <nav id="mobile-nav" className={props.value ? "is-active" : null}>
            <article>
            <div>
                <li>
                    Hola
                </li>
            </div>
            </article>
        </nav>
    );
}


export default Burger;
