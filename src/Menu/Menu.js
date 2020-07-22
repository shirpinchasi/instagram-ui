import React from "react";
import {Link} from "react-router-dom";
import intro from "../images/blacklogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch,faPlusSquare, faCompass, faHeart } from '@fortawesome/free-solid-svg-icons';
import MenuAvatar from "./MenuAvatar/MenuAvatar";




  function Menu(props){
    


  return(
		<div className=".container-fluid ">
    <nav className="navbar">
			    <a className="navbar-brand" href="#" >
              <img src={intro} width="200" height="50" id="instaimg" className="instaimg d align-top" alt=""/>
          </a>
          <div className="row">
          <div className="d-flex flex-row">
              <ul className="nav mr-auto">
              <li className = "nav-item">
                      <Link to="/Search" className = "nav-link"  >
                          <FontAwesomeIcon icon ={faSearch} className="fa-Search fa-lg"/>
                      </Link>
                  </li>
                  <li className="nav-item active">
                      <Link className="nav-link" to="/">
                          <FontAwesomeIcon icon ={faHome} id = "Home" className="fa fa-Home fa-lg"/>
                          <span className="sr-only">(current)</span>
                      </Link>       
                  </li>
                  <li className = "nav-item">
                      <Link className = "nav-link" to ="/post/create" >
                          <FontAwesomeIcon icon ={faPlusSquare} className="far fa-plus-square fa-lg"/>
                      </Link>
                  </li>
                  <li className = "nav-item">
                    <Link  className = "nav-link">
                      <FontAwesomeIcon icon ={faCompass} className=" far fa-compass fa-lg"/>
                    </Link>
                  </li>
                  <li className = "nav-item">
                    <Link  className = "nav-link">
                      <FontAwesomeIcon icon ={faHeart} className=" far fa-heart fa-lg"/>
                    </Link>
                  </li>
                  <li className = "nav-item">
                      <Link to="/profile" className="nav-link">
                          <MenuAvatar/>
                      </Link>
                  </li>
              </ul>
          </div>
          </div>
      </nav>
      </div>
  
  )
};


export default Menu;