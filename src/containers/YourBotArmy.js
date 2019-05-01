import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  removeBot = (bot) => {
    this.props.botHandler(bot)
  }

  render(){
    let botArmy = this.props.botArmy.map(bot => <BotCard bot={bot} key={bot.id} botHandler={() => this.removeBot(bot)}/>)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {botArmy}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
