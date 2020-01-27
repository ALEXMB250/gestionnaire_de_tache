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

const putEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    Repertoire.findByIdAndUpdate(id, {title: title}, (err) =>{
        if (err) console.log(err);
         res.redirect('/');
    });

    console.log;
}

module.exports = {
    getEdit: getEdit,
    putEdit: putEdit
}