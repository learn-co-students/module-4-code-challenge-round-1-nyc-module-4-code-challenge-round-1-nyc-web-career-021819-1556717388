import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderSelectedRobots = () => {
    console.log("Army Robots")

      // return this.props.robotArray.filter(robot => robot.inRobotArmy)

    const armyRobots = this.props.robotArray.map(robot => {
      if (robot.inRobotArmy) {
        return(
          <BotCard
            key={robot.id}
            bot={robot}
            handleClick={this.props.handleDeselectClick}
          />
        )}
      })
      return armyRobots
    }



  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          {this.renderSelectedRobots()}

          )}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
