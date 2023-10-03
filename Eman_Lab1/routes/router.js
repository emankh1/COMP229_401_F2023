const path = require('path');
const express = require('express');
const router = express();

const publicDirectoryPath = path.join(__dirname, '../public')
router.use(express.static(publicDirectoryPath));

router.set('view engine', 'ejs');

router.get('/', function (req, res) {
    res.render('index');

})

router.get('/about', (req, res) => {
    res.render('about');

})

router.get('/projects', (req, res) => {
    res.render('projects');

})

router.get('/services', (req, res) => {
    res.render('services');

})

router.get('/contact', (req, res) => {
    res.render('contact');

})

router.listen(3000, () => {
    console.log("The server is running on port 3000");
})
