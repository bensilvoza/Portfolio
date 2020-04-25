import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./Portfolio.css";


class Portfolio extends Component {


	

  render (){
    return (
		
		  <div>
		
			<div className="container">
			<div className="row">
			  <div className="col-md-7">
				  <h1>Hello</h1>
			      <p className="portfolio-a">My name is Chris Cale.</p>
			      <p className="portfolio-b">I am a full stack web developer. My lifelong passion for coding lead me to start learning and how to build web apps years ago,
                                     most of my <span><Link className="portfolio-projects" to="/project-dashboard">projects</Link></span> is open source and publicly available on <span><a className="portfolio-github" href="https://github.com/chrisnetto?tab=repositories">GitHub</a></span>.</p>
				  <p className="portfolio-c">Outside of programming I'm helping my family take care of our small farm I enjoy physical games, karaoke and pretty that's it for me.</p>  
				  <p className="portfolio-d">Let's be friends.</p>
				  <p className="portfolio-e">Got a question? I'll always glad to respond! just reach me at christiansilvoza@yahoo.com my mobile number +63 912 764 4281</p>
				  

				  
			  </div>
			</div>
		  </div>
		
			
		</div>	
    )
  }
}
export default Portfolio;
