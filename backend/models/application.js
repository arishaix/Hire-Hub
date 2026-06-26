const express = require('express');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const applicationSchema = new Schema({


})

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;