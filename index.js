/** importa o package.json para pegar versão projeto */
const server = require('./config/server');
//const config = require('./config/config');

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/hello`);
});

