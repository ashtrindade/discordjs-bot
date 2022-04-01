const { MessageEmbed } = require("discord.js");

module.exports.run = async (inter) => {
    const responseRoles = new MessageEmbed()
    .setTitle('Roles')
    .setColor('BLUE')
    .addField('Staff', '**Staff**  - Admin\n**Mod** - Mods', false)
    .addField('Members:', `**VIP**\n**Member**`, false);

    await inter.reply({embeds: [responseRoles]});
}

module.exports.help = {
    name: 'roles',
    memberPermissions: [], // Leave empty for @everyone
}

