import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./ShowTodos.css";
import Todos from "./Todos";




class ShowTodos extends Component {

 
  render (){
    return (
			
		   <div className="container">
			<Link className="show-todos-header" to="/"> <i className="fas fa-angle-double-left show-todos-arrow"></i>Go back </Link>
			 <div className="row justify-content-center">
				 
			 <div className="col-md-7 pt-5 pb-5 text-center show-todos-border">
				 
				 
				 <div className="d-inline-block">
				  <Todos />
				 </div>	 
				 
				 
			</div>
				 
			 
 			 
				 
 			  </div>
 			</div>
    )
  }
}
export default ShowTodos;


