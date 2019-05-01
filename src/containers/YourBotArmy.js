import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  renderBotArmy = () => {
    let botArmyArray = this.props.botArmy.map((bot) => {
      return   <BotCard key={bot.id} bot={bot}/>
    })
    return botArmyArray
  }
  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
