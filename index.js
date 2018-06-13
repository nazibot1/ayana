//#region constants
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const YoutubeDl = require("ytdl-core"); 
//#endregion


//#region variables
var help_command = "!help : afficher les commandes disponibles\n  ";
var help_interaction = "!ping : renvoie pong\n";
//#endregion 


bot.login(botconfig.token);

bot.on("ready", () => {
	console.log(`${bot.user.username} is online`)
	bot.user.setActivity("It's fap time!");
})

bot.on("message", message => {

	if (message.content === "!ping") {
		message.reply("pong");
		console.log("pong");
	}

	if(message.content === "!help") {
		
		var help_embed = new Discord.RichEmbed() 
		.setColor("#006600") 
		.addField("Commande de Ayana :", help_command)
		.addField("Interaction", help_interaction);
		message.channel.send(help_embed);
	}

	if(message.content === "!play") {
		
	}
})

bot.on("guildMemberAdd", MemberAdd => {
	MemberAdd.guild.channels.find("username", `${MemberLeave.username}`).send("Bienvenu dans ma taverne mon chou :heart:.")

	console.log("enter");
});

bot.on("guildMemberRemove", MemberLeave => {
	MemberLeave.guild.channels.find("username", `${MemberLeave.username}`).send("Je suis désolée que tu partes... Tu étais choupi :cry:")
	console.log("enter");
});