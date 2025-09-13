const { EmbedBuilder, ApplicationCommandType, ComponentType, ActionRowBuilder, SelectMenuBuilder, ApplicationCommandOptionType } = require('discord.js');
const embed = require('../../config/data/weaponGuide.js')
const { pageToEmbed } = require('../../config/util/util.js')

module.exports = {
    name: 'guide',
    description: 'Guide of Ninja Must Die!',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    cooldown: 5000,
    languageAutoComplete: true,
    options: [{
        name: 'language',
        description: 'pick a language of your choice!',
        required: false,
        autocomplete: true,
        type: ApplicationCommandOptionType.String,
    }],
    async run({
        client,
        interaction
    }) {


        const language = interaction.options.getString('language') || 'English'
        if (language === 'Traditional Chinese') return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('Sorry!')
                    .setColor('Red')
                    .setDescription('The language you selected is currently not supported on this command.')
            ],
            ephemeral: true
        })

        const guideMainPages = [{
            embeds: [
                new EmbedBuilder()
                    .setColor('Aqua')
                    .setTitle('Ninja Must Die: Guide')
                    .setDescription('Get any information about ninja must die!')
            ],
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new SelectMenuBuilder()
                            .setCustomId('guide')
                            .setPlaceholder('Nothing Selected')
                            .addOptions({
                                label: 'Story Mode Guide',
                                description: "Click to view Story Mode Guide",
                                value: 'Story Mode Guide'
                            }, {
                                label: 'Weapon Guide',
                                description: "Click to view Weapon Guide",
                                value: "Weapon Guide",
                            }, {
                                label: 'Ninja Guide',
                                description: "Click to view Ninja Guide",
                                value: "Ninja Guide",
                            }, {
                                label: 'Relics Guide',
                                description: "Click to view Relics Guide",
                                value: "Relics Guide",
                            }, {
                                label: 'Infinite Run Guide',
                                description: "Click to view Infinite Run Guide",
                                value: "Infinite Run Guide",
                            }, {
                                label: '3v3 Arena Guide',
                                description: "Click to view 3v3 Arena Guide",
                                value: "3v3 Arena Guide",
                            }, {
                                label: 'Bounties Guide',
                                description: "Click to view Bounties Guide",
                                value: "Bounties Guide",
                            }, {
                                label: 'Clans Guide',
                                description: "Click to view Clans Guide",
                                value: 'Clans Guide'
                            }),
                    )
            ]
        }]

        function guideMainPage(language) {
            switch (language) {
                case 'English':
                    return guideMainPages[0]
            }
        }

        const msg = await interaction.reply(guideMainPage(language))

        const collector = msg.createMessageComponentCollector({
            idle:
                210000
        });

        let page = -1
        let guide;
        let trashed = false;

        collector.on('collect', async (value) => {

            await value.deferUpdate()

            if (value.user.id !== interaction.user.id) {
                return value.followUp({
                    content: 'This is not for you!',
                    ephemeral: true
                })
            }

            if (value.componentType === ComponentType.Button) {

                if (value.customId === 'home') {
                    if (page === 0) {
                        interaction.editReply(guideMainPage(language))
                        page = -1
                    } else {
                        page = 0
                        interaction.editReply(pageToEmbed(page, guide, language))
                    }
                }

                if (value.customId === 'trash') {
                    page = 0
                    trashed = true;
                    collector.stop()
                    await interaction.editReply(embed.deleteEmbed)
                    return await interaction.deleteReply()
                }

                if (value.customId === 'forward') {
                    page++
                    interaction.editReply(pageToEmbed(page, guide, language))
                }

                if (value.customId === 'back') {
                    page--
                    interaction.editReply(pageToEmbed(page, guide, language))
                }

            }


            if (value.componentType === ComponentType.SelectMenu) {

                switch (value.values[0]) {
                    case 'By Rarity':
                        page = 1;
                        guide = 'weaponRarity'
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'By Element':
                        page = 1;
                        guide = 'weaponElement'
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Weapon Guide':
                        guide = 'weaponRarity'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Ninja Guide':
                        guide = 'ninja'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Relics Guide':
                        guide = 'relics'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Infinite Run Guide':
                        guide = 'infinite run'
                        page = 0;
                        interaction.editReply("COMING SOON")
                        break;
                    case '3v3 Arena Guide':
                        guide = '3v3'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Bounties Guide':
                        guide = 'bounties'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Clans Guide':
                        guide = 'clans';
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                    case 'Story Mode Guide':
                        guide = 'story mode';
                        page = 0;
                        interaction.editReply('COMING SOON')
                        break;
                }
            }
        })



        collector.on('end', async () => {
            if (trashed === true) return;
            return interaction.editReply({
                components: []
            })
        })
    }
}

