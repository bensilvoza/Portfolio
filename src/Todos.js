import React, {Component} from "react";
import "./Todos.css";
import Navbar from "./Navbar";
import uniqueId from "./uniqueId";



class Todos extends Component {
	
	//constructor
	constructor(props) {
		super(props);
		this.state = { temp: "", items: [{name: "Cappuccino", id: uniqueId()}, {name: "Café Latte", id: uniqueId()}, {name: "Double Espresso", id: uniqueId()}] };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	//some function
	handleChange(e) {
    this.setState( {temp: e.target.value} );
   }
	  handleSubmit(e) {
		e.preventDefault();
		this.setState(state => ({
		  items: [...state.items, {name: this.state.temp, id: uniqueId()}]
		}));

		this.setState( {temp: ""} );
	 }

 
  render (){
    return (
			
				 
			
			<div className="text-center d-inline-block">
				<h2 className="todos-p-a">Todos</h2>
				 <div className="todos-border">
					  <ul className="todos-ul">
					  {this.state.items.map(item => (
						 <li key={item.id}> {item.name} </li>
					   ))}
					  </ul>
					 
					 <form className="todos-form" onSubmit={this.handleSubmit}>
					   <input className="todos-input" type="text" value={this.state.temp} onChange={this.handleChange} />
					   <button><i className="fas fa-plus todos-plus"></i></button>
				     </form>
					 
					 
					 
				</div>
 			 </div>	 
				 
			
				 
 			  
				  
			 
		
    )
  }
}
export default Todos;


