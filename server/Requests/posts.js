const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/event-model')

router.get('/', (req,res) => {
    res.send("Hello There");
})

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './images');
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now()+file.originalname);
//     }
// });

// const fileFilter = (req, file, cb) => {
//     const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
//     if(allowedFileTypes.includes(file.mimetype)) {
//         cb(null, true);
//     } else {
//         cb(null, false);
//     }
// }

// var upload = multer({storage: storage});

router.post('/', async (req,res) => {
    console.log("Server processing the data.....");
    if(!req.body) {
        console.log("Invalid details");
        return res.send("Invalid details");
    };
    const newPost = new Post({
        title: req.body.title,
        location: req.body.location,
        desc: req.body.desc,
        fileName: req.body.fileName,
        date: req.body.date,
        likes: req.body.likes,
        dislikes: req.body.dislikes
    })
    const result = await newPost.save();
    console.log(result);
})

module.exports = router;