const Repertoire = require('../models/Repertoire');

const getEdit = (req, res) => {
    const { id } = req.params;
    Repertoire.findById(id, (err, tache) =>{
        if (err) console.log(err);
        res.render('edit',{
            tache:tache
        });
        console.log(tache);
    });
    
} 

module.exports = {
    getEdit: getEdit
}