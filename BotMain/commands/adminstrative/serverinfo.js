

const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');

module.exports = class test {
    constructor(){
            this.name = 'Serverinfo.js • Lowered Command',
            this.alias = ['serverinfo']
    }
    async run(Client,message,args) {

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setAuthor('Developer panel', `${message.author.displayAvatarURL}`)
    .setDescription("Server Information")
    .setColor(Config.Color)
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount)
    .setTimestamp();
    message.channel.send(serverembed);
                        var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-serverinfo`" + ` in ${message.channel}`)
            .setFooter(Config.Footer)
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
}
}
