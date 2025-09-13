const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, SelectMenuBuilder, ButtonStyle } = require('discord.js')

const homeBtn = new ButtonBuilder().setStyle(ButtonStyle.Primary).setCustomId('home').setEmoji('🏠')
const backBtn = new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('back').setEmoji('◀️')
const pageBtn = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setCustomId('page').setLabel('1/5').setDisabled(true)
const forwardBtn = new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('forward').setEmoji('▶️')
const trashBtn = new ButtonBuilder().setStyle(ButtonStyle.Danger).setCustomId('trash').setEmoji('🗑️')
const firstPageRow = new ActionRowBuilder().addComponents(homeBtn, new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('back').setEmoji('◀️').setDisabled(true), pageBtn, forwardBtn, trashBtn)
const lastPageRow = new ActionRowBuilder().addComponents(homeBtn, backBtn, pageBtn, new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('forward').setEmoji('▶️').setDisabled(true), trashBtn)
const row = new ActionRowBuilder().addComponents(homeBtn, backBtn, pageBtn, forwardBtn, trashBtn)
const selectSortType = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('selectSortType')
            .setPlaceholder('By Rarity')
            .addOptions(
                {
                    label: 'By Element',
                    description: "Sort the weapons by their element.",
                    value: "By Element",
                },
            ),
    )
const elementSelectSortType = new ActionRowBuilder()
    .addComponents(
        new SelectMenuBuilder()
            .setCustomId('selectSortType')
            .setPlaceholder('By Element')
            .addOptions(
                {
                    label: 'By Rarity',
                    description: "Sort the weapons by their rarity.",
                    value: "By Rarity",
                },
            ),
    )

const deleteEmbed = {
    embeds: [
        new EmbedBuilder()
            .setColor('Red')
            .setTitle('Ninja Must Die: Guide')
            .setDescription('......Deleting......')
    ],
    components: []
}


const EnglishWeaponGuide = [
    {
        embeds: [
            new EmbedBuilder()
                .setColor('LightGrey')
                .setTitle('Ninja Must Die: Weapon Guide')
                .setDescription('The general info about weapons in Ninja Must Die!')
                .addFields({
                    name: '【Weapon】How do I get a Weapon?',
                    value: '>>> Weapons can be obtained using gold and silver keys to pull from Gold Vault and Silver Vault in Summoning System.\nPossible R-SS weapons can be pulled from Gold Vault, whereas possible N-R weapons can be pulled from Silver Vault.'
                }, {
                    name: '【Weapon】How can I upgrade my Weapons?',
                    value: '>>> Step1: Tap the \'Weapon\' in the main interface to enter \`Weapon\`.\nStep2: Choose the Weapon you want to enhance and tap the \'Enhance\' at the bottom right corner to enter the \'Enhance\'.\nStep3: Upgrade your Weapon by selecting the hammer on the right side of the Enhance screen. You can also upgrade your Weapon by consuming other Weapons as materials.\nThis is the basic process of enhancing a Weapon.\n*If you use a hammer with the same elements as your Weapon to enhance, you will receive an additional 20% bonus to your Weapon\'s XP.'
                }, {
                    name: '【Weapon】How can I limit-break my Weapons?',
                    value: '>>> Step1: Tap the \'Weapon\' in the main interface to enter the \'Weapon\'.\nStep2: Tap the \'limit-break\' and enter the \'limit-break\'.\nStep3: Check the materials which can be used to limit-break your Weapon.\nStep4: Select these materials and tap \'break the limit\' to complete.'
                }, {
                    name: '【Weapon】How can I refine my Weapons?',
                    value: '>>> Step1: Tap the \'Weapon\' in the main interface to enter \`Weapon\`.\nStep2: Choose the Weapon you want to enhance and tap the \'Enhance\' at the bottom right corner to enter the \'Enhance\'.\nStep3: Press \`Weapon Refine\` at the top right corner.\nStep4: Select the materials to refine your weapons with. Step5: Click confirm.'
                }, {
                    name: '【Weapon】How can I dismantle(sell) my Weapons?',
                    value: '>>> Step1: Tap the \'Weapon\' in the main interface to enter \`Weapon\`.\nStep2: Tap the \`Dismantle\` on the top right corner.\nStep3: Press \`Weapon Dismantle\`\n.Step4: Select all the weapons that you would like to dismantle(only weapons with \`Rare\` and above).\nStep5: Click confirm. Step6: Now you can buy things to help upgrade your weapons with golden bones!'
                }, {
                    name: '【Bot command】How can I get the info of the weapons by using the ninjs must die bot?',
                    value: '>>> type the command `/ssr` !'
                })
        ],
        components: [firstPageRow]
    }, [{
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('All Weapons Sort by Rarity: [59]')
                .setDescription('COMING SOON')
        ],
        components: [row, selectSortType]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('\`Rarity C(Common)\`: Weapons[9]')
                .setDescription('COMING SOON')
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('\`Rarity R(rare)\`: Weapons[15]')
                .setDescription('COMING SOON')
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('\`Rarity SR(Mythic)\`: Weapons[21]')
                .setDescription('COMING SOON')
        ],
        components: [row]

    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('\`Rarity S(legendary)\`: Weapons[14]')
                .setDescription('COMING SOON')
        ],
        components: [lastPageRow]
    }], [{
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('All Weapons Sort by Element: [59]')
                .setDescription('COMING SOON')
        ],
        components: [row, elementSelectSortType]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('\`Element Fire\`: Weapons[??]')
                .setDescription('COMING SOON')
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('\`Element Wind\`: Weapons[??]')
                .setDescription('COMING SOON')
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('\`Element Water\`: Weapons[??]')
                .setDescription('COMING SOON')
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('\`Element Lighting\`: Weapons[??]')
                .setDescription('COMING SOON')
        ],
        components: [lastPageRow]
    }]
]


module.exports = {
    EnglishWeaponGuide, deleteEmbed, row, firstPageRow, lastPageRow
}