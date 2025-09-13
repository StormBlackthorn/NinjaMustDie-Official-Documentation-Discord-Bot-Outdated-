const {
	ActivityType
} = require('discord.js');
const client = require('..');
const chalk = require('chalk');

module.exports = {
	event: 'ready',
	async run() {

		console.log(`Logged in as: ${client.user.tag}`)

		const activities = [{
			name: `${client.guilds.cache.size} Servers`,
			type: ActivityType.Listening
		},
		{
			name: `Ninja Must Die`,
			type: ActivityType.Playing
		},
		{
			name: `${client.users.cache.size} Users`,
			type: ActivityType.Watching
		},
		{
			name: `Panda Games`,
			type: ActivityType.Competing
		}
		];
		let i = 0;
		setInterval(() => {
			if (i >= activities.length) i = 0
			client.user.setActivity(activities[i])
			i++;
		}, 5000);

		global.slashCommandsFetchList = await client.application.commands.fetch()

	}
}