import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  renderBots = () => {
  let botCardArray = this.props.currentBots.map((bot)=>{
      return <BotCard enlistBot={this.props.enlistBot} key={bot.id} bot={bot}/>
    })
    return botCardArray

  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBots()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
