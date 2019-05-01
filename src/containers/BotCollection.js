import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots() {
    return this.props.bots.map(bot => <BotCard botArmy={this.props.botArmy} handleClick={this.props.handleClick} key={bot.id} bot={bot} />)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
