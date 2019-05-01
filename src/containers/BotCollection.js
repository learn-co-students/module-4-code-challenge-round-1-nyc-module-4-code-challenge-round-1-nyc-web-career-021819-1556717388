import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

  renderTheBots = () => {
    if (!this.props.foundBot) {
      return this.renderBots()
    } else {
      return this.renderDisplay()
    }
  }

  renderBots = () => {
    return this.props.bots.map(robot => <BotCard key= {robot.id} bot={robot} handleClick={this.props.handleClick} />)
  }

  renderDisplay = () => {
    return <BotSpecs bot={this.props.foundBot} handleAddBot={this.props.handleAddBot} handleGoBack={this.props.handleGoBack} />
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderTheBots()}
    		</div>
  	  </div>
  	);
  }
};

export default BotCollection;
