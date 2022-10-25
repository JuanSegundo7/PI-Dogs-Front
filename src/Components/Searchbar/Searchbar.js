import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {getQuery} from "../../Redux/Actions/Actions"
import "./Searchbar.css"
const Searchbar = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState()

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        dispatch(getQuery(name))
    }

    return (
        <>
            <input type="text" autoComplete="off" placeholder="Search" id="search" onChange={handleChange}/><button id="search-button" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default Searchbar;
