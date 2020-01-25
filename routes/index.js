const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Repertoire des tâches");
});

module.exports = router;