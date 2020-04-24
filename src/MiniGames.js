import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./MiniGames.css";
import Dice from "./Dice";




class MiniGames extends Component {

 
  render (){
    return (
			
		   <div className="container">
			<Link className="mini-header" to="/"> <i class="fas fa-angle-double-left mini-arrow"></i>Go back </Link>
			 <div className="row justify-content-center">
				 
			 <div className="col-md-7 pt-5 pb-5 text-center mini-games-border">
				 
				 
				 <div className="d-inline-block">
				  <Dice />
				 </div>	 
				 
				 <div className="d-inline-block"><Link to="/project-lottery"><i class="fas fa-angle-right mini-right-arrow"></i></Link></div>
				 
			</div>
				 
			 
 			 
				 
 			  </div>
 			</div>
    )
  }
}
export default MiniGames;


