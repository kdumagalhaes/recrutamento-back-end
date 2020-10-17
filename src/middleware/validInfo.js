module.exports = (req, res, next) => {
  const { email, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  if (req.path === '/register') {
    console.log(!email.length);
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Faltam dados.');
    } else if (!validEmail(email)) {
      return res.status(401).json('E-mail inválido.');
    }
  } else if (req.path === '/login') {
    if (![email, password].every(Boolean)) {
      return res.status(401).json('Faltam dados.');
    } else if (!validEmail(email)) {
      return res.status(401).json('E-mail inválido.');
    }
  }

  // se tudo estiver ok, continue na rota
  next();
};
