import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./ShowLottery.css";
import Lottery from "./Lottery";




class ShowLottery extends Component {

 
  render (){
    return (
			
		   <div className="container">
			<Link className="show-lotto-header" to="/"> <i className="fas fa-angle-double-left show-lotto-arrow"></i>Go back </Link>
			 <div className="row justify-content-center">
				 
			 <div className="col-md-7 pt-5 pb-5 text-center show-lotto-border">
				 
				 <div className="d-inline-block"><Link to="/project-mini"><i className="fas fa-angle-left show-lotto-left-arrow"></i></Link></div>
				 
				 <div className="d-inline-block">
				  <Lottery />
				 </div>	 
				 
				 
			</div>
				 
			 
 			 
				 
 			  </div>
 			</div>
    )
  }
}
export default ShowLottery;


