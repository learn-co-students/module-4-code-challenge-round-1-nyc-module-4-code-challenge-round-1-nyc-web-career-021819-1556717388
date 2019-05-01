import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
 const URL = 'https://bot-battler-api.herokuapp.com/api/v1/bots'

class BotsPage extends React.Component {
  //start here with your code for step one

      state = {
      allBots:[],
      botArmy: []
    }

///I had a function built out to remove the bot but somehow I couldn't get it working. Everything works until you try to remove it from the botArmy. You cannot add a bot twice however. 



  // removeBot = (previousArray, bot) => {
  //   let newArray = previousArray.filter(robot=> robot.id !== bot.id)
  //   return newArray
  // }


  enlistBot = (bot) => {
    if (this.state.botArmy.includes(bot))
    {
      alert ("This bot is already in your army!")
    }
    else {
    this.setState(prevState => ({
        botArmy: [...prevState.botArmy, bot]
      }))
    }
  }




  fetchAndSetBots = () => {
    fetch(URL)
    .then(res => res.json())
    .then(allBots => {
      this.setState({
        allBots: allBots
      })
    })
  }

  componentDidMount = () => {
  this.fetchAndSetBots()
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy}/>
        <BotCollection enlistBot={this.enlistBot} currentBots={this.state.allBots} />
      </div>
    );
  }

}

export default BotsPage;
