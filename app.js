const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/repertoire', 
            {useNewUrlParser: true, useUnifiedTopology: true})
                .then( () => {
    console.log('connecter a la base de donnees repertoire');
});

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'pug');

const indexRoute = require("./routes/index");
app.use("/", indexRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
