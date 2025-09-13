const client = require('..')
const {
    EmbedBuilder,
    ChannelType,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js')


module.exports = {
    event: 'guildCreate',
    async run(guild) {

        const embed = {
            embeds: [
                new EmbedBuilder()
                .setAuthor({
                    name: " || " + guild.name,
                    iconURL: guild.iconURL() || client.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle('Thank you!')
                .setColor('Orange')
                .setDescription('Thanks for inviting this bot to your server! Use `/help` to begin looking for bot commands!')
                .setFooter({
                    text: `Thank you very much!!! <3`,
                    iconURL: (await client.users.fetch(guild.ownerId)).displayAvatarURL()
                })
                .setTimestamp()
            ],
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('Invite Me!')
                            .setStyle(ButtonStyle.Link)
                            .setURL('https://discord.com/api/oauth2/authorize?client_id=1057642794870652959&permissions=8&scope=bot%20applications.commands')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('Official Website')
                            .setStyle(ButtonStyle.Link)
                            .setURL('https://yummysheep.mcbe.fun/ninja-must-die')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('Need Help?')
                            .setStyle(ButtonStyle.Link)
                            .setURL('https://discord.gg/UGJTAJ66Zp')
                    )
            ]
        } 
        
        if (guild.systemChannel && guild.systemChannel.permissionsFor(guild.members.me).has('SendMessages')) {
            try {
                guild.systemChannel.send(embed)
            } catch {
                return;
            }
        } else {
            const channel = guild.channels.cache.filter((channel) => channel.type === ChannelType.GuildText)
            if (!channel) return;
            for (const i of channel) {
                if (i[1].permissionsFor(guild.members.me).has('SendMessages')) {
                    try {
                        i[1].send(embed)
                    } catch {
                        return;
                    }
                }
            }
            return;
        }
    }
}
