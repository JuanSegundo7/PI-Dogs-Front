import React from 'react'
import { useSelector } from "react-redux"
import Pagination from "./Pagination"

export default function PaginationLogic() {
    const pagination = useSelector((state) => state.pagination)
    const Filter = useSelector((state) => state.filter)
    const Filtered = useSelector((state) => state.filtered)
    const Dogs = useSelector((state) => state.dogs)

    if(pagination){
      var {dogsPerPage, setCurrentPage} = pagination
    }

    const paginationLogic = (number) => {
      setCurrentPage(number)
    }

  return (
    <Pagination Dogs={Filter ? Filtered.length : Dogs.length} dogsPerPage={dogsPerPage} Paginated={paginationLogic}/>
  )
}
