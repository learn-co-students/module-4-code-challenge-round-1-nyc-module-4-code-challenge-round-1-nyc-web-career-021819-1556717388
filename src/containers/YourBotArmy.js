import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderYourArmy = () => {
    return this.props.yourArmy.map(robot => {
      return <BotCard onClick={this.removeBot} bot={robot} /> 
    })
    }
  
    removeBot = () => {
      this.props.removeFromArmy()
    }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {this.renderYourArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
