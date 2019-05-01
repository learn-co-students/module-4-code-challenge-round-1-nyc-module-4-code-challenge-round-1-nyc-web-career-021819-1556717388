import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'


class BotsPage extends React.Component {
  
  state = { 
    robots: [],
    yourArmy: []
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(robotData => {
      this.setState({
        robots: robotData
      })
    })
  }

  addToYourArmy = (id) => {
    const addRobot = this.state.robots.find(robot => robot.id === id )
    this.setState({
      yourArmy: [...this.state.yourArmy, addRobot]
    })
  }

  removeFromArmy = (id) => {
    const removeRobot = this.state.yourArmy.filter(robot => robot.id !== id)
    this.setState({
      yourArmy: removeRobot
    })
  }

  render() {

    console.log(this.state.yourArmy)
    return (
      <div>
        < YourBotArmy yourArmy={this.state.yourArmy} removeFromArmy={this.removeFromArmy}/>
        < BotCollection robots={this.state.robots} addToYourArmy={this.addToYourArmy} removeFromArmy={this.removeFromArmy}/>
      </div>
    );
  }

}

export default BotsPage;
