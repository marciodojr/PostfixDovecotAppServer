# PostfixDovecotAppServer

Servidor de API em NodeJS para gestão de domínios e emails utilizados pelo postfix, dovecot. Permite registrar domínios, emails e configurar o redirecionamento de mensagens.


# Como instalar


## Execute os comandos
```sh
git clone 
npm install
```

## Crie um arquivo de configurações `config/db-config.js`
```js
module.exports = {
    database: 'servermail',
    username: 'root',
    password: 'root',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: 'path/to/database.sqlite'
};
```

## Crie o banco de dados e adicione dados

Os arquivos `data/db.sql` e `data/test.sql` possuem informações necessárias caso queira usar o mysql.


## Rode o servidor
```
npm start
```