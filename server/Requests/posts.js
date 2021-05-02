const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', (req,res) => {
    res.send("Hello There");
})

const postSchema = new mongoose.Schema({
    title: String,
    location: String,
    desc: [String],
    file: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    dislikes: Number
});

const Post = mongoose.model('Course', postSchema);

router.post('/', async function(req,res) {
    console.log("Server processing the data.....");
    if(!req.body.title) {
        console.log("Invalid details");
        return res.send("Invalid details");
    };
    const newPost = new Post({
        title: req.body.title,
        location: req.body.location,
        desc: req.body.desc,
        date: req.body.date,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })
    const result = await newPost.save();
    console.log(result);
})

module.exports = router;