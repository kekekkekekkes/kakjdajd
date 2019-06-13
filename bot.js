const Discord = require('discord.js')
const client = new Discord.Client()
const prefix = "-"

console.log(`hello`)



client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`🌈RAINBOW | -help |`,`By : KaNe `];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});


   client.on("message", message => {
 if (message.content === "-help") {
     message.channel.send('**:heart_exclamation: تم ارسال رسالة في الخاص**  ');
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setDescription(`
             
====================🌈 Help Rainbow. 🌈=====================
g!set = لبدا وانشاء رتبه الرينبو | Rainbow Start & Create Rainbow Role
g!invite = لاضافه البوت | Bot Invite 
**!ملاحظه: اذا ما شتغل البوت جرب تحط رتبه البوت اعلى من رتبه الرينبو ** 
**NOTE: If the bot is working, try to drop the bot role higher than the Rainbow role !**
=====================🌈 Help Raibow. 🌈=====================
`)
   message.author.sendEmbed(embed)
   
   }
   });
   client.on("message", message => {
 if(message.content.startsWith(prefix + "set")) {
   let rainbow = message.guild.roles.find(`name`, "Rainbow");
  //start of create role
  if(!rainbow){
         rainbow =  message.guild.createRole({
        name: "Rainbow",
        color: "#000000",
        permissions:[]
      })
    }}})
  


    client.on("message", message => {
console.log('Welcome')
    const config = require('./config.json');
 const roles = config.roleToDisco;
  function discoRole() {
    let RANDOM = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    roles.forEach((role) => {
      let theRole = message.guild.roles.find("name", role);
      if(!theRole) return;
 {

        client.on('ready', () => {                           

        return setInterval(() => { discoRole(); }, config.ms);
        theRole.edit({color: RANDOM}).catch(e => {
      })
    })
}})
  }})
  

    
  
 


client.login(process.env.BOT_TOKEN)

