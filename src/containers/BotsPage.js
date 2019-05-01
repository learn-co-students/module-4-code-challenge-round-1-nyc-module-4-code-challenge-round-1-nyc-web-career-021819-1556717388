import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one


//   armor: 63
// avatar_url: "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
// bot_class: "Support"
// catchphrase: "1010010101001101100011000111101"
// created_at: "2018-10-02T19:55:10.800Z"
// damage: 20
// health: 94
// id: 101
// name: "wHz-93"
// updated_at: "2018-10-02T19:55:10.800Z"

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
    console.log("clicked!", e.target, botId)
    // refactor to find index
    const enlistedBot = this.state.bots.find(bot => bot.id === botId)
    const enlistedBotIndex = this.state.bots.indexOf(enlistedBot)
    console.log("bot", enlistedBot, "index", enlistedBotIndex)
    // Can refactor to make not unenlist when selected from full collection but like this
    this.setState(prevState => ({
      selectedBot: {},
      bottomPage: "BotCollection",
      bots: [...prevState.bots.slice(0, enlistedBotIndex), {...enlistedBot, enlisted: !enlistedBot.enlisted}, ...prevState.bots.slice(enlistedBotIndex + 1)]
    }), () => console.log("updated bot", enlistedBot, "bots", this.state.bots))
  }

  handleGoBack = (e, botId) => {
    this.setState({
      selectedBot: {},
      bottomPage: "BotCollection"
    })
  }

  // handleEnlist = (e, botId) => {
  //   console.log("clicked!", e.target, botId)
  //   // refactor to find index
  //   const enlistedBot = this.state.bots.find(bot => bot.id === botId)
  //   const enlistedBotIndex = this.state.bots.indexOf(enlistedBot)
  //   console.log("bot", enlistedBot, "index", enlistedBotIndex)
  //   // Can refactor to make not unenlist when selected from full collection but like this
  //   this.setState(prevState => ({
  //     bots: [...prevState.bots.slice(0, enlistedBotIndex), {...enlistedBot, enlisted: !enlistedBot.enlisted}, ...prevState.bots.slice(enlistedBotIndex + 1)]
  //   }), () => console.log("updated bot", enlistedBot, "bots", this.state.bots))
    
  //   // set state of that particular bot to recruited
  //   // render recruited bots in your bot army
  //   this.setState
  // }

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
