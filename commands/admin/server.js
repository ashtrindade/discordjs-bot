const { MessageEmbed } = require("discord.js");

module.exports.run = async (inter) => {
    const Response = new MessageEmbed()
    .setColor('BLUE')
    .addField('Name:', `${inter.guild.name}`, false)
    .addField('Members:', `${inter.guild.memberCount}`, false);

    await inter.reply({embeds: [Response]});
}

module.exports.help = {
    name: 'server',
    memberPermissions: ['MANAGE_ROLES'],
}