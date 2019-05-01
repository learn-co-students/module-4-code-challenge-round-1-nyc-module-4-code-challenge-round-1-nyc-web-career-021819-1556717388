import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {

  state = {
    bots: [],
    mybots: [],
    selectedBot: {},
    bottomPage: "BotCollection"
  }

  componentDidMount() {
    (async () => {
      const resp = await fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      const bots = await resp.json()
      this.setState({bots: bots}, () => (console.log(this.state.bots)))
    })()
  }

  handleClick = (e, botId) => {
    console.log("clicked!", e.target, botId)
    const selectedBot = this.state.bots.find(bot => bot.id === botId)
    this.setState({
      bottomPage: "BotSpecs",
      selectedBot: selectedBot
    })
  }

  handleEnlist = (e, botId) => {
    const enlistedBot = this.state.bots.find(bot => bot.id === botId)
    const enlistedBotIndex = this.state.bots.indexOf(enlistedBot)
    this.setState(prevState => ({
      selectedBot: {},
      bottomPage: "BotCollection",
      bots: [...prevState.bots.slice(0, enlistedBotIndex), {...enlistedBot, enlisted: !enlistedBot.enlisted}, ...prevState.bots.slice(enlistedBotIndex + 1)]
    }))
  }

  handleGoBack = (e, botId) => {
    this.setState({
      selectedBot: {},
      bottomPage: "BotCollection"
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.bots} handleClick={this.handleClick} />
        {this.state.bottomPage === "BotCollection" ? <BotCollection bots={this.state.bots} handleClick={this.handleClick} /> : <BotSpecs bot={this.state.selectedBot} handleEnlist={this.handleEnlist} handleGoBack={this.handleGoBack} />}
      </div>
    );
  }

}

export default BotsPage;
