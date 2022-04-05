const Client = require('../index').Client

Client.on('interactionCreate', inter => {
	if (!inter.isSelectMenu()) return;
	console.log(inter);
});