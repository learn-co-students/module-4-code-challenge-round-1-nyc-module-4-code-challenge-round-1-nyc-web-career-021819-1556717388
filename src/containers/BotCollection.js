import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
		console.log(this.props)
		let renderBots = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} onClick={this.props.handleClickBot} />)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {renderBots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
