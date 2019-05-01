import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(bots => this.setState(
      {bots:
        bots.map(bot=> Object.assign(bot,{recruited: false}))}
      )
    )
    // couldn't get a spread operator to work here for some reason
  }

  recruitBot = (id) => {
    this.setState(
    {bots: this.state.bots.map(
      bot=> bot.id === id ? {...bot, recruited: true} : bot
    )})
  }

  recruitedBots = () => this.state.bots.filter(bot=> bot.recruited)
  availableBots = () => this.state.bots.filter(bot=> !bot.recruited)

  render() {
    return (
      <div>
        {this.state.bots.length>0 && <YourBotArmy bots={this.recruitedBots()}/>}
        {this.state.bots.length>0 && <BotCollection recruitBot={this.recruitBot} bots={this.availableBots()}/>}
      </div>
    );
  }

}

export default BotsPage;
