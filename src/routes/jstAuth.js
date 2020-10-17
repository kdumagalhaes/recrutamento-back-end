const { Router } = require('express');
const { restart } = require('nodemon');

const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

//criar conta

router.post('/register', async (req, res) => {
  // desestruturar req.body
  const { email, password } = req.body;

  try {
    // checar se o usuário já existe
    const user = await pool.query('SELECT * FROM users WHERE user_email = $1', [
      email
    ]);
    if (user.rows.length !== 0) {
      return res.status(401).json('Usuário já registrado.');
    }

    //bcrypt a senha do usuário
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    //registra usuário no bd
    let newUser = await pool.query(
      'INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING *',
      [email, bcryptPassword]
    );
    // res.json(newUser.rows[0]);

    //gerar jwt
    const token = jwtGenerator(newUser.rows[0].user_id);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor.');
  }
});

module.exports = router;
