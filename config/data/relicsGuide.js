const { row, firstPageRow, lastPageRow } = require(`./weaponGuide.js`)
const { emojis } = require(`../util/emojis.js`)
const { EmbedBuilder } = require(`discord.js`)


const relicsData = [
    {
        name: `Flame Soul Flag`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Soul Elixir`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`,

    },
    {
        name: `Oni Index`,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Senior Ninja Mystique`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Acala Armor`,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Thunder Dragon Sheath`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Ice Scroll `,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Dragon Blood Scarf`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Dragon Bone Horn`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Super Charger`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Wine Masters Gourd`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Jade Fox Folding Fan`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Azure Divine Bell `,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Tengu Fang `,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Eagle Claw Boots `,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Wind Shuriken `,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Lightning Shuriken`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Water Shuriken`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Fire Shuriken`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Wind Ring`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Lightning Ring`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Water Ring`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Fire Ring`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Nioh Gauntlet`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Dragon Fang Armlets`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Super Electromagnetic Shoes`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Ice Spirit Mirror`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Tengu Mask`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Daruma - Princess`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Daruma - Oni`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Four Symbols Amulet`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Seven Flame Rosary`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Red Lotus Crystal`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Phoenix Jade Pendant`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Land of Steam Technician`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Specter Steel Trap`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Aoki Kiss`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Mighty Iron Helmet`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Frozen Feather`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Pale Memories`,
        value: `Quality: SS ${emojis.relicsSS} | S ${emojis.relicsS}`
    },
    {
        name: `Flame Scroll`,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Thunderbird Scroll`,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Wind Blade Scroll`,
        value: `Quality: SS ${emojis.relicsSS}`
    },
    {
        name: `Colorful Hyorogan`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Nova Taiko`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Red Frog Oil`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Silver Owl Stealth Suit`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Dragon Scale Armor`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Demon Hounds Teeth`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Daruma - Kind`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Daruma - Evil`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Thunder Dragon Orb`,
        value: `Quality: S ${emojis.relicsS} | A ${emojis.relicsA}`
    },
    {
        name: `Regeneration Hormone`,
        value: `Quality: A ${emojis.relicsA}`
    },
    {
        name: `Envenomed Shuriken`,
        value: `Quality: A ${emojis.relicsA}`
    },
    {
        name: `Steel Gauntlet`,
        value: `Quality: A ${emojis.relicsA}`
    },
    {
        name: `The Legend of Sword Master - Part I`,
        value: `Quality: A ${emojis.relicsA}`
    }
]

let SSRelics = [[], [], []] //15 each
let SRelics = [[], [], []] //16 in each
let ARelics = [[], []] // 11 each

relicsData.forEach((relic) => {
    if (relic.value.includes(emojis.relicsSS)) {
        if (SSRelics[0].length < 15) {
            SSRelics[0].push(relic)
        } else if (SSRelics[1].length < 15) {
            SSRelics[1].push(relic)
        } else {
            SSRelics[2].push(relic)
        }
    }
    if (relic.value.includes(emojis.relicsS)) {
        if (SRelics[0].length < 16) {
            SRelics[0].push(relic)
        } else if (SRelics[1].length < 16) {
            SRelics[1].push(relic)
        } else {
            SRelics[2].push(relic)
        }
    }
    if (relic.value.includes(emojis.relicsA)) {
        if (ARelics[0].length < 11) {
            ARelics[0].push(relic)
        } else {
            ARelics[1].push(relic)
        }
    }
})



const EnglishRelicsGuide = [
    {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Ninja Must Die: Relics Guide`)
                .setColor(`Orange`)
                .setDescription(`The general info about relics in Ninja Must Die!`)
                .addFields({
                    name: `【Relic】What is Relic?`,
                    value: `>>> Relic is one of the most vital equipment to enhance the Ninja\`s abilities, and equipping rare Relic can provide a Ninja with a powerful attribute break. And, Relics are divided into general and exclusive, and the additional exclusive attributes will be activated when a Ninja equips his exclusive Relic.`
                }, {
                    name: `【Relic】How can I obtain Relics?`,
                    value: `>>> There are many ways to obtain Relic, such as Arena, Bounty, Shop, Relic Craft, and more. However, the rarer the Relic is, the more difficult to obtain.`
                }, {
                    name: `【Relic Craft】How can I obtain stronger Relics?`,
                    value: `>>> Method 1: Defeat higher level Bounty BOSS is a good way to get better Relics.\nMethod 2: Obtain better Relics by crafting it with lower rarity Relics (please check the in-game Relic Craft rules for details). To craft a specific S or SS Relic, you need a Relic Receipt\nMethod 3: The Mystery Shop, Clan Shop and Other Shops may refresh rare Relics, just go and buy what you need!`
                }, {
                    name: `【Relic】 How do I sell my Relics?`,
                    value: `>>> Step1: Tap the \`Relic\` in the main interface to enter \`Relic\`.\nStep2: Press \`Dismantle\` at the bottom right corner of the page.\nStep3: Select all the Relics that you want to Dismantle(sell).\nStep4: Press \`Begin dismantling\` at the bottom of the page.`
                }, {
                    name: `【Relic】 How do I craft my Relics?`,
                    value: `>>> Step1: Tap the \`Relic\` in the main interface to enter \`Relic\`.\nStep2: Press \`Craft\` at the left bottom corner of the page.\nStep3: Select the rarity of Relic in which you want to craft.\nStep4: Select a recipe(If none, you can get one by buying, bounty boss fights, or shops.) and lower rarity Relics to craft.\nStep5: Press \`Start Crafting\`.`
                })
        ],
        components: [firstPageRow]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity SS: Relics[\`${SSRelics[0].length + SSRelics[1].length + SSRelics[2].length}\`]`)
                .setColor(`Gold`)
                .setDescription(`A list of SS relics. Relics can be in other rarity too.`)
                .addFields(SSRelics[0])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity SS: Relics[\`${SSRelics[0].length + SSRelics[1].length + SSRelics[2].length}\`]`)
                .setColor(`Gold`)
                .setDescription(`A list of SS relics. Relics can be in other rarity too.`)
                .addFields(SSRelics[1])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity SS: Relics[\`${SSRelics[0].length + SSRelics[1].length + SSRelics[2].length}\`]`)
                .setColor(`Gold`)
                .setDescription(`A list of SS relics. Relics can be in other rarity too.`)
                .addFields(SSRelics[2])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity S: Relics[\`${SRelics[0].length + SRelics[1].length + SRelics[2].length}\`]`)
                .setColor('#ffb700')
                .setDescription(`A list of S relics. Relics can be in other rarity too.`)
                .addFields(SRelics[0])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity S: Relics[\`${SRelics[0].length + SRelics[1].length + SRelics[2].length}\`]`)
                .setColor(`Gold`)
                .setDescription(`A list of SS relics. Relics can be in other rarity too.`)
                .addFields(SRelics[1])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity S: Relics[\`${SRelics[0].length + SRelics[1].length + SRelics[2].length}\`]`)
                .setColor(`Gold`)
                .setDescription(`A list of SS relics. Relics can be in other rarity too.`)
                .addFields(SRelics[2])
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity A: Relics[\`${ARelics[0].length + ARelics[1].length}\`]`)
                .setColor('#a81cff')
                .setDescription(`A list of A relics. Relics can be in other rarity too.`)
                .addFields(ARelics[0])
        ],
        components: [lastPageRow]
    }, {
        embeds: [
            new EmbedBuilder()
                .setTitle(`Rarity A: Relics[\`${ARelics[0].length + ARelics[1].length}\`]`)
                .setColor('#a81cff')
                .setDescription(`A list of A relics. Relics can be in other rarity too.`)
                .addFields(ARelics[1])
        ],
        components: [lastPageRow]
    }
]

module.exports = {
    EnglishRelicsGuide
}










