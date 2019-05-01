import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    let allBots = this.props.bots.map(bot => <BotCard bot={bot} key={bot.id} botHandler={this.props.botHandler} specs={this.props.specs}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {allBots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
