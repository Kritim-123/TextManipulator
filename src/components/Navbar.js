import React from 'react'
import '/Users/kritimbastola/Desktop/React/textmanipulator/src/main.css';
import { Link } from 'react-router-dom';

export default function Navbar(props){
  return (
  <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
          <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div className="btn-group me-2" role="group" aria-label="First group">
              <button type="button" style ={{backgroundColor: '#388f20'}} onClick={ () => props.handleColor('#388f20')} className={`btn ${props.activeButton === 'btn1' ? 'glow' : ''}`}>1</button>
              <button type="button" style ={{backgroundColor: '#8f2070'}} onClick={ () => props.handleColor('#8f2070')} className={`btn ${props.activeButton === 'btn2' ? 'glow' : ''}`}>2</button>
              <button type="button" style ={{backgroundColor: '#208f77'}} onClick={ () => props.handleColor('#208f77')} className={`btn ${props.activeButton === 'btn3' ? 'glow' : ''}`}>3</button>
              <button type="button" style ={{backgroundColor: '#8f7720'}} onClick={ () => props.handleColor('#8f7720')} className={`btn ${props.activeButton === 'btn4' ? 'glow' : ''}`}>4</button>
            </div>
          </div>
          

          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>

        </div>
    </div>
  </nav>
  )
}



