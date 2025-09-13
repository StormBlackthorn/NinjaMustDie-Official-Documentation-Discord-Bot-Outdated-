const { row, firstPageRow, lastPageRow } = require('./weaponGuide.js')
const { EmbedBuilder } = require('discord.js')
const { emojis } = require(`../util/emojis.js`)

const EnglishNinjaGuide = [
     {
        embeds: [
            new EmbedBuilder()
                .setTitle('Ninja Must Die: Ninja Guide')
                .setColor('Blurple')
                .setDescription('The general info about ninjas in Ninja Must Die!')
                .addFields({
                    name: '【Ninja】What is Ninja?',
                    value: 'Ninjas are the protagonist in Ninja Must Die. Players are able to control Ninjas to fight and embark on a journey full of adventures.'
                }, {
                    name: '【Ninja】How do I get a Ninja?',
                    value: 'You can obtain new Ninjas through Summoning System, Ninja Fragment Exchange, and Element Stone to unlock.'
                }, {
                    name: '【Ninja】What are the differences between Ninjas?',
                    value: 'There are two types of Ninjas: Combat Ninja and Support Ninja. As the name suggests, Combat Ninja can be dispatched in a squad and fight during a battle, while Support Ninja grants buffs when in a squad. However, Support Ninja cannot join the battle as Combat Ninja does.'
                }, {
                    name: '【Ninja】What are the elements of Combat Ninja?',
                    value: 'Different Combat Ninjas have different Elements. There are four types of Elements: Fire, Lighting, Water, and wind. A Combat Ninja can unleash powerful elemental Ninjutsu. For example, Kuro\'s Element is fire so he could unleash fire. In bounties A+ and up, some elements may do less damage(20% or 50%) to the boss.'
                }, {
                    name: '【Ninja】What is Ninjutsu?',
                    value: 'Every Ninja has a particular Ninjutsu, which deals massive AoE elemental DMG to opponents and clears obstacles once triggered by accumulating a certain amount of Ninjutsu Energy.'
                }, {
                    name: '【Ninja】What is Talent?',
                    value: 'Talent is one of the most important ways of promoting your Ninjas. By unlocking Talents, you are able to uplift your ATK, HP, HP recovery rate, Score Bonus, and more. Apart from those basics, you can also unlock Combat Ninjas\' special Talent to promote Ninjas even further.'
                }, {
                    name: '【Ninja】What is Awakening?',
                    value: 'Awakening can further improve Ninjas and help them master "Dual Wield," which allows Ninjas to equip two weapons, namely, a main weapon and a sub-weapon.'
                })
        ],
        components: [firstPageRow]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Orange')
                .setTitle('Kuro: Combat Ninja')
                .setDescription('A young and passionate boy with a deep faith in Ninja Spirit.')
                .setThumbnail('https://cdn.discordapp.com/attachments/1032688023382532127/1034070077294776370/image12.png')
                .setImage('https://cdn.discordapp.com/attachments/1032688023382532127/1034066538115903549/EN-0621-ss--1200628_21.jpg')
                .addFields({
                    name: '***Important Information:***',
                    value: '\u200b'
                }, {
                    name: 'Element:',
                    value: `Fire | ${emojis.elementFire}`,
                    inline: true
                }, {
                    name: 'Ninjutsu:',
                    value: 'Summons three tracing fireballs for 8 seconds, then summons a giant fire tornado.',
                    inline: true
                }, {
                    name: '***General Information:***',
                    value: '\u200b'
                }, {
                    name: 'Hobbies:',
                    value: 'Collecting scarves, Rock \'n\' Roll',
                    inline: true
                }, {
                    name: 'Personality:',
                    value: 'Optimistic & Approachable',
                    inline: true
                }, {
                    name: 'Features:',
                    value: 'Dressed in all black, Tied to him is a long scarf.',
                    inline: true,
                }, {
                    name: 'Age:',
                    value: '16 years old',
                    inline: true
                }, {
                    name: 'Height:',
                    value: '168cm',
                    inline: true
                }, {
                    name: 'Origin:',
                    value: 'Ninja Village',
                    inline: true
                }, {
                    name: 'Identity:',
                    value: 'Ninja Elite',
                    inline: true
                }, {
                    name: 'Ambitions:',
                    value: 'To become a great ninja',
                    inline: true
                }, {
                    name: '***Life Experience:***',
                    value: 'Kuro is a boy who grew up in Ninja Village. His dream is to become a great ninja. When he was a child, Kuro had gone through a dark time because of the energy hidden inside his body. Thanks to the guidance from the Elder and the help from friends like Hayashiro, Kuro has managed to escape from the shadows and grown into an optimistic and enthusiastic teenager. However, after a few years, the country was no longer peaceful, and the change of Hayashiro led to the struggle of Kuro, whether to believe in his faith or not. In the cultivation in Kunai, Kuro went back to the past and broke the chains inside, reigniting his faith. He defeated the "White Kuro" and the power of dragon flame in his soul has awakened. Kuro has built up his true ninja faith successfully, and understood the duty and mission he carries.'
                })
                .setTimestamp()
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Yellow')
                .setTitle('Riki: Combat Ninja')
                .setDescription('Young master from Bamboo Village who seeks to be strong.')
                .setThumbnail('https://cdn.discordapp.com/attachments/1032688023382532127/1034404917936410654/image131.png')
                .setImage('https://cdn.discordapp.com/attachments/1032688023382532127/1034404918410358814/61-EN-0621-ss--12006281.jpg')
                .addFields({
                    name: '***Important Information:***',
                    value: '\u200b'
                }, {
                    name: 'Element:',
                    value: `Lighting | ${emojis.elementLighting}`,
                    inline: true
                }, {
                    name: 'Ninjutsu:',
                    value: 'Summons a lighting ball that gets bigger as it rolls forward for eight seconds, before clearing the screen.',
                    inline: true
                }, {
                    name: '***General Information:***',
                    value: '\u200b'
                }, {
                    name: 'Hobbies:',
                    value: 'Drink Bamboo Village\'s \"bamboo juice\", play video games, read comics, and watch movies',
                    inline: true,
                }, {
                    name: 'Personality:',
                    value: 'Confident otaku. Appears careless on the outside and naturally acts like an older brother',
                    inline: true,
                }, {
                    name: 'Features:',
                    value: "Likes to hold a bamboo leaf in his mouth while wearing a bamboo hat",
                    inline: true,
                }, {
                    name: 'Age:',
                    value: '17 years old',
                    inline: true,
                }, {
                    name: 'Height;',
                    value: '170cm',
                    inline: true,
                }, {
                    name: 'Identity:',
                    value: 'The young master of the Bamboo Village. Pepper\'s "older brother.\"',
                    inline: true,
                }, {
                    name: 'Ambitions:',
                    value: 'To shoulder the great responsibility of guarding the Bamboo Village.',
                    inline: true,
                }, {
                    name: '***Life Experience:***',
                    value: 'Riki is a panda who has lived with Pepper and Pandada in Bamboo Village since childhood. "Bamboo juice" is his favorite drink. He appears careless yet has a caring heart. As the young master of Bamboo Village, he was strictly and widely trained to meet the high standard set by the Panda Elder and was even sent to study ninja techniques as an exchange student with Kuro at the Ninja School. Riki soon made great progress with his strong talent to command Lightning and became a top student in Ninja School as well as an elite ninja.'
                })
                .setTimestamp()
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Blue')
                .setTitle('Rin: Combat Ninja')
                .setDescription('A powerful girl who is willing to fight against her fate.')
                .setThumbnail('https://cdn.discordapp.com/attachments/1032688023382532127/1034399419472297994/rin.png')
                .setImage('https://cdn.discordapp.com/attachments/1032688023382532127/1034399419161915452/EN-0621-ss--12006281.jpg')
                .addFields({
                    name: '***Important Information:***',
                    value: '\u200b'
                }, {
                    name: 'Element:',
                    value: `Water | ${emojis.elementWater}`,
                    inline: true
                }, {
                    name: 'Ninjutsu:',
                    value: 'Clearing the screen, then summons a blizzard that lasts 9 seconds.',
                    inline: true
                }, {
                    name: '***General Information:***',
                    value: '\u200b'
                }, {
                    name: 'Hobbies:',
                    value: 'Bickering with Pepper',
                    inline: true,
                }, {
                    name: 'Personality:',
                    value: 'Calm and rational, but can become irratable when facing Pepper',
                    inline: true,
                }, {
                    name: 'Features:',
                    value: "Dressed in the traditional miko's outfit Has two red eyes and an elegant hime-cut hairstyle, as well as a hidden white tail",
                    inline: true,
                }, {
                    name: 'Age:',
                    value: '17 years old',
                    inline: true,
                }, {
                    name: 'Height;',
                    value: '165cm',
                    inline: true,
                }, {
                    name: 'Identity:',
                    value: 'Guardian Miko of the Jade Fox Clan',
                    inline: true,
                }, {
                    name: 'Ambitions:',
                    value: 'To lift the curse on the Jade Fox Clan',
                    inline: true,
                }, {
                    name: '***Life Experience:***',
                    value: 'Rin, as a young girl of the Jade Fox Clan, has been living in the distant and uninhabitable Jade Fox Snow Mountain ever since she was little. After the disappearance of her older sister, she took her place and became the succeeding miko of the Jade Fox Clan. For a certain aim, she has overcome many hardships to study ninjustsu in Ninja Village. She often took care of others in the school, while bickering with self-willed Pepper. Although she looks warm and optimistic on the outside, there are unspeakable secrets hidden deep inside her heart. In the cultivation in Kunai, Rin truly realized the meaning and duty of being a miko, awakening the Snow Dance power inside her.'
                })
                .setTimestamp()
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Purple')
                .setTitle('Souga: Combat Ninja')
                .setDescription('An elite ninja with his face hidden under a mask')
                .setThumbnail('https://cdn.discordapp.com/attachments/1032688023382532127/1034379035914023042/image151.png')
                .setImage('https://cdn.discordapp.com/attachments/1032688023382532127/1034379036257964083/img_v2_34cad3bf-3998-4f1b-a444-63be34e911cg.jpg')
                .addFields({
                    name: '***Important Information:***',
                    value: '\u200b'
                }, {
                    name: 'Element:',
                    value: `Wind | ${emojis.elementWind}`,
                    inline: true
                }, {
                    name: 'Ninjutsu:',
                    value: 'Throws a giant shuriken that can be taken back/rethrow again by tapping the Ninjutsu, lasting for nine seconds.',
                    inline: true
                }, {
                    name: '***General Information:***',
                    value: '\u200b'
                }, {
                    name: 'Hobbies:',
                    value: 'Plays with little animals',
                    inline: true,
                }, {
                    name: 'Personality:',
                    value: 'Undisturbed, Decisive, Caring for his teammates & Trustworthy',
                    inline: true,
                }, {
                    name: 'Features:',
                    value: "Wears a mask",
                    inline: true,
                }, {
                    name: 'Age:',
                    value: '19 years old',
                    inline: true,
                }, {
                    name: 'Height;',
                    value: '177cm',
                    inline: true,
                }, {
                    name: 'Identity:',
                    value: 'The future leader of the Radiant Wind Clan',
                    inline: true,
                }, {
                    name: 'Ambitions:',
                    value: 'To investigate what truly happened to his teammates, and avenge them',
                    inline: true,
                }, {
                    name: '***Life Experience:***',
                    value: 'Souga is the young master of the Radiant Wind Clan, as well as an elite ninja in Ninja Village. He chose to hide his face under the mask after one special mission, where he failed to save his teammates in time and ended up surviving himself. Souga has found a series of clues pointing to the one behind this mission, which makes him determined to be strong and find out the truth to avenge his teammates. With this faith, he traveled to the Land of Cloud for cultivation. When on a mission, Souga always gets things done with decisiveness and relentlessness, and hardly ever tell others what he truly thinks. This could also be the influence of losing his teammates.'
                })
                .setTimestamp()
        ],
        components: [row]
    }, {
        embeds: [
            new EmbedBuilder()
                .setColor('Red')
                .setTitle('Pepper: Combat Ninja')
                .setDescription('Young and energetic girl with passion for spicy foods')
                .setThumbnail('https://cdn-longterm.mee6.xyz/plugins/embeds/images/1021963259504504842/d72641b2d033ab66467e3b63a5b7a99bf4b8f8c7656afc3a5907c9dbb139f00f.png')
                .setImage('https://cdn-longterm.mee6.xyz/plugins/embeds/images/1021963259504504842/bfd4cef52192bf064432bf68f50dd80e19a44cc83bc4a032cc424912d21a601f.png')
                .addFields({
                    name: '***Important Information:***',
                    value: '\u200b'
                }, {
                    name: 'Element:',
                    value: `Fire | ${emojis.elementFire}`,
                    inline: true
                }, {
                    name: 'Ninjutsu:',
                    value: 'Summons large amounts of fireball, and can switch from active to inactive by tapping the Ninjutsu again. Pepper will stay in place of where it started active mode(ex: switch to active mode mid air and Pepper will stay mid air) and shoot out fireballs. Inactive mode allows you to move freely, shooting no fireballs, and consumes 33% less Ninjutsu Energy.',
                }, {
                    name: '***General Information:***',
                    value: '\u200b'
                }, {
                    name: 'Hobbies:',
                    value: 'Cooking all kinds of spicy food, collecting precious ingredients (of course also to cook spicy food).',
                    inline: true,
                }, {
                    name: 'Personality:',
                    value: 'Straightforward, careless, impetuous and forthright.',
                    inline: true,
                }, {
                    name: 'Features:',
                    value: "Has twin buns in her hair. Carries a phoenix-shaped jade. Likes to cook food.",
                    inline: true,
                }, {
                    name: 'Age:',
                    value: '15 years old',
                    inline: true,
                }, {
                    name: 'Height;',
                    value: '159cm',
                    inline: true,
                }, {
                    name: 'Identity:',
                    value: 'The descendant of Divine Flame Clan in the Land of Flames.',
                    inline: true,
                }, {
                    name: 'Ambitions:',
                    value: 'To trace her origins and find out what her gifted talent is.',
                    inline: true,
                }, {
                    name: '***Life Experience:***',
                    value: 'Pepper is the descendant of Divine Flame Clan. Her family perished right after her birth, but luckily she was saved by Seikei. When being rescued, she was holding a chili in her hand, so the name "Pepper" was given to her. The passionate and optimistic girl with strong characteristics is deeply adored by Panda Elder and villagers in Bamboo Village. Under the influence of Seikei, Pepper likes collecting various kinds of ingredients (especially spicy ones) and she can always cook surprisingly delicious food with them. In order to trace her origins, Pepper, growing up day by day, joined the ninjas in Ninja Village. Although she has not systematically learned the ways of Ninjutsu, that does not stop her from easily executing ninjas\' moves due to her spectacular natural talent and her good foundation of Taijutsu. Her flame is a unique talent of the Divine Flame Clan itself, just as hot as pepper!'
                })
                .setTimestamp()
    
        ],
        components: [lastPageRow]
    }
    
    
    
]



module.exports = {
    EnglishNinjaGuide
}





