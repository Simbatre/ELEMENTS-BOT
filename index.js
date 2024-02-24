const Discord = require("discord.js")
const client = new Discord.Client(
    { intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }


)
client.login(MTIxMTA3NDAxMDgwOTQ5OTY2OA.GhrVE2.o0_7vrogTmcNrxosj7xdazipJet9jLcP9O6-40)
client.on("ready", () => {
    console.log("Bot Online")
})


client.on("messageCreate", (message) => {
    console.log("Ciao")
}
)



