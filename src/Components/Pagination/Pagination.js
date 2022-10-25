import React from 'react';
import "./Pagination.css"

const Pagination = ({dogsPerPage, Dogs, Paginated}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(Dogs / dogsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav id="Pagination">
            <ul>
                {pageNumbers && pageNumbers.map(number => {
                    return (
                        <li key={number} onClick={() => Paginated(number)}>
                            <a>
                                {number}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}

export default Pagination;
