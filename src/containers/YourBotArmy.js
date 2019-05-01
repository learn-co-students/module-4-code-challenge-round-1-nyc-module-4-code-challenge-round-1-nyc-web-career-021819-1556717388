import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBots = ( ) => {
    return this.props.bots.map( bot => {
      return <BotCard bot={bot} key={bot.id} handleClick={this.props.handleClick}/>
    })
  }

  render(){
    console.log(this.props.handleClick)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBots()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
