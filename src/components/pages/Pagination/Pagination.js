import React from 'react';

const Pagination = ({ total = 0, active = 0, setPage }) => {
  const projectsPerPage = 7; 
  const maxVisiblePages = 7; 
  const pages = [];

  for (let i = Math.max(1, active - Math.floor(maxVisiblePages / 2)); i <= Math.min(total, active + Math.floor(maxVisiblePages / 2)); i++) {
    pages.push(i);
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        onClick={() => setPage(active - 1)}
        disabled={active === 1}
        style={{
          padding: '5px 10px',
          margin: '0 3px',
          backgroundColor: '#f0f0f0',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Previous
      </button>
      {active > Math.floor(maxVisiblePages / 2) && (
        <>
          {active > Math.floor(maxVisiblePages / 2) + 1 && (
            <span style={{ padding: '5px 10px', margin: '0 3px' }}>...</span>
          )}
          <button
            key={1}
            onClick={() => setPage(1)}
            style={{
              padding: '5px 10px',
              margin: '0 3px',
              backgroundColor: active === 1 ? '#007bff' : '#f0f0f0',
              color: active === 1 ? '#fff' : '#000',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: active === 1 ? 'default' : 'pointer',
            }}
          >
            1
          </button>
        </>
      )}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => setPage(page)}
          disabled={active === page}
          style={{
            padding: '5px 10px',
            margin: '0 3px',
            backgroundColor: active === page ? '#007bff' : '#f0f0f0',
            color: active === page ? '#fff' : '#000',
            border: '1px solid #007bff',
            borderRadius: '4px',
            cursor: active === page ? 'default' : 'pointer',
          }}
        >
          {page}
        </button>
      ))}
      {active < total - Math.floor(maxVisiblePages / 2) && (
        <>
          {active < total - Math.floor(maxVisiblePages / 2) - 1 && (
            <span style={{ padding: '5px 10px', margin: '0 3px' }}>...</span>
          )}
          <button
            onClick={() => setPage(total)}
            style={{
              padding: '5px 10px',
              margin: '0 3px',
              backgroundColor: active === total ? '#007bff' : '#f0f0f0',
              color: active === total ? '#fff' : '#000',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: active === total ? 'default' : 'pointer',
            }}
          >
            {total}
          </button>
        </>
      )}
      <button
        onClick={() => setPage(active + 1)}
        disabled={active === total || total <= projectsPerPage}
        style={{
          padding: '5px 10px',
          margin: '0 3px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: '1px solid #007bff',
          borderRadius: '4px',
          cursor: active === total || total <= projectsPerPage ? 'not-allowed' : 'pointer',
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
