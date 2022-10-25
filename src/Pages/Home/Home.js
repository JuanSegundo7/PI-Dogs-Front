import React, {useState} from 'react';
import DogsComponent from "../../Components/Dogs/Dogs"

import Pagination from "../../Components/Pagination/PaginationLogic"
import Header from "../Header/Header"
import Filter from "../../Components/Filter/Filter"

import './styles/Home.css';


const Home = () => {
	return (
		<>
		<Header />
		<section id="Home">
			<Filter />
			<DogsComponent/>
		</section>
		<Pagination />
		</>
	);
};

export default Home;
