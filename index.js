const discord = require('discord.js')
const dotenv = require('dotenv') // You must creat a .env file with the token
const fs = require('fs') // You need to instal fs module for the command handler
const Client = new discord.Client({ 
    intents: [
        discord.Intents.FLAGS.GUILDS,
        discord.Intents.FLAGS.GUILD_MEMBERS,
        discord.Intents.FLAGS.GUILD_MESSAGES,
        discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord.Intents.FLAGS.DIRECT_MESSAGES
    ],
    allowedMentions: { parse: ['users', 'roles'], repliedUser: true }
})

dotenv.config()

// Collections
Client.commands = new discord.Collection();
Client.events = new discord.Collection();
module.exports.Client = Client

// Event Handler
fs.readdirSync('./events/').forEach(dir => {
    var jsFiles = fs.readdirSync('./events/').filter(f => f.split('.').pop() === 'js');
    if (jsFiles.length <= 0) return console.log('[EVENTS HANDLER] - No events found!');
    let check = false
    jsFiles.forEach(file => {
        const eventGet = require(`./events/${file}`)

        try {
            Client.events.set(eventGet.name, eventGet)
            if(check == false) {
                console.log(`[EVENTS HANDLER] - File ${file} was loaded`)
                check = true
            }
        } catch(error) {
            return console.log(error)
        }
    });
});

// Commands Handler
fs.readdirSync('./commands/').forEach(dir => {
    fs.readdir(`./commands/${dir}`, (err, files) => {
        if (err) throw err;

        var jsFiles = fs.readdirSync(`./commands/${dir}`).filter(f => f.split('.').pop() === 'js');
        if (jsFiles.length <= 0) return console.log('[COMMANDS HANDLER] - No command found!');

        jsFiles.forEach(file => {
            var fileGet = require(`./commands/${dir}/${file}`);
            console.log(`[COMMANDS HANDLER] - File ${file} was loaded`)

            try {
                Client.commands.set(fileGet.help.name, fileGet);
            } catch (err) {
                return console.log(err);
            }
        });
    });
});

/**
 * Create a dotenv file and put your token there.
 * DON'T COMMIT YOUR TOKEN
 */
Client.login(process.env.DISCORD_TOKEN);


// File structure
// Commands > Category > File || Commands > Moderation > ban.js