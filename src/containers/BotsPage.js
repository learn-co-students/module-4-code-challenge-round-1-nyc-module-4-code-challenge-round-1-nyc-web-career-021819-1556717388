import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: []
  }

  handleClick = botID => {
    let chosenBot = this.state.bots.find(bot => bot.id === botID)
    console.log(botID);
    if (!this.state.botArmy.includes(chosenBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, chosenBot]
      })
    } else {
      this.handleRemoveBot(chosenBot)
    }
  }

  // if the bot is in the army, remove it
  handleRemoveBot = chosenBot => {
    let newBotArmy = this.state.botArmy.filter(bot => bot !== chosenBot)
    this.setState({
      botArmy: newBotArmy
    })
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  render() {
    console.log(this.state.botArmy);
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} botArmy={this.state.botArmy} />
        <BotCollection botArmy={this.state.botArmy} handleClick={this.handleClick} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
