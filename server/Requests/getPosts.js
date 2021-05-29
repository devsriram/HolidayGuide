const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Post = require('../models/event-model');

router.get('/getPosts', async (req,res) => {
    console.log("Request Received");
    const events = await Post.find();
    res.send(events);
});

router.patch('/:id/likePost', async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with ID");

    const event = await Post.findById(id);
    const updatedEvent = await Post.findByIdAndUpdate(id, {
        likes: event.likes + 1
    }, {new: true});

    if(updatedEvent) {
        res.send(updatedEvent);
        console.log("Post Updated");
    }
});

router.patch('/:id/dislikePost', async (req,res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with ID");

    const event = await Post.findById(id);
    const updatedEvent = await Post.findByIdAndUpdate(id, {
        dislikes: event.dislikes + 1
    }, {new: true});

    if(updatedEvent) {
        res.send(updatedEvent);
        console.log("Post Updated");
    }
});

module.exports = router;