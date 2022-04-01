async function createCmd(Client, guildId) {
    const data = [
    /* [🛠 Teste]  */

        // ping cmd
        {
            name: 'ping',
            description: '[🛠 Test] - Replys Pong!',
        },

        // echo cmd
        {
            name: 'echo',
            description:'[🛠 Test] - Reply the message',
            options: [{
                name: 'text',
                type: 'STRING',
                description: 'input',
                required: true,
            }],
        },  

        
    /* [🛡 ADMIN] */

        // 🛡 server cmd
        {
            name: 'server',
            description: '[🛡 ADMIN] - Server info',
        },



    /* [❓ Info] */
        
        // roles cmd
        {
            name: 'roles',
            description: '[❓ Info] - Roles description',
        },






    ]

    await Client.guilds.cache.get('GUILD-ID')?.commands.set(data);
}

/*
/**
 * @permissions [
    * KICK_MEMBERS
    * BAN_MEMBERS
    * ADMINISTRATOR
    * MANAGE_CHANNELS
    * MANAGE_GUILD
    * MANAGE_MESSAGES
    * MANAGE_ROLES
    * MANAGE_WEBHOOKS
    * MANAGE_THREADS
    * MANAGE_EMOJIS_AND_STICKERS
 * ]
 */

module.exports = { createCmd }