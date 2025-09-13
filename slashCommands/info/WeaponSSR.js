const {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    EmbedBuilder
} = require('discord.js')
const {
    languages,
} = require('../../config/util/util.js')
const {
    EnglishSSR,
    TChineseSSR,
} = require('../../config/data/ssr.js')

module.exports = {
    name: 'ssr',
    description: 'Get information about any weapon in the game!',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    languageAutoComplete: true,
    cooldown: 3000,
    options: [{
        name: 'weapon',
        description: 'The weapon that you would like to know more about',
        required: true,
        autoComplete: true,
        type: ApplicationCommandOptionType.String,
        choices: [{
            name: '<0>Weapon List 武器清單',
            value: '0'
        }, {
            name: '<1>Dragons reast 龍神饗宴',
            value: '1'
        }, {
            name: '<2>Wind Blessed-Azure Dragon 風宿·蒼龍',
            value: '2'
        }, {
            name: '<3>Kamaitachi Fan 風妖鐮鼬',
            value: '3'
        }, {
            name: '<4>Shin-Jade Edge Bow 真·凌玉弓',
            value: '4'
        }, {
            name: '<5>Blizzard Bringer 廣羅天寒',
            value: '5'
        }, {
            name: '<6>Sky Crystal Kunai 天晶苦無',
            value: '6'
        }, {
            name: '<7>Flute of Hymn 天音靈簫',
            value: '7'
        }, {
            name: '<8>Lightning Blessed - Kirin 雷宿·麒麟',
            value: '8'
        }, {
            name: '<9>iPhonyXXX 愛瘋XXX',
            value: '9'
        }, {
            name: '<10>Lightning Swirl Blade 漩雷一文字',
            value: '10'
        }, {
            name: '<11>Fire Blessed-Vermilion Bird 炎宿·朱雀',
            value: '11'
        }, {
            name: '<12>Fire Bansho Fan 御火芭蕉扇 ',
            value: '12'
        }, {
            name: '<13>Ghost Tear Muramasa 鬼淚村正',
            value: '13'
        }, {
            name: '<14>Divine Flame Staff 神炎杖',
            value: '14'
        }]
    }, {
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

        const weapon = interaction.options.getString('weapon')
        const language = interaction.options.getString('language') || 'English'

        if(!languages.includes(language)) return interaction.reply({
            content: `Sorry, but \`${language}\` is not supported right now! Please pick a language in the choices provided.`,
            ephemeral: true
        })

        function languageDecode(language, index) {
            index = Number(index)
            let returned;
            switch(language) {
                case 'English':
                    returned = EnglishSSR[index]
                    break;
                case 'Traditional Chinese':
                    returned = TChineseSSR[index]
                    break;
            }
            return returned;
        }

        interaction.reply({
            embeds: [
                languageDecode(language, weapon)
            ]
        })


    }

}