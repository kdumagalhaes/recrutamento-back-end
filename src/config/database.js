module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'authchallenge2',
  password: '1234',
  define: {
    timestamps: true,
    underscored: true,
  },
};

//timestamps === true cria o created_at e o updated_at nos registros do bd
//underscored === true define o nome das tabelas e colunas no formato snake_case