const Discord = require("discord.js");

const PREFIX = "-";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("Verify bot is ready to verify!");
});

bot.on("guildMemberAdd", function(member){
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " joined to commit sewer side here");



});

bot.on("message", function(message){
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args  = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
        message.channel.sendMessage("Pong!");
        break;

        case "verify":
        message.member.addRole(message.member.guild.roles.find("name", "verified"));
        var embed = new Discord.RichEmbed()
        .addField("You've been verified!", "This channel is now invisible", true)
        .setColor("18f900")
        .setThumbnail(bot.user.avatarURL)

        message.channel.sendEmbed(embed);
        break;
            
    }

});


bot.login(process.evn.BOT_TOKEN);
