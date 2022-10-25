import React from 'react';
import Landing from "../../Pages/Landing/Landing"
import DogsDetail from "../../Pages/Detail/DogLogic"
import Favorites from "../../Pages/Favorites/FavoritesPage"
import Home from "../../Pages/Home/Home"
import {Routes, Route} from 'react-router-dom'

const Switch = () => {
    return (
       <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/dog/:id" element={<DogsDetail />} />
       </Routes>
    );
}

export default Switch;
