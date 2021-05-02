const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const posts = require('./Requests/posts');
const app = express();
const cors = require('cors');

const port = process.env.PORT || 5000;
app.use(cors());
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.use('/addPost',posts);

mongoose.connect("mongodb://localhost/playground")
    .then(app.listen(port, function() {
        console.log(`Listening at http://localhost:${port}`)}))
    .catch((error) => {
        console.log("Cannot connect to database ",error);
    })

