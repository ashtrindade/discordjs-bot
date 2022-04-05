const Client = require('../index').Client

Client.on('interactionCreate', inter => {
	if (!inter.isButton()) return;
	console.log(inter);
});