
const Repertoire = require('../models/Repertoire');

const getIndex = (req, res) =>{
    res.render('index');
}

const postIndex = (req, res) => {
    const nouvelleTache = new Repertoire({
        title: req.body.title
    })

    /**
     * Enregistrer dans la base de donnees
     */

    nouvelleTache.save((err) => {
        if(err) console.log(err);
         res.redirect('/');
    });
}

//exporter les fonctions

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex    
}