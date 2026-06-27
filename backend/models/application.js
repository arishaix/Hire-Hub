const express = require('express');
const mongoose = require('mongoose');
const {Schema} = mongoose;

const applicationSchema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Applied' , 'Rejected', 'Accepted'],
        default: 'Applied'
    },
    resume: {
        required: false,
        type: String
    }
})

const Application = mongoose.model('Application', applicationSchema);
module.exports = Application;