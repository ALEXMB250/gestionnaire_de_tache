const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/repertoire', 
            {useNewUrlParser: true, useUnifiedTopology: true})
                .then( () => {
    console.log('connecter a la base de donnees');
});


const indexRoute = require("./routes/index");

app.use("/", indexRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
