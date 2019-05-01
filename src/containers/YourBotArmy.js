import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  //render all bots form the army array passed in
  //passes in the click handle function to remove from the army
  renderAllBots = () => {
    return this.props.armyBots.map(bot => {
      return <BotCard key={bot.id} bot={bot} removeFromArmy={this.props.removeFromArmy}/>
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderAllBots()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
