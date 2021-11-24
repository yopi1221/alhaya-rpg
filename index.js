const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.on("ready", () => {
    console.log("Initialisation de l'aventure..");
});

const prefix = "$";

function getRandomIntInclusive(min, max) {
    min = Math.min(min, max);
    max = Math.max(max, min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Client.on("messageCreate", message => {
if (message.content.startsWith(prefix + "aa")){

    let user = message.author;

    const match = /(\d+)/.exec(message.content)
    const maxValue = Number(match?.[1] ?? 100)
    const embed = new Discord.MessageEmbed()
        .setTitle("Auto Attack")
        .setColor("RED")
        .setThumbnail("https://images-ext-2.discordapp.net/external/z1H-es4IDwrIvdlWthKPu4_FptzLpiGVHxOonwRBvk8/https/media.discordapp.net/attachments/768260170023043075/912185945653141624/unknown.png")
        .setAuthor("Statistique de Force", "https://cdn.discordapp.com/emojis/911877840461525002.png?size=96")
        .setDescription(`${user} inflige : **${getRandomIntInclusive(1,maxValue)}** dégât(s)`)

    message.channel.send({ embeds: [embed]});
}
});

Client.login(process.env.TOKEN);