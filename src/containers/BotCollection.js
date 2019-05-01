import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderRobotArray= () => {
    const robotArray = this.props.robotArray.map(robot => {
      return(
        <BotCard
          key={robot.id}
          bot={robot}
          handleClick={this.props.handleClick}
        />
      )
    })
    return robotArray
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderRobotArray()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
