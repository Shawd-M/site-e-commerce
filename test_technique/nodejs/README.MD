Créer un fichier .env avec écrit dedans : 

// server.js

PORT=40 
NODE_ENV=development

const port = process.env.PORT;
console.log(`Your port is ${port}`);

DB_CONNECTION=mongodb://localhost/Goodies