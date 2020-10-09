const Discord = require("discord.js");
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
const Config = require('../../BotSystems/settings.json');

module.exports = class test {
    constructor(){
            this.name = 'systeminfo.js • Lowered Command',
            this.alias = ['systeminfo']
    }

async run(Client,message,args) {
    var botembed = new Discord.RichEmbed()
  .setAuthor('Creator Panel', `${message.author.displayAvatarURL}`)
  .setColor(Config.Color)
  .addField(`API`, `**:ballot_box_with_check:**`)
  .addField(`Ping`, `**:ballot_box_with_check:**`)
  .addField(`HostingService`, `**:ballot_box_with_check:**`)
  .addField(`RobloxRankingService`, `**:ballot_box_with_check:**`)
  .addField(`Note`, `Client database is online.`)
  .setFooter(Config.Footer)
  .setTimestamp();
      if (!message.member.roles.some(r => [Roles.AdminstratorID].includes(r.id)))
            return message.reply("❌ Only the creator can use this command.")
    message.channel.send(botembed);
     }
}
