const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const errors = require("../../errors.js");

module.exports = class test {
    constructor(){
            this.name = 'microsoft.js • Lowered Command',
            this.alias = ['microsoft']
    }

async run(Client,message,args) {
    let bicon = Client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Microsoft', `${message.author.displayAvatarURL}`)
    .setDescription("Microsoft, I've got  paperclips and some cores! Wait... Wazowski! Where's the paperwork! Where's the money Wazowski! Jokes: Why did the football coach go to the back? To get his QUARTERback. Also, I have a riddle : What's As light as a feather, but even the strongest person in the world can't hold for long? ")
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
