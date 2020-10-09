
const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Conclude.js • Lowered Command',
            this.alias = ['conclude']
    }

async run(Client,message,args) {
message.delete();
    if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID,Roles.MediumRankID].includes(r.id)))
            return message.reply("❌ You do not have permissions to use this command. Please contact a staff member.")
let botmessage = args.join(" ").slice(10);

var Training = new Discord.RichEmbed()
.setAuthor(`Training Session Concluded`, `${message.author.displayAvatarURL}`)
.setColor(Config.Color)
.setDescription(`Thank you all for coming! The training has ended and host will say who pass and who failed on here.`)
.setFooter(`${message.author.username}`)
.setTimestamp();
    var Sessionchannel = message.guild.channels.find("id", Config.SessionsChannelId);
   if (!Sessionchannel) return message.channel.send("Channel does not exist!");
var EmbedLog = new Discord.RichEmbed()
       .setTitle(`Command logged`)
       .setColor(Config.Color)
       .setDescription(`${message.author} has used ` + "`-conclude`" + ` in ${message.channel}`)
       .setFooter(Config.Footer)
     
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
Sessionchannel.send("<@&700034834323603456>")
Sessionchannel.send(Training)
  }
}
