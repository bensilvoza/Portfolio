import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Dashboard.css";







class Dashboard extends Component {

 
  render (){
    return (
			
		   <div className="container">
			<Link className="dashboard-header" to="/"> <i className="fas fa-angle-double-left dashboard-arrow"></i>Go back </Link>
			 <div className="row mt-5">
				 
			
				 
			 <div className="col-md-3 p-2"> 
				 <i class="fas fa-campground camp-inside"></i>
				 <p className="getcamp-title">Getcamp</p>
				 <p className="getcamp-desc">This is my flagship project, It aims to know integration of front end and back end to make a full fledged application with CRUD functionalities using Database, REST APIS and authentication.</p>
				 <p className="getcamp-desc">To see in action, go to <span> <a className="camp-link-inside" href="https://cryptic-dusk-02038.herokuapp.com">Getcamp</a> </span></p>
		  </div>
				 
			
				 
			 <div className="col-md-3 p-2">
				 	 
				 <i className="fas fa-code blog-inside"></i>
				 <p className="getcamp-title">Blog</p>
				 <p className="getcamp-desc">This is more focus on RESTful routes by building a fully functional <span> <a className="blog-link-inside" href="https://fathomless-dusk-98566.herokuapp.com/blogs">Blog</a> </span> app with CRUD, I also used Google fonts and Font awesome instead of default and having a features that users can able to create, update and delete blog.</p>  
 			 </div>
				
				 
			
			
			 <div className="col-md-3 p-2">
				 	 
				 <i className="fas fa-gamepad mini-inside"></i>
				 <p className="getcamp-title">Mini games</p>
				 <p className="getcamp-desc">All of my fun and lonely mini games is a React Js built application, I used create-react-app starter kit to setup my project. It has some of the bells and React whistles with basic animations, styling and more that I am included in my <span><Link className="mini-link-inside" to="/project-mini">mini games</Link></span> if you don't mind have a look at it.</p>
				
			</div>
				 
				 
				 
				 
			<div className="col-md-3 p-2">
				
					
				<i className="fas fa-list-ul todos-inside"></i>
				 <p className="getcamp-title">Todos</p>
				 <p className="getcamp-desc">Todos is also a React Js built application. A simple component in this project that uses state to track the current list of items as well as the text that the user has entered, check my <span><Link className="todos-link-inside" to="/project-todos">todos</Link></span> and create some list.</p>
			 
			</div> 
			
			
			
			
 			 
				 
 			  </div>
 			</div>
    )
  }
}
export default Dashboard;


