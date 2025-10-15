import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Header({ title = "Your Title here", searchBar, searchTerm, setSearchTerm, onSearchSubmit }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(); // triggers filtering
  };

  return (
    <nav className="navbar px-3 py-2 shadow-sm">
      <div className="container-fluid d-flex justify-content-between align-items-center flex-wrap">

        {/* App Title */}
        <Link className="navbar-brand fw-bold text-white fs-5 m-0" to="/">
          Todo App
        </Link>

        {/* Search Bar */}
        {searchBar ? (
          <form
            className="d-flex align-items-center mt-2 mt-sm-0"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control form-control-sm me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '150px',
                borderRadius: '6px',
                fontSize: '14px',
                padding: '4px 8px',
              }}
            />
            <button
              className="btn btn-sm"
              id="searchButton"
              type="submit"
              style={{
                padding: '4px 10px',
                fontSize: '14px',
                borderRadius: '6px',
                backgroundColor: '#fff',
                color: '#fd7e14',
                fontWeight: '600',
                border: 'none',
              }}
            >
              Go
            </button>
          </form>
        ) : null}
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  onSearchSubmit: PropTypes.func,
};
