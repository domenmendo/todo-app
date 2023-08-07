import React from 'react';

function Header({ title }) {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <h1 className="navbar-brand">{title}</h1>
        <div className="d-flex">
          <button className="btn btn-outline-light me-2">Login</button>
          <button className="btn btn-outline-light">Logout</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
