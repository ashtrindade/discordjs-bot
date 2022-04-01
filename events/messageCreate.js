const Client = require('../index').Client

/**
 * Prevents the bot to be triggered by other bots or by DM
 */
Client.on('messageCreate', async message => {
    if(message.author.bot || message.channel.type == 'DM') return
})