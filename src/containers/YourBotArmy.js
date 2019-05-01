import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render() {
    const { army } = this.props
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {army.map(bot => <BotCard bot={bot} key={bot.id} handleBot={this.props.handleBot} />)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
