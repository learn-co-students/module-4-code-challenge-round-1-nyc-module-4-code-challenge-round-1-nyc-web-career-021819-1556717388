import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...
  renderBotArmy=()=>{
    return this.props.botArmy.map(b => <BotCard key={b.id} bot={b}/>)
  }

  render(){
    console.log(this.props.botArmy);
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
          BotArmy List
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
