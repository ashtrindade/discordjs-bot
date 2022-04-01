const { MessageEmbed } = require('discord.js')

const Client = require('../index').Client

Client.on('interactionCreate', async inter => {
    if(inter.isCommand()) {
        let commands = Client.commands.get(inter.commandName)
        if(!inter.member.permissions.has(commands.help.memberPermissions)){
            const responseError = new MessageEmbed()
            .setColor('RED')
            .setDescription('🛑 You dont have enough permissions!'); // Message sent if the user don't have permission to use the command

            return await inter.reply({embeds: [responseError], ephemeral: true });
        }
        if(commands) commands.run(inter)
    }
})