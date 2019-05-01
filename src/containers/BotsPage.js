import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots: [],
    botArmy: [],
    chosenBot: null
  }

  handleClick = botID => {
    let chosenBot = this.state.bots.find(bot => bot.id === botID)
    this.setState({ chosenBot })


    // if (!this.state.botArmy.includes(chosenBot)) {
    //   this.setState({
    //     botArmy: [...this.state.botArmy, chosenBot]
    //   })
    // } else {
    //   this.handleRemoveBot(chosenBot)
    // }
  }

  // if the bot is in the army, remove it
  // handleRemoveBot = chosenBot => {
  //   let newBotArmy = this.state.botArmy.filter(bot => bot !== chosenBot)
  //   this.setState({
  //     botArmy: newBotArmy
  //   })
  // }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(res => res.json())
      .then(bots => this.setState({ bots }))
  }

  handleBackClick = () => {
    this.setState({
      chosenBot: null
    })
  }

  handleEnlistClick = botID => {
    let chosenBot = this.state.bots.find(bot => bot.id === botID)
    if (!this.state.botArmy.includes(chosenBot)) {
      this.setState({
        botArmy: [...this.state.botArmy, chosenBot]
      })
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.handleClick} botArmy={this.state.botArmy} />
        {this.state.chosenBot ? <BotSpecs handleEnlistClick={this.handleEnlistClick} handleBackClick={this.handleBackClick} bot={this.state.chosenBot}/> : <BotCollection botArmy={this.state.botArmy} handleClick={this.handleClick} bots={this.state.bots} /> }
      </div>
    );
  }

}

export default BotsPage;
