import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBots = () => this.props.bots.map(bot => {
    return <BotCard
    bot={bot}
    key={bot.id}
    handleClick={this.props.addArmyBot}
    botsInArmy={this.props.botsInArmy}
    />
  })

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
