const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path')
const PORT = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static())
}

// rota de login e registro

app.use('/auth', require('../src/routes/jwtAuth'));

// rota do acesso ao dashboard

app.use('/dashboard', require('./routes/dashboard'));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
