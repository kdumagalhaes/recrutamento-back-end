const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// rota de login e registro

app.use('/auth', require('../src/routes/jwtAuth'));

// rota do acesso ao dashboard

app.use('/dashboard', require('./routes/dashboard'));

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333');
});
