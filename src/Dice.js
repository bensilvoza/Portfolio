import React, {Component} from "react";
import "./Dice.css";



class Dice extends Component {
	
	//constructor
	constructor(props) {
		super(props);
		this.state = { diceOne: "fa-dice-six", diceTwo: "fa-dice-six" };
		this.handleDice = this.handleDice.bind(this);
	}
	
	//some function
	  handleDice() {
		var allDice = ["fa-dice-one", "fa-dice-two", "fa-dice-three", "fa-dice-four", "fa-dice-five", "fa-dice-six"];   
		var randomOne = Math.floor(Math.random() * 6);
		var randomTwo = Math.floor(Math.random() * 6);
		  
		this.setState( { diceOne: allDice[randomOne] } );
		this.setState( { diceTwo: allDice[randomTwo] } );
	 }

 
  render (){
    return (
			
			
			<div className="text-center">
				<h2 className="dice-title">Dice game</h2>
				
				<div className="dice-one mr-4">
					<i className={`fas ${this.state.diceOne} dice-inside`} ></i>
				</div>
				
				<div className="dice-two">
					<i className={`fas ${this.state.diceTwo} dice-inside`} ></i>
				</div>
				
				<br />
				<button className="dice-button" onClick={this.handleDice}> Roll </button>
				
 			 </div>	 
				 
			
				  
			 
		
    )
  }
}
export default Dice;


