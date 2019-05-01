import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy"
const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"

class BotsPage extends React.Component {

  state = {
    botsList: []
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(json => {
      this.setState({ botsList: json })
    })
  }

// Frustratingly, I was unable to setState within my fetch request despite me confirming that my fetch worked through console.logs, and I spent most of the time trying to resolve this issue, hindering me from moving forward. I'm sure there's something that I'm missing, but I'm still not sure exactly since it appeared that this setState method worked during the review of the practice yesterday.

  render() {
    // console.log(this.botsList)
    return (
      <div>
        <YourBotArmy />
        <BotCollection props={this.props.botList} />
      </div>
    );
  }

}

export default BotsPage;
