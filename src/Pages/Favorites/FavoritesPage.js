import React from 'react';
import Header from '../Header/Header'
import "./FavoritePage.css"
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import DogCard from '../../Components/Dogs/Card/DogCard';
import Spinner from '../../Components/Spinner/Spinner';

const FavoritesPage = () => {
    const Favorites = useSelector((state) => state.FavoritesCopy)

    let FavoritesFinal = Favorites.filter((e) => e !== undefined)

    console.log(FavoritesFinal)

    return (
        <>
        <Header />
        <section id="Home">
            <article id="favorites">
                <Link to="/home" id="back-button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512s256-114.6 256-256zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"/></svg>
                </Link>
                <article>
                {!FavoritesFinal.length ? 
                    <article id="flex-dog-error">
                        <h2>You dont have any favorite yet :(</h2> 
                        <article id="favorite-spinner">
                            <Spinner />
                        </article>
                    </article>
                    :
                    <>
                    <h1>These are your favorites doggies</h1>
                    <article id="flex-favorites">
                        {FavoritesFinal[0] === undefined ? <Spinner /> : 
                            FavoritesFinal.map((dog) => {
                                return <DogCard key={dog.id} id={dog.id} name={dog.name} url={dog.image} star={true}/>
                            })
                        }
                    </article>
                    </>
                }
                </article>
            </article>
        </section>
        </>
    );
}

export default FavoritesPage;
