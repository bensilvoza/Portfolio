import React, {Component} from "react";
import Navbar from "./Navbar";
import "./Blog.css";







class Blog extends Component {

 
  render (){
    return (
			
		   <div className="container">
			 <div className="row">
				 
				 
			 <div className="col-md-4">
				 <Navbar />
 			 </div>
				 
			
			<div className="col-md-6">
				 <div className="card border-dark blog-margin">
				  <div className="card-header">Blog site</div>
				  <div className="card-body text-dark">
					<h2 className="blog-title">Blog</h2>
					<p className="blog-p">This is more focus on RESTful Routes by building a fully functional Blog app with CRUD. I also used a framework called Bootstrap.</p>
					<div className="blog-anchor"><a class="blog-anchor-learn-more align-self-center" href="https://github.com/">Learn more</a> <span><i class="fas fa-long-arrow-alt-right blog-arrow-inside"></i></span> </div>  
				  </div>
				</div>
 			 </div>	 
				 
			
			
 			 
				 
 			  </div>
 			</div>
				  
			 
		
    )
  }
}
export default Blog;


