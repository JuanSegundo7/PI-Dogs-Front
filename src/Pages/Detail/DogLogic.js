import React, { useEffect } from 'react';
import Header from "../Header/Header"
import { useDispatch, useSelector } from 'react-redux';
import { getOneDog, cleanDetail } from "../../Redux/Actions/Actions"
import { useParams } from "react-router-dom"

import "./DogDetail.css"
import Spinner from "../../Components/Spinner/Spinner"
import DogDetail from "./DogDetail"

const Dog = () => {
    window.scrollTo(0,0)

    const Dog = useSelector((state) => state.dog)

    const dispatch = useDispatch()
    const iD = useParams()

    console.log(Dog)

    if (Dog) var {id, min_height,max_height,min_weight,max_weight, image, name, origin, life_span, temperaments} = Dog

    useEffect(() => {
        dispatch(getOneDog(iD.id))

        return function(){
            dispatch(cleanDetail())
        }

    }, [dispatch])

    return (
        <>
        <Header />
        <section id="Detail">
            {!Dog || Object.keys(Dog).length === 0 ? <Spinner /> :
                <DogDetail id={id} name={name} min_height={min_height} max_height={max_height} origin={origin} max_weight={max_weight} min_weight={min_weight} life_span={life_span} image={image} temperaments={temperaments}/>
            }
        </section>
        </>
    );
}

export default Dog;
