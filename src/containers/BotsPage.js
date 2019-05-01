import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  //setting state
  state = {
    bots: [],
    army: []
  }

  //fetch Bots
  getAllBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(response => response.json())
    .then(data => {
      this.setState ({
        bots: data
      })
    })
  }

  //click handler to add from collection to the army
  //needs to grab the specific bot clicked
  handleEnlist = (bot) => {
    if (!this.state.army.includes(bot)) {
      this.setState ({
        army: [...this.state.army, bot]
      })
    }
  }

  handleRemoveFromArmy = (botObj) => {
    const removed = [...this.state.army].filter(bot => {
      return bot.id !== botObj.id
    })
    this.setState ({
      army: removed
    })
  }

  componentDidMount() {
    this.getAllBots()
  }

  render() {
    return (
      <div>
        <YourBotArmy armyBots={this.state.army} removeFromArmy={this.handleRemoveFromArmy}/>
        <BotCollection bots={this.state.bots} enlist={this.handleEnlist}/>
      </div>
    );
  }

}

export default BotsPage;
