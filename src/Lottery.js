import React, {Component} from "react";
import "./Lottery.css";
import Ball from "./Ball";



class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    balls: 6,
    maxNumber: 99
  }
  constructor(props){
    super(props);
    this.state = { nums: Array.from({length: this.props.balls}) };
    this.handleClick = this.handleClick.bind(this);
  }
  generate() {
    this.setState( everyValue => ({
     nums: everyValue.nums.map( n => Math.floor(Math.random() * this.props.maxNumber) + 1 ) 
    }));
  }
  handleClick() {
    this.generate();
  }
  render (){
    return (
       <div className="d-inline-block text-center">
         <h2 className="lottery-title mb-5">{this.props.title}</h2>
         <div>    
			{ this.state.nums.map(n => <Ball num={n} /> ) }					 
         </div>
         <button className="mt-2 lottery-button" onClick={this.handleClick}>Generate</button>
       </div>
    )
  }
}
export default Lottery;
