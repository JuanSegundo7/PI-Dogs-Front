import React, {useState} from 'react';
import "./Header.css"
import {Link as Navigator} from "react-router-dom"
import Dogs from "./imgs/Dogs.png"
import Form from "../../Components/Form/Form"
import Burger from "../../Components/Burger/Burger"


const Header = () => {
    const [value, setValue] = useState(false)
    const [form, setForm] = useState(false)

    const handleClick = () => {
        setValue(!value)
    }
    
    let show

    if(form) show = <Form setState={setForm}/>


    return (
        <>
        <div id="Header">
            <nav>
                <article className="nombre">
                    <Navigator to="/">
                        <img src={Dogs}/>
                    </Navigator>
                </article>
                <article id="desktop-visible">
                <Navigator to="/favorites">
                    <svg xmlns="http://www.w3.org/2000/svg" id="star" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                </Navigator>
                    <ul>
                        <article id="create" onClick={() => setForm(true)}><li>Create</li></article>
                    </ul>
                </article>
                <article className="burger-article" id="mobile-visible">
                    <article id="burger"onClick={handleClick} className={value ? "active" : null}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </article>
                </article>
            </nav>
        </div>
        < Burger value={value} handleClick={handleClick}/>
        {show}
        </>
    );
}

export default Header;
