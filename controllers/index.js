
const getIndex = (req, res) =>{
    res.render('index');
}

const postIndex = (req, res) => {
    console.log(req.body.title);
    res.redirect('/');
}

//exporter les fonctions

module.exports = {
    getIndex: getIndex,
    postIndex: postIndex    
}