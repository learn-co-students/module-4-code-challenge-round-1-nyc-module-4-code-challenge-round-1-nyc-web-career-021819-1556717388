import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {

  state = {
    bots: [], 
    botArmy: []
  }
  
 fetchBots = () => {
   fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
   .then(resp => resp.json())
   .then(bots => this.setState({
     bots: bots
   }))
 }
 componentDidMount () {
   this.fetchBots()
 }

 handleClickBot = (bot) => {
  let newBotArmy = [...this.state.botArmy, bot ]
  this.setState({botArmy: newBotArmy})
 }

  render() {
    console.log(this.state)
    return (
      <div>
       <BotCollection bots={this.state.bots} onClick={this.handleClickBot} />
       <YourBotArmy newBotArmy={this.state.botArmy} />
      </div>
    );
  }

}

export default BotsPage;
