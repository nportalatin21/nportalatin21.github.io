import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light" data-bs-theme="light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">NP</Link> {/* Updated this line */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">Projects</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>

            <li className="nav-item">
                <Link to='/about-me' className='nav-link'>About Me</Link>
            </li>

            {/* Add your dropdown menu here */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu">
                <Link to="#" className="dropdown-item">Action</Link>
                <Link to="#" className="dropdown-item">Another action</Link>
                <Link to="#" className="dropdown-item">Something else here</Link>
                <div className="dropdown-divider"></div>
                <Link to="#" className="dropdown-item">Separated link</Link>
              </div>
            </li>
          </ul>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="search" placeholder="Search" />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
