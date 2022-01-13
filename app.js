const express = require('express');
const route = require('./routes/routes');
require('./config')


const app = express()
const port = 3000


app.use(express.json());

app.use(route)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})