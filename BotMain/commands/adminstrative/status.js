const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
module.exports = class test {
    constructor(){
            this.name = 'Status.js • Lowered Command',
            this.alias = ['status']
    }

    async run(Client,message,args) {
        if(message.author.type === 'bot') return;
        if (!args[1]) return message.channel.send(`❌ Please give a "status" for the bot.`)
      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))  return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
        var CurrentStatus = args.join(" ").slice(8);
        if (!CurrentStatus) return message.channel.send("Please provide args")
        Client.user.setActivity(CurrentStatus, {
            type: 'Watching',
        });
        console.log(CurrentStatus)
        var Updated = new Discord.RichEmbed()
            .setTitle('Changed status')
            .setColor(Config.Color)
            .setDescription(`Changed status to: **${CurrentStatus}**`)
            .setTimestamp()
        message.channel.send(Updated)
                        var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-status`" + ` in ${message.channel} and changed it to ${CurrentStatus}.`)
            .setFooter(Config.Footer)
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
    }
}