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

	handleClick = (botId) => {
		//i need to use handle click to manage both adding and removing the bots after added to my army.
		//i got my functionality working adding my bots to armys

		if (this.state.bots.includes(botId)) {
			addBot(botId);
		} else {
			removeBot(botId);
		}
	};

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

	removeBot = (botId) => {
		const foundbot = this.state.bots.find((bot) => bot.id === botId);
		// console.log(foundbot);
		const newBots = this.state.bots.filter((bot) => bot.id !== foundbot.id);

		this.setState({
			bots: [ ...this.state.bots, foundbot ],
			army: newBots
		});
	};
	render() {
		// console.log(this.state.bots);
		return (
			<div>
				<YourBotArmy army={this.state.army} handleClick={this.handleClick} />
				<BlotCollection bots={this.state.bots} handleClick={this.handleClick} />
			</div>
		);
	}
}

export default BotsPage;
