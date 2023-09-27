// Pagination.js

import React from 'react';
import "./Pagination.css"

const Pagination = ({ total = 0, active = 0, setPage }) => {
  const pages = [];

  for (let i = 1; i <= total; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination-container">
      <button
        onClick={() => setPage(1)}
        disabled={active === 1}
        className="pagination-button"
      >
        First
      </button>
      <button
        onClick={() => setPage(active - 1)}
        disabled={active === 1}
        className="pagination-button"
      >
        Prev
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          disabled={active === page}
          className={`pagination-button ${
            active === page ? "active" : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => setPage(active + 1)}
        disabled={active === total}
        className="pagination-button"
      >
        Next
      </button>
      <button
        onClick={() => setPage(total)}
        disabled={active === total}
        className="pagination-button"
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
