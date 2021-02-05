const server = require('./src/app.js');
const { conn } = require('./src/db.js'); 

// Sincronizadno todos los modelos a la vez.
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); 
  });
});