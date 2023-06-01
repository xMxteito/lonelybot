
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("help")
		.setDescription(
			"Comando de ayuda"
		),
async execute(interaction) {
 interaction.reply({
   content: "Ping",
   ephemeral: true
});
}
};