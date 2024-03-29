import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
  const homeTitle = ()=>{
    document.title = "textUtils - Home";
  }
  const aboutTitle = ()=>{
    document.title = "textUtils - About";
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" onClick={homeTitle} to="/">{props.title}</Link>
          {/* <a className="navbar-brand" href="#">{props.title}</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" onClick={homeTitle} to="/">Home</Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={aboutTitle} to="/about">{props.about}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" onClick={homeTitle} to="/">Contact</Link>
              </li>
            </ul>
            <div className='d-flex'>
              <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{width:'30px',height:'30px', cursor:'pointer'}}></div>
              <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{width:'30px',height:'30px', cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{width:'30px',height:'30px', cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{width:'30px',height:'30px', cursor:'pointer'}}></div>
              <div className="bg-info rounded mx-2" onClick={()=>{props.toggleMode('info')}} style={{width:'30px',height:'30px', cursor:'pointer'}}></div>
            </div>
          {/* <div className={`form-check form-switch text-${props.mode === 'light'? 'dark':'light'}`}>
              <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enabel {props.mode === 'light'? 'dark':'light'} Mode</label>
            </div> */}
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    about: PropTypes.string};

// Specifies the default values for props:
Navbar.defaultProps = {
    title: 'Title is here',
    about: 'About text here'
  };