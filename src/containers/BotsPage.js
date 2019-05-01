import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"


class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    robotArray: [],
    selectedRobots: []
  }


  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      const updatedRobots = data.map(robot => {
        return {
          ...robot,
          inRobotArmy: false
        }
      })
      this.setState({
        robotArray: updatedRobots

      })
          console.log(updatedRobots)
    })
  }


  handleClick = id => {
    const foundRobot = this.state.robotArray.find(robot => robot.id === id)
    console.log(foundRobot)
    if (!foundRobot.inRobotArmy) {
    const updatedRobots = this.state.robotArray.map(robot => {
      if (robot === foundRobot) {
              return { ...robot, inRobotArmy: true }
            } else {
              return robot
            }
          });
          this.setState({
            robotArray: updatedRobots
          })
          console.log(updatedRobots)
        }
      }

      handleDeselectClick = id => {
        const foundRobot = this.state.robotArray.find(robot => robot.id === id)
        console.log(foundRobot)
        if (foundRobot.inRobotArmy) {
        const updatedRobots = this.state.robotArray.map(robot => {
          if (robot === foundRobot) {
                  return { ...robot, inRobotArmy: false }
                } else {
                  return robot
                }
              });
              this.setState({
                robotArray: updatedRobots
              })
              console.log(updatedRobots)
            }
          }


      // armyRobots() {
      //   return this.state.robotArray.filter(robot => robot.inRobotArmy)
      // }

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy
          selectedBots={this.state.selectedRobots}
          robotArray={this.state.robotArray}
          handleDeselectClick={this.handleDeselectClick}
        />
        <BotCollection
          robotArray={this.state.robotArray}
          handleClick={this.handleClick}
        />
      </div>
    )
  }

}

export default BotsPage;
