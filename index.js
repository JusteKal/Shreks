const Discord = require('discord.js');

const client = new Discord.Client();

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = ';';
//You can change the prefix if you like. It doesn't have to be !


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.login(process.env.TOKEN);
