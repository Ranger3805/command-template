const { Client, Collection } = require("discord.js");
const{ discord } = require("discord.js");
const { RichEmbed } = require("discord.js");
const {token} = require("./botconfig.json");
const bot = new Client();
const moment = require("moment");
const fs = require("fs");
const {prefix} = require("./botconfig.json");

["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handlers/${x}`)(bot));


bot.login(token);