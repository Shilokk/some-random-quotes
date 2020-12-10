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

