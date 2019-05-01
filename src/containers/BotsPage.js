import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  //start here with your code for step one

  state={
    bots: [],
    selectedBot: {}
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

  selectBot = (bot) => this.setState({selectedBot: bot})
  unselectBot = () => this.setState({selectedBot: {}})


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
        {this.state.bots.length>0 && <YourBotArmy selectBot={this.selectBot}  bots={this.recruitedBots()}/>}
        {this.state.selectedBot.id ?
          <BotSpecs bot={this.state.selectedBot} recruitBot={this.recruitBot} unselectBot={this.unselectBot}/> :
          this.state.bots.length>0 &&
            <BotCollection selectBot={this.selectBot} bots={this.availableBots()}/>}
      </div>
    );
  }

}

export default BotsPage;
