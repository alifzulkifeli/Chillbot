require("dotenv").config();
require = require("esm")(module);
module.exports = require("./aws-notes.js");
const Discord = require("discord.js");
const { awsNotes } = require("./aws-notes");
const client = new Discord.Client();
const BOT_PREFIX = "!";
const MOD_ME_COMMAND = "cb ";

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
	if (msg.content === "kecek sikit bot") {
		msg.reply("Mu kecek supo lagu musuh isle");
	}
});

client.on("message", (msg) => {
	const prefix = msg.content.slice(0, 4);
	const body = msg.content.slice(4, msg.content.length);
	const head = body.substr(0, body.indexOf(" "));
	const tail = body.substr(body.indexOf(" ") + 1);
	console.log(msg);

	if (prefix === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
		switch (head) {
			case "play":
				play(msg, tail);
				break;
			case "aws":
				awsNotes(msg, tail);
				break;
			case "h":
				msg.reply(`
        !cb {params} {type}

        ex:
        !cb aws ec2
        !cb aws iam
        `);
				break;
			default:
				msg.reply("mu kecek molek sikit ambo tok pehe");
		}
	}
});

function play(msg, tail) {
	msg.reply(tail);
}

function test(msg) {
	msg.reply(msg.content);
}

client.login(process.env.BOT_TOKEN);
