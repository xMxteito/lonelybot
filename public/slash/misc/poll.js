const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Creates a poll of your choice')
        .addStringOption(option => option.setName('poll_title').setDescription('Title of the poll').setRequired(true))
        .addStringOption(option => option.setName('option_1').setDescription('Option 1 of poll').setRequired(true))
        .addStringOption(option => option.setName('option_2').setDescription('Option 2 of poll').setRequired(true))
        .addStringOption(option => option.setName('option_3').setDescription('Option 3 of poll'))
        .addStringOption(option => option.setName('option_4').setDescription('Option 4 of poll'))
        .addStringOption(option => option.setName('option_5').setDescription('Option 5 of poll'))
        .addChannelOption(option => option.setName('channel').setDescription('Sends the poll to that channel!')),
    async execute(interaction, client) {
        let title = interaction.options.getString('poll-title')
        let optionOne = interaction.options.getString('option_1');
        let optionTwo = interaction.options.getString('option_2');
        let optionThree = interaction.options.getString('option_3');
        let optionFour = interaction.options.getString('option_4');
        let optionFive = interaction.options.getString('option_5');
        

        if (!optionFive) {
            if (!optionFour) {
                if (!optionThree) {
                    const lvlone = new MessageEmbed()
                        .setTitle('${title}')
                        .setDescription(`Here's a new poll, created by <@${interaction.user.id}>!\n:one: : ${optionOne}\n:two: : ${optionTwo}`)
                        .setFooter('SetupManager Poll System | https://setupmanager.ml')
                        .setColor('YELLOW')
                        .setTimestamp()

                    await interaction.reply({ content: 'Creating Poll', ephemeral: true })

                    const onelvl = await interaction.channel.send({ embeds: [lvlone] })
                    await onelvl.react('1️⃣')
                    await onelvl.react('2️⃣')
                } else {
                    const lvltwo = new MessageEmbed()
                        .setTitle('${title}')
                        .setDescription(`Here's a new poll, created by <@${interaction.user.id}>!\n:one: : ${optionOne}\n:two: : ${optionTwo}\n:three: : ${optionThree}`)
                        .setFooter('SetupManager Poll System | https://setupmanager.ml')
                        .setColor('YELLOW')
                        .setTimestamp()

                    await interaction.reply({ content: 'Creating Poll', ephemeral: true })

                    const twolvl = await interaction.channel.send({ embeds: [lvltwo] })
                    await twolvl.react('1️⃣')
                    await twolvl.react('2️⃣')
                    await twolvl.react('3️⃣')
                }
            } else {
                const lvlthree = new MessageEmbed()
                    .setTitle('${title}')
                    .setDescription(`Here's a new poll, created by <@${interaction.user.id}>!\n:one: : ${optionOne}\n:two: : ${optionTwo}\n:three: : ${optionThree}\n:four: : ${optionFour}`)
                    .setFooter('SetupManager Poll System | https://setupmanager.ml')
                    .setColor('YELLOW')
                    .setTimestamp()

                await interaction.reply({ content: 'Creating Poll', ephemeral: true })

                const threelvl = await interaction.channel.send({ embeds: [lvlthree] })
                await threelvl.react('1️⃣')
                await threelvl.react('2️⃣')
                await threelvl.react('3️⃣')
                await threelvl.react('4️⃣')
            }
        } else {
            const lvlfour = new MessageEmbed()
                .setTitle('${title}')
                .setDescription(`Here's a new poll, created by <@${interaction.user.id}>!\n:one: : ${optionOne}\n:two: : ${optionTwo}\n:three: : ${optionThree}\n:four: : ${optionFour}\n:five: ${optionFive}`)
                .setFooter('SetupManager Poll System | https://setupmanager.ml')
                .setColor('YELLOW')
                .setTimestamp()

            await interaction.reply({ content: 'Creating Poll', ephemeral: true })

            const fourlvl = await interaction.channel.send({ embeds: [lvlfour] })
            await fourlvl.react('1️⃣')
            await fourlvl.react('2️⃣')
            await fourlvl.react('3️⃣')
            await fourlvl.react('4️⃣')
            await fourlvl.react('5️⃣')
        }
    }
}

/* All credits of this code goes to https://trgop.gq
 * Don't forget to mention my name if using my code.
 * Subscribe to my channel: https://trgop.gq/YouTube
 * My Discord Servers: https://setupmanager.ml/server
 * My mail: roshan@trgop.gq
*/