
const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Announce.js • Lowered Command',
            this.alias = ['announce']
    }

async run(Client,message,args) {
message.delete();
  let botmessage = args.join(" ").slice(9);
      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id))) return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
if (!botmessage) return message.channel.send("❌ No reason provided | Use the correct format `/announce <announcement>`");
    let AnnouncementChannel = message.guild.channels.find(`id`, "722442170124206130");
  if(!AnnouncementChannel) return message.channel.send("❌ Can't find announcement channel");
  
          var Announcement = new Discord.RichEmbed()
            .setTitle(`FlyAero Announcement`)
            .setColor(Config.Color)
            .setDescription(botmessage)
          .setFooter(`Announced by ${message.author.username} • ` + Config.Footer)
          .setTimestamp()
          .setImage("");
         var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-announce`" + ` in ${message.channel} with information: ${botmessage}`)
            .setFooter(Config.Footer);
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
AnnouncementChannel.send(Announcement);
AnnouncementChannel.send("***@everyone***");
  }
  }
