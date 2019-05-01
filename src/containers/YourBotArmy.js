import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderBotCards = () => {

    let filteredBots = this.props.bots.filter( bot => {
      return bot.enlisted === true
    })

    return filteredBots.map( bot => {
      return <BotCard
        bot={bot}
        key={bot.id}
        handleBotCardClick={this.props.handleBotCardClick}
      />
    })
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotCards()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
