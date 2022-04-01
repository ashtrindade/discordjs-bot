const Client = require('../index').Client
const { createCmd } = require('../dataHandler')

Client.on('ready', () => {
    Client.user.setPresence({ activities: [{ name: 'You', type: 'WATCHING'}] })
    console.log(`${Client.user.tag} is online!`)

    createCmd(Client, 'GUILD-ID')
})