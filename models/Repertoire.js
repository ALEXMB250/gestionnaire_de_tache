const mongoose = require('mongoose');
const RepertoireSchema = new mongoose.Schema({
    title: {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('tache', RepertoireSchema);