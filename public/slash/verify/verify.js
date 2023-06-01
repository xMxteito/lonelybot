const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const config = require("../../../config.js");
const pool = require("../../../pool.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("verificar")
		.setDescription(
			"Verificarte en Lonely Cats!"
		),

	async execute(interaction) {
        const domain = config.server.domain === 'localhost' ? `${config.server.domain}:${config.server.httpPort}` : `${config.server.domain}`; 

        if(interaction.member.roles.cache.some(r => r.id === config.Discord.verifiedRole)) {
          
await interaction.reply({
   content: "En realidad ya estas verificado!",
   ephemeral: true
});
}
        
            return;
        

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId("Reglas")
                .setLabel('De acuerdo')
                .setEmoji('✅')
                .setStyle(2)
            )

        const embed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Reglas')
            .setDescription(config.Discord.rules);

        if(config.Discord.rulesEnabled) {
            await interaction.reply({
content: "Porfavor revise su DM!",
 ephemeral: true
              
             });

            const linkID = pool.createLink(interaction.user.id);

            const captchaEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Lonely | Verificacion')
            .setDescription(`Resuelva el captcha, antes de que el link expire (15 minutos) .\n${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)

            await interaction.user.createDM().then(async (dm) => {
                await dm.send({ embeds: [captchaEmbed] }).catch(() => {
                    logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
                });
            });

        } else {
            await interaction.reply({
              content: "Porfavor lea DM",
              ephemeral: true
            });
          

            const linkID = pool.createLink(interaction.user.id);

            const captchaEmbed = new EmbedBuilder()
            .setColor('#0099ff')
            .setTitle('Lonely | Verificacion')
            .setDescription(`Resuelva el captcha, antes de que el link expire (15 minutos) \n${config.server.https ? 'https://' : 'http://'}${domain}/verify/${linkID}`)

            await interaction.user.createDM().then(async (dm) => {
                await dm.send({ embeds: [captchaEmbed] }).catch(() => {
                    logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
                })

            });
        }
    },
};
