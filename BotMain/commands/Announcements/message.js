
const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Message.js • Lowered Command',
            this.alias = ['message']
    }

async run(Client,message,args) {
message.delete();
      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))
            return message.reply("❌ You do not have permissions to use this command. Please contact a staff member.")
  let MessagedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let UserAgrs = args[1].slice
  let botmessage = args.join(" ").slice(9);
if (!UserAgrs) return message.channel.send("❌ No user provided | Use the correct format `!message <user> <message>`");
message.author.send(botmessage);
  }
}