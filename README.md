
# Backend Challenge - nuvemWeb

![](screencapture-localhost-3000-register-2020-10-17-19_06_43.png)
 

## API de autenticação:

Esta API tem o objetivo de realizar a criação, autenticação, criação das tabelas e salvamento de dados no banco.

### Ferramentas:
| Ferramenta | Utilidade |
|---|---|
| `Dotenv` | Lib para criação do arquivo para variáveis de ambiente (arquivo ignorado não consta no repo por motivos de segurança). |
| `Postgres` | Banco de dados. |
| `Express` |Framework backend JS. |
| `pg` |Lib de manipulação do banco de dados. |
| `jsonwebtoken` | Lib que auxilia na criação do JWT. |

### Instalação:
```
npm install
```
-   Crie o arquivo  `.env`  na raíz do projeto;
-   Declare o `secret` do JWT com o seguinte nome: `jwtSecret`
```
npm run dev
```
- Faça o clone do repo: https://github.com/kdumagalhaes/recrutamento-front-end e siga as instruções no README.
- [Tutorial para instalação do PostgreSQL.](https://www.youtube.com/watch?v=fZQI7nBu32M)