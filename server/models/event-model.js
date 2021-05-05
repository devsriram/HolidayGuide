const mongoose = require('mongoose');
const express = require('express');

const postSchema = new mongoose.Schema({
    title: String,
    location: String,
    desc: String,
    fileName: String,
    date: {type: Date, default: Date.now},
    likes: Number,
    dislikes: Number
});

const Post = mongoose.model('Event', postSchema);

module.exports = Post;