const router = require('express').Router();
const path = require('path');

//route that sends index.html to user when a request is made
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

//route that sends notes.html to user when a request is made
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;