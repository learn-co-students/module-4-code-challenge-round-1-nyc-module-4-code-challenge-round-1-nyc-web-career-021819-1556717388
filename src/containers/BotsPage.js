import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then( res => res.json())
        .then ( bots => {
          const updatedbots= bots.map( bot => {
            return {
              ...bot,
              enlisted: false
            }
          })
          this.setState({
            bots: updatedbots
          })
        })
    }

    handleBotCardClick = (botObj) => {

      const foundBot = this.state.bots.find( bot => {
        return bot === botObj
      })

      const updatedbots = this.state.bots.map( bot => {

        if( bot === foundBot) {
          return {...bot, enlisted: !bot.enlisted}
        } else {
          return bot
        }
      })

      this.setState({
        bots: updatedbots
      })
      console.log('found bot is', updatedbots)
    }


  render() {
    console.log(this.state.bots)
    return (
      <div>
        < YourBotArmy
          bots={this.state.bots}
          handleBotCardClick={this.handleBotCardClick}
        />

        < BotCollection
          bots={this.state.bots}
          handleBotCardClick={this.handleBotCardClick}
        />
      </div>
    );
  }

}

export default BotsPage;
