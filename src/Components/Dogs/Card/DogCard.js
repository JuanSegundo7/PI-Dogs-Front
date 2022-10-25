import React from 'react';
import {Link} from "react-router-dom"
import Favorite from "../Favorite/Favorite"
import "./Dog.css"

const DogCard = ({name, url, id, star}) => {

    return (
        <article id="DogCard">
            <div className="content">
            <Favorite id={id} star={star}/>
            <Link to={`/dog/${id}`}>
                <div className="front">
                    <img src={url} />
                </div>
                <div className="back from-bottom">
                    <p>{name}</p>
                </div>
            </Link>
            </div>
        </article>
    );
}

export default DogCard;
