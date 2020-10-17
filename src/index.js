const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/auth', require('../src/routes/jstAuth'))

app.listen(3333, () => {
  console.log("Servidor rodando na porta 3333")
})

