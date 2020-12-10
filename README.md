<div align="center">
    <h1>Some Random Quotes</h1>
</div>

## Examples:
### example with node fetch

```js
const fetch = require('node-fetch')
    
fetch('https://somerandomquotes.gq/api/quotes/random')
.then(res => res.json())
.then(json => console.log(json));
```


### example with discord.js and superagent

```js
const superagent = require('superagent')

module.exports = {
    name: "quote",
    description: "Sends a random quote!",
    category: "fun",
    usage: "m!panda",
    aliases: null,
    run: async (client, message, args) => {
        const { body } = await superagent
        .get(`https://somerandomquotes.gq/api/quotes/random`)
        message.channel.send(body.quote + ' -' + body.author)
    }
}
```

#### If you need help message me on discord at 🎄Festive Shilo K.🎄#0366
