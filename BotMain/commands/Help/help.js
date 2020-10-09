
const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Help.js • Lowered Command',
            this.alias = ['help']
    }

async run(Client,message,args) {
message.delete();
  var Sent = new Discord.RichEmbed()
.setAuthor(`Recieved?`, `${message.author.displayAvatarURL}`)
.setColor(Config.Color)
.setTitle(`FlyAero Assistant`)
.setDescription(`I have sent a message to your dm's!\nDon't got it? Please make ensure that your settings are correct for private messages like these.`)
.setFooter(Config.Footer)
.setTimestamp();
message.channel.send(Sent)
var Help = new Discord.RichEmbed()
.setAuthor(`Need help? ${message.author.username}`, `${message.author.displayAvatarURL}`)
.setColor(Config.Color)
.setTitle(`FlyAero Assistant`)
.setDescription(`This bot was created by FlyAero `)
.addBlankField()
.addField(`Announcements Commands`, '`F!announce <message>` Commonly used for announcement stuff.\n`F!host <format>` Commonly used for host events.\n`F!message <user> <message>` [TIP] it only messages yourself.\n`F!training` Will announce a training session\n`F!conclude` will conclude the training', true)
.addField(`Roblox Commands`, '`F!setrank <Robloxuserame> <rankID>` Used to rank people in a roblox group.\n`F!robloxinfo <Robloxuserame>` Search up the users information.', true)
.addField(`Adminstrative Commands`, '`F!ban <user> <reason>` Ban not nice people from your community.\n`F!kick <user> <reason>` Kick people that are not nice to you!\n`F!status <newstatus>` change the status of the bot for 5min!\n`F!clear <messages>` Clear messages from your current channel.\n`F!purge <messages>` Purges messages from your current channel\n`F!say <message>` Make the bot say something in the current channel.\n`F!sayembed <message>` Make the bot say something in the current channel but embedded!', true)
.addField(`Information Commands`, '`F!botinfo` Gives you some information about the bot.\n`F!serverinfo` Some information about the server', true)
.addField(`Ticket Commands`, '`F!ticket` This will create a ticket with your name!.\n`F!close` This will close the ticket, make sure to do it in the tickets channel!', true)
.setFooter(Config.Footer)
.setTimestamp();
message.author.send(Help)
  }
}
