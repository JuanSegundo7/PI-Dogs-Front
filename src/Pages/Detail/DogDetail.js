import React from 'react';
import {Link} from "react-router-dom"
import TrashCan from "../../Components/Eliminate/Eliminate"

import "./Dog.css"

const Dog = ({id, min_height, max_height, min_weight, max_weight, life_span, image, name, origin, temperaments}) => {
    return (
        <article id="detail-article">
            <article id="flex-icons">
                <Link to="/home">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
                </Link>
                <TrashCan id={id}/>
            </article>
            <article id="flex-detail">
                <article id="flex-image">
                    <figure>
                        <img src={image ? image : "https://cdn.imgbin.com/19/3/24/imgbin-cute-dog-GyEfxxXF3amYuGF7LGfV2JSqm.jpg"} alt={image}/>
                    </figure>
                </article>
                <article id="flex-info">
                    <article className="flex-values">
                        <h1>{name ? name : "The Dog name was not found"}</h1>
                        <article className="flex-height-weight">
                            <p>Min Heigth - {min_height}cm </p>
                            <p>Max Heigth - {max_height}cm</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M182.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L128 109.3V402.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7V109.3l41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96z"/></svg>
                        </article>
                        <article className="flex-height-weight">
                            <p>Min Weigth - {min_weight}kg </p>
                            <p>Min Weigth - {max_weight}kg</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 96c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zm58.5 32c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96c0 11.2 1.9 22 5.5 32H120c-22 0-41.2 15-46.6 36.4l-72 288c-3.6 14.3-.4 29.5 8.7 41.2S33.2 512 48 512H464c14.8 0 28.7-6.8 37.8-18.5s12.3-26.8 8.7-41.2l-72-288C433.2 143 414 128 392 128H346.5z"/></svg>
                        </article>
                        <article className="flex-height-weight">
                            <p>Life Span {life_span}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M360 0C373.3 0 384 10.75 384 24C384 37.25 373.3 48 360 48H352V66.98C352 107.3 335.1 145.1 307.5 174.5L225.9 256L307.5 337.5C335.1 366 352 404.7 352 445V464H360C373.3 464 384 474.7 384 488C384 501.3 373.3 512 360 512H24C10.75 512 0 501.3 0 488C0 474.7 10.75 464 24 464H32V445C32 404.7 48.01 366 76.52 337.5L158.1 256L76.52 174.5C48.01 145.1 32 107.3 32 66.98V48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0L360 0zM192 289.9L110.5 371.5C90.96 390.1 80 417.4 80 445V464H304V445C304 417.4 293 390.1 273.5 371.5L192 289.9zM192 222.1L273.5 140.5C293 121 304 94.56 304 66.98V47.1H80V66.98C80 94.56 90.96 121 110.5 140.5L192 222.1z"/></svg>
                        </article>
                        <article className="flex-height-weight">
                        <p>{origin ? origin : "There is not origin information"} </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z"/></svg>
                        </article>
                    </article>
                    {temperaments[0].name ? 
                    <article className="flex-values-temp">
                    {temperaments && temperaments.map(temp => {
                        return (
                            <span className="span-form" key={temp.name}>{temp.name}</span>
                            )
                        })}
                    </article>
                    :
                    <article className="flex-values-temp">
                        {temperaments.length > 0 ? temperaments.map(temp => {
                            return (
                                <span className="span-form" key={temp}>{temp}</span>
                                )
                        }) : <p>There are not temperaments available.</p>
                        }
                    </article>
                    }
                </article>
            </article>
        </article>
    );
}

export default Dog;
