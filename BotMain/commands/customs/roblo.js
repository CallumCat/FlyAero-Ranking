const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const errors = require("../../errors.js");

module.exports = class test {
    constructor(){
            this.name = 'roblo.js • Lowered Command',
            this.alias = ['roblo']
    }

async run(Client,message,args) {
    let bicon = Client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Roblo', `${message.author.displayAvatarURL}`)
    .setDescription("COMMING SOON")
    .setColor(Config.Color)
  
              var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-botinfo=`" + ` in ${message.channel}`)
            .setFooter(Config.Footer)
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
    message.channel.send(botembed);
}
}
