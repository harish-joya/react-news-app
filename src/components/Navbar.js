import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    const { activeCategory, mode, toggleMode } = this.props;

    return (
      <nav className={`navbar navbar-expand-lg  bg-dark navbar-dark sticky-top`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NewsApp</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>

              {/* Categories Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categories
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sport">Sport</Link></li>
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/economy">Economy</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                </ul>
              </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sports Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/Cricket">Cricket</Link></li>
                    <li><Link className="dropdown-item" to="/Football">Football</Link></li>
                    <li><Link className="dropdown-item" to="/Hockey">Hockey</Link></li>
                    <li><Link className="dropdown-item" to="/Badminton">Badminton</Link></li>
                  </ul>
                </li>
              
            </ul>
            <button
              type="button"
              className="btn btn-outline-light mx-3"
              style={{ color:'white', borderColor:'white'}}
              onClick={toggleMode}
            >
              {mode === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
