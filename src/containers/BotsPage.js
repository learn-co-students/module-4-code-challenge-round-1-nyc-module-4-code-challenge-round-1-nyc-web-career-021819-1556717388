import React from 'react';
import BlotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';

class BotsPage extends React.Component {
	//start here with your code for step one
	state = {
		bots: [],
		army: []
	};

	componentDidMount() {
		fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
			.then((res) => res.json())
			.then((json) => this.setState({ bots: json }));
	}

	addBot = (botId) => {
		// 	console.log('im here!', botId);
		const foundbot = this.state.bots.find((bot) => bot.id === botId);
		// console.log(foundbot);
		const newBots = this.state.bots.filter((bot) => bot.id !== foundbot.id);

		this.setState({
			bots: newBots,
			army: [ ...this.state.army, foundbot ]
		});
	};
	render() {
		// console.log(this.state.bots);
		return (
			<div>
				<YourBotArmy army={this.state.army} />
				<BlotCollection bots={this.state.bots} addBot={this.addBot} />
			</div>
		);
	}
}

export default BotsPage;
