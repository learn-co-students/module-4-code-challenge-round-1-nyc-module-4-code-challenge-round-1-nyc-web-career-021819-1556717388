import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  //map through the bots array being passed down
  renderAllBots = () => {
    return this.props.bots.map(bot => {
      return <BotCard key={bot.id} bot={bot} enlist={this.props.enlist}/>
    })
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          {this.renderAllBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
