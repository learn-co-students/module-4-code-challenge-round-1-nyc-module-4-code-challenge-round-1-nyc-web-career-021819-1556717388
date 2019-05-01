import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
  //your code here


  renderBots = () => this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} selectBot={this.props.selectBot}/>)

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		</div>
  	  </div>
  	)
  }
};

export default BotCollection;
