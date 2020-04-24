
import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Portfolio from "./Portfolio";
import Dashboard from "./Dashboard";
import MiniGames from "./MiniGames";
import ShowLottery from "./ShowLottery";
import ShowTodos from "./ShowTodos";





class App extends Component {
  render (){
    return (
      <div>
			
		
		<Switch>
			<Route exact path="/" component={Portfolio} />
			<Route exact path="/project-dashboard" component={Dashboard} /> 
			<Route exact path="/project-mini" component={MiniGames} />
			<Route exact path="/project-lottery" component={ShowLottery} />
			<Route exact path="/project-todos" component={ShowTodos} />
		</Switch>
        
      </div>
    )
  }
}
export default App;
