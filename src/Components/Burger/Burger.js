import React, {} from 'react';
import "./Burger.css"


const Burger = (props) => {
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
