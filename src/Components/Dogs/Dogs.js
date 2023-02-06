import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDogs, paginationValues } from "../../Redux/Actions/Actions";

import SadDog from "./img/sad-dog.jpg";
import DogCard from "./Card/DogCard";
import Spinner from "../Spinner/Spinner";

export default function Dogs() {
  const dispatch = useDispatch();

  const Dogs = useSelector((state) => state.dogs);
  const Filtered = useSelector((state) => state.filtered);
  const PostDog = useSelector((state) => state.newDog);
  const Filter = useSelector((state) => state.filter);
  const Number = useSelector((state) => state.changeNumber);

  const [isMobile, setIsMobile] = useState(window.innerWidth);

  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);

  const indexLastDog = currentPage * dogsPerPage;
  const indexFirstDog = indexLastDog - dogsPerPage;

  const currentDogs = Filter
    ? typeof Filtered[0] === "string"
      ? Filtered
      : Filtered.slice(indexFirstDog, indexLastDog)
    : Dogs.slice(indexFirstDog, indexLastDog);

  window.addEventListener("resize", function () {
    setIsMobile(window.innerWidth);
  });

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(paginationValues({ dogsPerPage, setCurrentPage }));
    setCurrentPage(1);
  }, [dispatch, setCurrentPage, Number, PostDog]);

  return (
    <article
      id="flex-dogs"
      className={isMobile < 1000 ? "mobile-visible" : "desktop-visible"}
    >
      {!Dogs.length ? (
        <Spinner />
      ) : currentDogs ? (
        typeof currentDogs[0] === "string" ? (
          currentDogs.map((error) => {
            return (
              <article id="flex-dog-error">
                <img src={SadDog} />
                <h1>{error}</h1>
              </article>
            );
          })
        ) : (
          currentDogs.map((dog) => {
            return (
              <DogCard
                key={dog.id}
                id={dog.id}
                name={dog.name}
                url={dog.image}
              />
            );
          })
        )
      ) : null}
    </article>
  );
}
