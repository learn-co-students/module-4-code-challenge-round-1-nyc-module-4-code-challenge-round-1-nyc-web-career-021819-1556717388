import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    enlistedBots: [],
    selectedBot: []
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

      this.setState({
        selectedBot: botObj
      })

    }

    handleEnlistButton = (botObj) => {
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
    }

    handleBackButton = (botObj) => {
      this.setState({
        selectedBot: []
      })
    }

    botSpecs = () => {
        return < BotSpecs
          bot={this.state.selectedBot}
          handleEnlistButton={this.handleEnlistButton}
          handleBackButton={this.handleBackButton}
        />
      }


  render() {
    console.log('selected bot is', this.state.selectedBot)
    return (
      <div>
        < YourBotArmy
          bots={this.state.bots}
          handleBotCardClick={this.handleBotCardClick}
        />

        {this.state.selectedBot ? this.botSpecs() : null}

        < BotCollection
          bots={this.state.bots}
          handleBotCardClick={this.handleBotCardClick}
        />
      </div>
    );
  }

}

export default BotsPage;
