const { row, firstPageRow, lastPageRow } = require('./weaponGuide.js')
const { EmbedBuilder } = require('discord.js')


const EnglishClanGuide = [{
    embeds: [
        new EmbedBuilder()
            .setTitle('Ninja Must Die: Clans Guide')
            .setColor('Fuchsia')
            .setDescription('Fight and grow with your clan!')
            .addFields({
                name: '【Clan】What is Clan?',
                value: 'A Clan is a virtual in-game group created by the players themselves. You can complete clan quests with your clanmates to enhance your relationship. Participating in clan activities is a great way to make friends and work as a team, which can also help you find the fun of the game.'
            }, {
                name: '【Clan】How can I join a Clan?',
                value: 'You can join the Clan through the \'Clan\' tab. You are free to choose the Clan you like, or invite your friends to create your own clan.'
            }, {
                name: '【Clan】What is Clan Shop?',
                value: 'The Clan Shop is one of the benefits of the Clan and can be used to purchase Relics, Relics Recipes and some other rare Tokens by consuming Clan Coins.'
            }, {
                name: '【Clan】What is Clan War?',
                value: 'Clan War is wars between clan to help your clan grow and level up! Participate in Clan Wars can really help your clan, and you can get great rewards!'
            }, {
                name: '【Clan】What are Clan Bosses?',
                value: 'Clan bosses are bosses that can only be fought by your clan members. Fight them to get rewards, and the faster you defeat the boss, the higher your rank is in the clan boss leaderboard!'
            })
    ],
    components: [
        firstPageRow
    ]
}, {
    embeds: [
        new EmbedBuilder()
            .setTitle('Ninja Must Die: Clan Bosses')
            .setColor('Fuchsia')
            .setDescription('COMING SOON!')   
    ],
    components: [
        lastPageRow
    ]
}]


module.exports = {
    EnglishClanGuide
}

