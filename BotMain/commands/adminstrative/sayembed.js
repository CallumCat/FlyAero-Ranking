

const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'SayEmbed.js • Lowered Command',
            this.alias = ['sayembed']
    }

async run(Client,message,args) {
let botmessage = args.join(" ").slice(10);
      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))  return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
if (!botmessage) return message.channel.send("❌ No args provided | Use the correct format `!sayembed <message>`");

var Updated = new Discord.RichEmbed()
.setAuthor(`Message from ${message.author.username}`, `${message.author.displayAvatarURL}`)
.setColor(Config.Color)
.setDescription(botmessage)
.setTimestamp()
message.delete();
message.channel.send(Updated)
                    var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-sayembed`" + ` in ${message.channel} with information: ${botmessage}`)
            .setFooter(Config.Footer)
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
  }
}