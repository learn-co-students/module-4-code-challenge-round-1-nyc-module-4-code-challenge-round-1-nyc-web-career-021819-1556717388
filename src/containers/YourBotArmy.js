import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderBotArmy() {
    const myArmy = this.props.bots.filter(bot => bot.enlisted)
    console.log(myArmy)
		return myArmy.map(bot => (<BotCard bot={bot} handleClick={this.props.handleClick}/>))
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
