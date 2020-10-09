

const Discord = require("discord.js");
const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Kick.js • Lowered Command',
            this.alias = ['kick']
    }

async run(Client,message,args) {
  if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
  if(args[0] == "help"){
    message.reply("Usage: !kick <user> <reason>");
    return;
  }
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("❌ Can't find the user");
  let kReason = args.join(" ").slice(27);
      if (!message.member.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))  return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
      if (kUser.roles.some(r => [Roles.SenoirRankID,Roles.AdminstratorID,Roles.HighRankID].includes(r.id)))  return message.channel.send("❌ You can't ban a adminstrator!");
  if (!kReason) return message.channel.send("❌ No reason provided | Use the correct format `!kick <user> <reason>`");


message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`confirm\`. This will time out in 10 seconds and be cancelled.`)
    .then((m) => {
        message.channel.awaitMessages(response => response.content === `confirm` || response.content === `Confirm`, {
                max: 1,
                time: 10000,
                errors: ['time'],
            })
            .then(async (collected) => {
            const embed = new Discord.RichEmbed()
  .setAuthor('Developer panel', `${message.author.displayAvatarURL}`)
  .setColor(Config.Color)
  .addField(`Succesfully banned user`, `**:ballot_box_with_check: Kicked**`)
  .setFooter(Config.Footer)
  .setTimestamp();
message.channel.send(embed);

  let kickEmbed = new Discord.RichEmbed()
  .setAuthor('Developer panel', `${message.author.displayAvatarURL}`)
  .setDescription(`${kUser}** Has been kicked from the server by <@${message.author.id}>**\n \n**General Information**\n \nTime: ${message.createdAt}\nReason: ${kReason}\nKicked in channel: ${message.channel}`)
  .setColor(Config.Color)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`id`, Config.LogsID);
  if(!kickChannel) return message.channel.send("❌ Cannot find log channel");
          
               await kUser.kick(kReason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
  kickChannel.send(kickEmbed);
            })
    })

}
}