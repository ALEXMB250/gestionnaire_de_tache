
const Repertoire = require('../models/Repertoire');

const getIndex = (req, res) =>{
    Repertoire.find({}, (err, taches) => {
        if(err) console.log(err);
        res.render('index', {
            // collections des taches stocker
            taches : taches
        });
    })
    
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

const deleteIndex = (req, res) => {
    const { id } = req.params;
    Repertoire.findByIdAndDelete(id, (err) =>{
        if (err) console.log(err);
         res.redirect('/');
    })
}

//exporter les fonctions

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex,
    deleteIndex: deleteIndex
}