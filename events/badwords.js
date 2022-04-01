const { MessageEmbed } = require('discord.js')

const Client = require('../index').Client

/**
 * You can ban words individually or a sentence
 */
Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
    const filteredWords = [
        'word1',
        'word2',
    ]

    if(filteredWords.some(w => `${message.content.toLowerCase()}`.includes(`${w}`))) {
        const responseBadword = new MessageEmbed()
        .setColor('RED')
        .addField('Author:', `${message.author}`, false)
        .addField('Message:', `${message}`, false)
        .addField('Channel:', `${message.channel}`, false);

/**
 * CHANNEL-ID: channel where messsages will be sent by the bot
 */
        message.delete()
        Client.channels.cache.get('CHANNEL-ID').send({embeds: [responseBadword]})
    }
})

/**
 * 
 */