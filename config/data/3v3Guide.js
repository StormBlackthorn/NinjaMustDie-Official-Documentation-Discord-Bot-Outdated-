const { row, firstPageRow, lastPageRow } = require('./weaponGuide.js')
const { EmbedBuilder } = require('discord.js')
const { emojis } = require(`../util/emojis.js`)

const English3v3Guide = [{
        embeds: [
            new EmbedBuilder()
                .setTitle('Ninja Must Die: 3v3 Guide')
                .setColor('Red')
                .setDescription('The PVP feature of Ninja must die: 3v3!')
                .addFields({
                    name: '【3v3】What is 3v3?',
                    value: '3V3 is the main PVP gameplay in this game. Two teams are randomly formed by matching in a 3v3 duel, passing through heavy obstacles and killing powerful BOSS in the same battlefield. The victory condition is to reach the finish line! If your team killed both bosses first or the all the members of the other team dies first, you win! Else, you lose. If no one finishes, the team with the furthest progress wins. If you win three or more times in a row, you rank up faster(two stars instead of one). ***3v3 will be available once your Rank reaches Elite-3 Stars.***'
                }, {
                    name: '【3v3】What are the 3v3 Battle Cards?',
                    value: '3v3 Battle Cards are special Cards that can be used on the battlefield, mainly divided into four types: Output, Survival, Trap, and Restriction. You can select and take four Cards in the 3v3 preparation phase, and then purchase them for use in the Card Store by collecting Goldfish Coins after the battle starts. You can get by card packs, that you can get by playing 3v3 matches. If all of the cards are at max level, it will give you coins instead.'
                }, {
                    name: '【3v3】What are the differences between Match mode and Ranking mode in 3v3?',
                    value: 'There are two modes of 3v3, Match and Ranking Mode. There are no restrictions on team formation of matching mode because it does not affect ranking level, whether win or lose. But for the ranking mode, there is a certain level limit while forming a group. (Please enter the game for specific restrictions). ***You can complete season-limited and daily quests in both two modes.***'
                })
            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle('Ninja Must Die Guide: 3v3 Guide')
                .setColor('Red')
                .setDescription('Details about each rank of 3v3 coming soon!')
            ],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    English3v3Guide
}