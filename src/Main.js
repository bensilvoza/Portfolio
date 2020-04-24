import React, {Component} from "react";
import Navbar from "./Navbar";
import "./Main.css";







class Main extends Component {

 
  render (){
    return (
			
		   <div className="container">
			 <div className="row mt-5">
				 
				 
			 <div className="col-md-4 main-border-right">
				 <Navbar />
 			 </div>
				 
			
			<div className="col-md-6">
				<div className="p-4">
					<h2 className="main-title">Getcamp</h2>
					<p className="main-p">This is my flagship project, It aims to know integration of front end and back end to make a full fledged application with CRUD functionalities using Database, REST APIS and authentication.</p> 
					 
					<h2>Live Demo</h2>
					<p className="main-p">To see the app in action, go to <a href="/">Getcamp</a></p>  
					<div className="main-anchor"><a className="main-anchor-learn-more align-self-center" href="https://github.com/">Learn more</a> <span><i className="fas fa-long-arrow-alt-right main-arrow-inside"></i></span> </div>
					</div>
				  </div>
				 
			
			
 			 
				 
 			  </div>
 			</div>
				  
			 
		
    )
  }
}
export default Main;


