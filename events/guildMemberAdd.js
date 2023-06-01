
// —— dot. 
const { Signale } = require('signale');
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const logger = new Signale({ scope: 'Discord' });
const config = require('../config.js');
const pool = require('../pool.js');

module.exports = {
	name: "guildMemberAdd",

	async execute(member) {
        const domain = config.server.domain === 'localhost' ? `${config.server.domain}:${config.server.httpPort}` : `${config.server.domain}`; 
        if(config.Discord.rulesEnabled) {
            const linkID = pool.createLink(member.id);
            const captchaEmbed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Lonely | Verificacion')
                .setDescription(`Para poder tener acceso al servidor debe .\n${config.server.https ? 'https://' : '[Presionar aqui](http://'}${domain}/verify/${linkID})`)

            member.send({ embeds: [captchaEmbed] }).catch(() => {
                logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
            });    
                
        } else {
            const linkID = pool.createLink(member.id);
            const captchaEmbed = new EmbedBuilder()
                .setColor('#0099ff')
                .setTitle('Lonely | Verificacion')
                .setDescription(`Para poder tener acceso al servidor debe .\n${config.server.https ? 'https://' : '[Presionar aqui](http://'}${domain}/verify/${linkID})`)

            member.send({ embeds: [captchaEmbed] }).catch(() => {
                logger.error(`Failed to send captcha to user! (Maybe they have DMs turned off?)`);
            });    
        }
        
	},
};
