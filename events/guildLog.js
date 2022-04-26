const { MessageEmbed } = require('discord.js')

const Client = require('../index').Client

// Added
Client.on("guildCreate", async(guild) => {
    const channel = Client.guilds.cache.get(`your-guild-id-here`).channels.cache.get(`your-log-channel-id-here`)

    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle(`Bot added to a server`)
        .addField('\u200B', `**Name:** ${guild.name} \n**Members:** ${guild.memberCount} \n**ID:** ${guild.id}`, false)
        .addField('\u200B', `**Owner** ${await guild.fetchOwner()} \n**ID:** ${guild.ownerId}`, false)   
    
        channel.send({embeds: [embed]})
})

// Removed
Client.on("guildDelete", async(guild) => {
    const channel = Client.guilds.cache.get(`your-guild-id-here`).channels.cache.get(`your-log-channel-id-here`)

    const embed2 = new MessageEmbed()
        .setColor('RED')
        .setTitle(`Bot removed from a server`)
        .addField('\u200B', `**Name:** ${guild.name} \n**Members:** ${guild.memberCount} \n**ID:** ${guild.id}`, false)
        .addField('\u200B', `**Owner: ** ${await guild.fetchOwner()} \n**ID:** ${guild.ownerId}`, false)  

    
        channel.send({embeds: [embed2]})
})

/** 
 * @important = The bot needs MODERATE_MEMBERS permission to get server info when it is remover or else it will crash.
 * 
 * You can customize the embeds as you wish
 */