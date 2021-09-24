// var conn = require('../config/db');
var router = require('express').Router();

router.get('/', (req, res) => {
    
});

router.get('/ping', (req, res) => {
    res.send('s');
});

module.exports = router;