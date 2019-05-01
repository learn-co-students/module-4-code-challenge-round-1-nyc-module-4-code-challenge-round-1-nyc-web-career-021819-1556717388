import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {
  //start here with your code for step one

  state ={
    bots: [],
    botArmy: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res =>res.json())
    .then(data =>
    this.setState({
      bots: data
    }))
  }


  handleClick = (e) => {
    const selectedBot = this.state.bots.find(bot =>
      bot.id === parseInt(e.target.id))
      if (!this.state.botArmy.includes(selectedBot)){
        this.setState({
          botArmy: [...this.state.botArmy, selectedBot]
    })
    }
  }

  handleArmyClick = (e) => {
    const botIndex = this.state.botArmy.findIndex(bot =>
      bot.id === parseInt(e.target.id))
    let newBotArmy = [...this.state.botArmy]
    const newerBotArmy = newBotArmy.splice(botIndex, 1)
    this.setState({
      botArmy: newBotArmy
    })
    }


  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleArmyClick} bots={this.state.botArmy}/>
        <BotCollection handleClick={this.handleClick} bots={this.state.bots}/>
      </div>
    );
  }

}

export default BotsPage;
