import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  renderRobots = () => {
		return this.props.robots.map(robot => {
			return <BotCard key={robot.id} bot={robot} addToYourArmy={this.props.addToYourArmy} removeFromArmy={this.props.removeFromArmy}/>
		})
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderRobots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
