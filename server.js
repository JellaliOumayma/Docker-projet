'use strict';
const express = require('express');
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

// Définir le répertoire contenant les fichiers statiques
const publicDirectoryPath = path.join(__dirname, 'Coffe Website');

// Configurer Express pour servir les fichiers statiques
app.use(express.static(publicDirectoryPath));

app.listen(PORT, HOST, () => {
  console.log(`Running on ${HOST}:${PORT}`);
});