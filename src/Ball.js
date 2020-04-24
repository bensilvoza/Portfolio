import React, {Component} from "react";
import "./Ball.css";


class Ball extends Component {
  render() {
    //console.log(this.props);
    return (
       <div className="ball-main">
          <div className="ball-div">{this.props.num}</div>
       </div>
    )
  }
}
export default Ball;
