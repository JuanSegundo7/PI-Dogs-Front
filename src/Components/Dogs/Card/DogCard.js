import React from 'react';
import {Link} from "react-router-dom"
import Favorite from "../Favorite/Favorite"
import "./Dog.css"


const DogCard = ({name, url, id}) => {

    const errorImage = "https://previews.123rf.com/images/lightwise/lightwise1508/lightwise150800076/44185374-404-error-page-not-found-concept-and-a-broken-or-dead-link-symbol-as-a-dog-emerging-from-a-hole-hold.jpg"

    return (
        <article id="DogCard">
            <div className="content">
            <Favorite id={id}/>
            <Link to={`/dog/${id}`}>
                <div className="front">
                    <img src={url} onError={({ currentTarget }) => {currentTarget.onerror = null; currentTarget.src=errorImage;}} />
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
