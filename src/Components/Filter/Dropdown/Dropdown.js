import React from 'react';
import "./Dropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { filters, paginationValues, clearFilter } from '../../../Redux/Actions/Actions';

export default function Dropdown({info}) {
  const {array, name} = info
  const dispatch = useDispatch()

  const {setCurrentPage} = useSelector((state) => state.pagination)

  const handleClick = (e) => {
    const value = e.target.outerText
    setCurrentPage(1)
    dispatch(filters({name, value}))
    setCurrentPage(1)
  }

  return (
    <div className="dropdown">
      <div className="dropbtn"><p>{name}</p></div>
      <div className="dropdown-content">
        <div className="dropdown-limit">
        {array.map((array) => {
          return (
            <a key={array.id} value={array.name} onClick={handleClick}>{array.name}</a>
            )
          })}
          </div>
        </div>
    </div>
  )
}
