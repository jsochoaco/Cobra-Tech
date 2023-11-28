const server = require('./src/server.js');
const { conn } = require('./src/db.js');
const PORT = process.env.PORT || 3001;


conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log(`Server listening at ${PORT}`);
  });
});
