import React, {Component} from "react";
import {Link} from "react-router-dom";

import "./Navbar.css";


class Navbar extends Component {

  
  render (){
    return (
			
		     <div className="navbar-main-styling">
				 <Link className="navbar-back" to="/"><i className="fas fa-chevron-left navbar-arrow" /> Go back</Link>
				 <Link className="navbar-font-a mt-4" to="/project-main">Main</Link>
				 <Link className="navbar-font-a" to="/project-blog">Blog</Link>
				 <Link className="navbar-font-a" to="/project-todos">Todos</Link>
				 <Link className="navbar-font-a" to="/project-dice">Dice game</Link>
				 <Link className="navbar-font-a" to="/project-lottery">Lottery</Link>
				 <Link className="navbar-font-a" to="/project-card">Contact card</Link>
				 <Link className="navbar-font-a" to="/project-color">Color guessing</Link>
			

		</div>
		
    )
  }
}
export default Navbar;


