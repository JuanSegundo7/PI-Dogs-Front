import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { temps, copyDogs } from "../../Redux/Actions/Actions"
import Searchbar from "../Searchbar/Searchbar"
import Dropdown from "./Dropdown/Dropdown"
import "./Filter.css"

export default function Filter() {
  const dispatch = useDispatch()
	const Temps = useSelector((state) => state.temps)


  const Temperaments = {array: Temps, name: "Temperaments"}
  const Order = {array:[{id: 1, name:"A to Z"}, {id: 2, name:"Z to A"}], name: "Order"}
  const Weight = {array:[{id: 1, name:"Min Weight"}, {id: 2, name:"Max Weight"}], name: "Weight"}
  const Dogs = {array:[{id: 1, name:"All Dogs"}, {id: 2, name:"API Dogs"}, {id: 3, name:"Created Dogs"}], name: "Dogs"}

  const handleReset = () => {
    dispatch(copyDogs())
  }

	useEffect(() => {
		dispatch(temps())
	}, [dispatch])

  return (
    <article id="Filter">
      <article id="rigth-filter-side">
        <Searchbar />
      </article>
      <article className="left-filter-side">
        <Dropdown info={Temperaments}/>
        <Dropdown info={Order}/>
        <Dropdown info={Weight}/>
        <Dropdown info={Dogs} />
        <span onClick={handleReset}>Reset filters</span>
      </article>
    </article>
  )
}
