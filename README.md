<h1 align="center">Welcome to Some Random Quotes 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Shilokk/SomeRandomQuotes/#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> An api for quotes

### 🏠 [Homepage](https://somerandomquotes.gq)

## Author

👤 **Shilo k.**

* Github: [@ShiloKk](https://github.com/ShiloKk)

## Show your support

Give a ⭐️ if this project helped you!

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
    usage: "quote",
    aliases: null,
    run: async (client, message, args) => {
        const { body } = await superagent
        .get(`https://somerandomquotes.gq/api/quotes/random`)
        message.channel.send(body.quote + ' -' + body.author)
    }
}
```

#### If you need help message me on discord at Shilo K.#0366
