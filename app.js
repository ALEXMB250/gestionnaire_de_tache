const express = require('express');
const app = express();
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.set('view engine', 'pug');

const indexRoute = require("./routes/index");

app.use("/", indexRoute);

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});
