const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const errors = require("../../errors.js");
const Roles = require('../../BotSystems/roleSettings.json');

module.exports = class test {
    constructor(){
            this.name = 'Purge.js • Lowered Command',
            this.alias = ['purge']
    }

async run(Client,message,args) {

      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))  return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
  var NoArgs = new Discord.RichEmbed()
  .setTitle('Not given any args')
  .setColor(Config.Color)
  .setDescription(`Please give a number that the bot can delete.`)
  .setTimestamp()
  if(!args[1]) return message.channel.send(NoArgs);
  message.channel.bulkDelete(args[1]).then(() => {
    var Deleted = new Discord.RichEmbed()
    .setTitle('Successfully Deleted')
    .setColor(Config.Color)
    .setDescription(`I have deleted ${args[1]} messages from ${message.channel}.`)
    .setTimestamp()
    message.channel.send(Deleted).then(msg => msg.delete(5000));
    
                    var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-purge`" + ` in ${message.channel}`)
            .setFooter(Config.Footer)
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
  });
}
}
