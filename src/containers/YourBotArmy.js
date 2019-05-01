import React from "react";
import BotArmyCard from "../components/BotArmyCard";

class YourBotArmy extends React.Component {


  renderBotArmy() {
    return this.props.botArmy.map(bot => <BotArmyCard handleRemoveBot={this.props.handleRemoveBot} botArmy={this.props.botArmy} handleClick={this.props.handleClick} key={bot.id} bot={bot}/>)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
