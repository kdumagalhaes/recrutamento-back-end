module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'sa',
  password: '123',
  database: 'teste',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}

//timestamps === true cria o created_at e o updated_at nos registros do bd
//underscored === true define o nome das tabelas e colunas no formato snake_case