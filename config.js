module.exports = {
    server: {
        domain: "lonelycats.fun",
        https: false,
        httpPort: 8080,
    },

    Discord: {
        // —— Things that are required for the whole project to work.
        prefix: "^^", // —— Deprecated lol.
        token: "MTExMDI1MjEwNTEwMjU0MDg5MQ.GWivwY.CSm5VQY5_qYkTioEV5N-Fb5NILSmtKlwhOYA8k", // —— Your bot's token.
        botId: "1110252105102540891", // —— The bot's ID.
        guildId: "1108553587652571146", // —— The server ID on where the commands will be deployed.
        verifiedRole: "1110605136465772597", // —— Role that will be added to the user when they verify their account.

        // —— For users that want to have a role removed upon verification, if you want this, set remove-role to true, and set your remove role ID.
        removeRole: false,
        removeRoleId: "",

        // —— Set the bot's presence, for statusType see: https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType
        statusType: 3, // 1 (STREAMING), 2 (LISTENING), 3 (WATCHING), 5 (COMPETING). Default is 0 (PLAYING). 
        statusMsg: "Verificando gatitos!",

        // —— By default, rules are set to disabled, this means rules will be hidden. If you want to use the rules function, change disabled to your rules. Please ensure you use \n for each line break and do not use any symbols that could interfear with JSON.
        rulesEnabled: true,
        rules: "Pronto"
    },

    reCAPTCHA: {
        secretKey: "6Ld-T04mAAAAADSEc2ZHLfouXa_Wtr9pmzrlV4a9",
        publicKey: "6Ld-T04mAAAAAEw_YeUtAgCYpcQqt4gL33MDiuFY"
    }
}
