const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
