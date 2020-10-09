const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const errors = require("../../errors.js");

module.exports = class test {
    constructor(){
            this.name = 'BotInfo.js • Lowered Command',
            this.alias = ['botinfo']
    }

async run(Client,message,args) {
    let bicon = Client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setAuthor('Developer panel', `${message.author.displayAvatarURL}`)
    .setDescription("Bot Information")
    .setColor(Config.Color)
    .setThumbnail(bicon)
    .addField("Bot Name", Client.user.username)
    .addField("Created On", Client.user.createdAt);
  
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
