const Discord = require("discord.js");
const roblox = require("noblox.js");

var group =  5707997;
var maximumRank = 255;
var AuthorName = "FlyAeroRanker";

const Config = require('../../BotSystems/settings.json');
const Roles = require('../../BotSystems/roleSettings.json');
const errors = require("../../errors.js");
module.exports = class test {
    constructor(){
            this.name = 'Setrank.js • Lowered Command',
            this.alias = ['setrank']
    }

async run(Client,message,args) {
      if (!message.member.roles.some(r => [Roles.RankingID,Roles.AdminstratorID].includes(r.id)))
      return message.channel.send("❌ You do not have permissions to use this command. Please contact a staff member.");
    var username = args[1];
    var rankIdentifier = Number(args[2]) ? Number(args[2]) : args[2];
    if (!rankIdentifier) return message.channel.send("Please enter a rank!");
    if (username) {
      const embed = new Discord.RichEmbed()
        .setAuthor(`AuthorName`, `Client.user.avatarURL`)
        .setTitle("Database")
        .setColor(Config.Color)
        .setDescription(`Checking for ${username}`);
      message.channel.send(embed);
      roblox
        .getIdFromUsername(username)
        .then(function(id) {
          roblox
            .getRankInGroup(group, id)
            .then(function(rank) {
              if (maximumRank <= rank) {
                const embed = new Discord.RichEmbed()
                  .setAuthor(`AuthorName`, Client.user.avatarURL)
                  .setTitle("FlyAero  Assistant  Database")
                  .setColor(Config.Color)
                  .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                  .setDescription(`❌ You cannot demote or promote the owner.`);
                message.channel.send(embed);
              const errorlog = message.guild.channels.find(
                      ch => ch.id === Config.LogsID
                    );
                    const Error = new Discord.RichEmbed()
                      .setTitle("Blocked command")
                      .setColor(Config.Color)
                      .setDescription(`❌ ${message.author} has tried to promote/demote ${username}`);
                    errorlog.send(Error);
              } else {
      
                const embed = new Discord.RichEmbed()
                  .setAuthor(`FlyAero Assistant`, Client.user.avatarURL)
                  .setTitle("FlyAero Assistant Database")
                  .setColor(Config.Color)
                  .setFooter(Config.Footer)
                  .setDescription(`I have found ${username} in my databse, her/his rankID is ${rank}`);
                message.channel.send(embed);

          roblox
                  .setRank(group, id, rankIdentifier)
                  .then(function(newRole) {
                    const embed = new Discord.RichEmbed()
                  .setAuthor(`FlyAero Assistant`, Client.user.avatarURL)
                      .setTitle("FlyAero Assistant")
                      .setColor(Config.Color)
                      .setThumbnail(`https://www.roblox.com/bust-thumbnail/image?userId=${id}&width=420&height=420&format=png`)
                      .setFooter(Config.Footer)
                      .setDescription(`I gave ${username} the ${newRole.name} rank`);
                    message.channel.send(embed);
          var EmbedLog = new Discord.RichEmbed()
            .setTitle(`Command logged`)
            .setColor(Config.Color)
            .setDescription(`${message.author} has used ` + "`-setrank`" + ` in ${message.channel}`)
            .setFooter(Config.Footer)
     
        var logChannel = message.guild.channels.find("id", Config.LogsID);
       if (!logChannel) return message.channel.send("❌ Cannot find log channel");
      logChannel.send(EmbedLog)
                  })
     .catch(function(err) {
                    console.error(err);
                    const embed = new Discord.RichEmbed()
                      .setTitle("Error")
                      .setColor(Config.Color)
                      .setDescription(`Failed to rank ${username}`);
                    message.channel.send(embed);
                    const Error = new Discord.RichEmbed()
                      .setTitle("Error log")
                      .setColor(Config.Color)
                      .setDescription(err);
                    message.channel.send(Error);
                  });
              }
            })
            .catch(function(err) {
              const embed = new Discord.RichEmbed()
                .setTitle(`User is not in Celestro`)
                .setColor(Config.Color)
                .setDescription(`${username} has left or is not currently in the group.`);
              message.channel.send(embed);
            });
        })
        .catch(function(err) {
          const embed = new Discord.RichEmbed()
            .setTitle(`User does not exist on roblox!`)
            .setColor(Config.Color)
            .setDescription(`User: ${username} does not appear on our database servers. Please write the correct format of the username.`);
          message.channel.send(embed);
        });
    } else {
      const embed = new Discord.RichEmbed()
        .setTitle("User not found or no user given")
        .setColor(0xff4343)
        .setDescription('Please enter a `ROBLOX-USERNAME`.');
      message.channel.send(embed);
    }
    return;
  }
}
