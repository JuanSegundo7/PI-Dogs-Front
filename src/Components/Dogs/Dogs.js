import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllDogs, paginationValues } from "../../Redux/Actions/Actions"

import DogCard from "./Card/DogCard"
import Spinner from "../Spinner/Spinner"

export default function Dogs({setDog}) {
    const dispatch = useDispatch()

    const Dogs = useSelector((state) => state.dogs)
    const Filtered = useSelector((state) => state.filtered)
    const Filter = useSelector((state) => state.filter)
    const Number = useSelector((state) => state.changeNumber)


    const [currentPage, setCurrentPage] = useState(1)
    const [dogsPerPage, setDogsPerPage] = useState(8)
    
    const indexLastDog = currentPage * dogsPerPage
    const indexFirstDog = indexLastDog - dogsPerPage

    const currentDogs = Filter ? (typeof Filtered[0] === "string" ? Filtered : Filtered.slice(indexFirstDog, indexLastDog)) : Dogs.slice(indexFirstDog, indexLastDog)
    
    useEffect(() => {
      dispatch(getAllDogs())
      dispatch(paginationValues({dogsPerPage, setCurrentPage}))
    }, [dispatch, setCurrentPage, Number])
    
    return <article id="flex-dogs"> 
      { !Dogs.length ? <Spinner /> 
        : (currentDogs ? typeof currentDogs[0] === "string" ? currentDogs.map(error => {
          return (
            <article id="flex-dog-error">
              <img src="https://cdn.shopify.com/s/files/1/0079/3287/0756/articles/sad-dog-spot-the-signs-and-cheer-them-up_1200x1200.jpg?v=1620757126"/>
              <h1>{error}</h1>
            </article>
          )
        }) : currentDogs.map((dog)=> { 
          return(
            <DogCard key={dog.id} id={dog.id} name={dog.name} url={dog.image} setDog={setDog}/>
            )
        }) : null)
      }
    </article>
}