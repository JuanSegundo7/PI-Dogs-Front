import React, {useEffect} from 'react';
import DogsComponent from "../../Components/Dogs/Dogs"

import Pagination from "../../Components/Pagination/PaginationLogic"
import Header from "../Header/Header"
import Filter from "../../Components/Filter/Filter"
import { getAllDogs } from '../../Redux/Actions/Actions';
import Help from '../../Components/Help/Help'
import { useDispatch } from "react-redux"

import './styles/Home.css';


const Home = () => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getAllDogs())
	}, [])

	return (
		<>
		<Header />
		<section id="Home">
			<Filter />
			<DogsComponent/>
		</section>
			<Help />
		<Pagination />
		</>
	);
};

export default Home;
