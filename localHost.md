# How to host your bot on local host
Install `nodemon` and `express` packages:

```
npm i nodemon
npm i express
```

Go to `package.json` and write this:
```
  "scripts": {
    "start": "nodemon index.js"
  },
```
Go to `index.js` and write this at the top:
```
const PORT  = 'port-here' // 8000 for example
const express = require('express')
const app = express() 
```

And this at the bottom:
```
app.get('/', function (req, res) {
    res.send(`${Client.user.tag} is online! `)
  })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
```
# <h3>Running:</h3>
To start the server:
```
npm run start
```
Then you can go to `http://localhost:port-you-set/` and you will see the message.

# <h3>To stop the server:</h3>
`Ctrl+C` and confirm with `S`

# <h3>And that is it! </h3>
Every time you save your `index.js` file it will restart the local server.