const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
