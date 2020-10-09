var express = require('express');
var app = express();
app.get("/", (request, response) =>{
  response.sendStatus(200);
});
app.listen(process.env.PORT)

const Discord = require("discord.js");
const Client = new Discord.Client();
const roblox = require("noblox.js");
const Config = require("./Botmain/BotSystems/settings.json");
const Prefix = ""
const cookie = ""
function login() {
  return roblox.cookieLogin(cookie);
}

login()
  .then(function() {
    console.log("Logged into rankingbotservice!");
  })
  .catch(function(error) {
    console.log(`Login error: ${error}`);
  });
const { CommandHandler } = require("djs-commands");
const CH = new CommandHandler({
    folder: __dirname + '/Botmain/commands/',
    prefix: ["F!"]
  });
  Client.on("ready", async () => {

    console.log(`${Client.user.username} is online on ${Client.guilds.size} servers!`);
    Client.user.setPresence({
      game: {
        name: "FlyAero Members",
        type: "Listening",
        url: "https://www.twitch.tv/MrGot1be",
        status:"dnd"
      }
    });
  });

Client.login(process.env.TOKEN)

Client.on("message", (message) => {
    if(message.author.type === 'bot') return;
      if (message.content.indexOf(Prefix) !== 0) return;
    let args = message.content.split(" ");
    let command = args[0];
    let cmd = CH.getCommand(command);
    if(!cmd) return;
  
    try{
        cmd.run(Client,message,args)
    }catch(e){
        console.log(e)
    }
});

Client.on("guildMemberAdd", member => {
    const channel = member.guild.channels.find(ch => ch.id === Config.JoinlogsID);
    if (!channel) return;
    const embed = new Discord.RichEmbed()
      .setAuthor(`Welcome to ${member.guild.name}`, Client.user.displayAvatarURL)
      .setColor(Config.Color)
      .setDescription(`Greetings ${member}, welcome to ${member.guild.name}! Make sure to make friends and have fun`)
      .setFooter(Config.Footer)
      .setTimestamp();
  
    let bicon = member.displayAvatarURL;
    let User = new Discord.RichEmbed()
    .setAuthor('Joinlogs')
    .setDescription(`${member} has joined`)
    .setColor(Config.Color)
    .setThumbnail(bicon)
    .addField("User Name", member.username)
    .addField("Created On", member.createdAt);
     var logChannel = member.guild.channels.find("id", Config.JoinLogsC);
   if (!logChannel) return member.channel.send("❌ Cannot find log channel");
    logChannel.send(User);
    channel.send(embed);
  });

Client.on("guildMemberRemove", member => {
    const channel = member.guild.channels.find(ch => ch.id === Config.JoinlogsID);
    if (!channel) return;
    const embed = new Discord.RichEmbed()
      .setAuthor(`Someone has left!`, Client.user.displayAvatarURL)
      .setColor(Config.Color)
      .setDescription(`${member} has left ${member.guild.name}`)
      .setFooter(Config.Footer)
      .setTimestamp();
  
      let bicon = member.displayAvatarURL;
    let User = new Discord.RichEmbed()
    .setAuthor('User left')
    .setDescription(`${member} has left`)
    .setColor(Config.Color)
     var logChannel = member.guild.channels.find("id", Config.JoinLogsC);
   if (!logChannel) return member.channel.send("❌ Cannot find log channel");
    logChannel.send(User);
    channel.send(embed);
  });

