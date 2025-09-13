const { row, firstPageRow, lastPageRow } = require('./weaponGuide.js')
const { EmbedBuilder } = require('discord.js')
const { emojis } = require(`../util/emojis.js`)

const EnglishBountiesGuide = [{
    embeds: [
        new EmbedBuilder()
            .setTitle('Ninja Must Die: Bounties Guide')
            .setColor('LightGrey')
            .setDescription('Team up and defeat boss to get great awards -- the bounties.')
            .addFields({
                name: '【Bounty】What is Bounty?',
                value: 'Bounty is a gameplay dedicated to challenging the BOSS. You can challenge after getting the Bounty. Different levels of Bounties correspond to different levels of BOSS. The Bounty level is divided into D, C, B, A, S, SS, and more. ou can get rich rewards such as Relics and Relic Recipes if you challenge the Bounty successfully, however there is a limit.'
            }, {
                name: '【Bounty】How can I obtain Bounties?', 
                value: 'By purchasing in the Bounty Store. You can get also get a daily free Bounty of a random level(D - B) in the Bounty Store.'
            })
    ],
    components: [
        firstPageRow
    ]
}, {
    embeds: [
        new EmbedBuilder()
            .setTitle('Ninja Must Die: Bounties Guide')
            .setColor('LightGrey')
            .setDescription('Details about each bounty rank coming soon!')
    ], 
    components: [
        lastPageRow
    ]
}]; 


module.exports = {
    EnglishBountiesGuide
}