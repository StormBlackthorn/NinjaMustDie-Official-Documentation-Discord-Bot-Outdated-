const {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    EmbedBuilder
} = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Get all the commands and how to use them!',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    cooldown: 3000,

    async run({
        client,
        interaction
    }) {
        interaction.reply({
            embeds: [{
                color: 0x0099ff,
                title: 'Guide of using the bot ',
                description: 'Last updates: 1/1/2023',
                fields: [
                    {
                        name: '/ssr ',
                        value: 'Get the info about any lengenary weapons in ninja must die',
        
                    },
                    {
                        name: '/guide ',
                        value: 'The official guides of ninja must die [coming soon!]',
        
                    },
                    {
                        name: '/invite',
                        value: 'Generate a bot invite link',
        
                    },
                    {
                        name: '/ping',
                        value: 'Check the bot ping'
                    },
                    
                ]
            }]
        })
    }

}