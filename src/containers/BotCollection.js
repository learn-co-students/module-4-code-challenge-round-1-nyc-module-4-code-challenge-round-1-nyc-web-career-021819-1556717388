import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBotCards = () => {
    return this.props.bots.map( bot => {
      return <BotCard
        bot={bot}
        key={bot.id}
        handleBotCardClick={this.props.handleBotCardClick}
      />
    })
  }

  render(){
    // console.log('botsCollection', this.props.bots)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		{this.renderBotCards()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
