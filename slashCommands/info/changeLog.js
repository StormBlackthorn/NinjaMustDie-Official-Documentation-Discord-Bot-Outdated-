const {
    ApplicationCommandType,
    EmbedBuilder,
} = require('discord.js')
const { row, firstPageRow, lastPageRow } = require('../../config/data/weaponGuide.js')
const { disableButtons } = require('../../config/util/util.js')

module.exports = {
    name: 'change-log',
    description: 'Get the Change logs of the bot',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    cooldown: 2000,

    async run({
        client,
        interaction
    }) {
        let log = await client.channels.cache.get('1064531845057888306').messages.fetch({ limit: 10 })
        log = log.map((msg) => msg.content)

        function embed(page) {
            let component = page === 1 ? firstPageRow : (page === 10 ? lastPageRow : row)
            component.components[2].data.label = `${page}/10`
            return {
                embeds: [
                    new EmbedBuilder()
                        .setTitle('Ninja Must Die: Latest Update')
                        .setDescription(log[page - 1])
                        .setColor('Blurple')
                        .setTimestamp()
                ],
                components: [
                    component
                ]
            }
        }

        let page = 1;
        const msg = await interaction.reply(embed(page))
      
        const collector = msg.createMessageComponentCollector({
            idle:
                210000
        });


        collector.on('collect', async (value) => {
            await value.deferUpdate()

            if (value.user.id !== interaction.user.id) {
                return value.followUp({
                    content: 'This is not for you!',
                    ephemeral: true
                })
            }
            if (value.customId === 'home') {
                page = 1
                interaction.editReply(embed(page))
            }

            if (value.customId === 'trash') {
                collector.stop()
                await interaction.editReply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor('Red')
                            .setTitle('Ninja Must Die: Update Log')
                            .setDescription('......Deleting......')
                    ],
                    components: [
                        disableButtons(row)
                    ]
                })
                return await interaction.deleteReply()
            }

            if (value.customId === 'forward') {
                page++
                interaction.editReply(embed(page))
            }

            if (value.customId === 'back') {
                page--
                interaction.editReply(embed(page))
            }
        })
    }

}
