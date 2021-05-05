const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/event-model');

router.get('/', async (req,res) => {
    console.log("Request Received");
    const events = await Post.find();
    res.send(events);

})

module.exports = router;