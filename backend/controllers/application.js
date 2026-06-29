const express = require('express');
const Application = require('../models/application');
const Job = require('../models/Job');

exports.createApplication = async(req, res) => {
    try{
        const { jobId} = req.params;
        const {resume} = req.body;
        const candidateId = req.user.userId;
        const job = await Job.findById(jobId);
        if( !job ){
           return res.status(404).json({message: 'Job doesnt exists'})
        }
        const existingApplication = await Application.findOne({$and: [
            { jobId: jobId },
            { userId: candidateId } ]
        })
        if( existingApplication){
            return res.status(409).json({message: 'Already Applied'})
        } 
        const application = new Application({
            jobId : jobId,
            userId: candidateId,
            resume: resume
        })
        await application.save();
        return res.status(201).json({message: 'Application created'})
    } catch(error){
        console.log(error)
         return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getApplications = async( req, res) => {
    try{
    const {jobId} = req.params;
    const applications = await Application.find({jobId: jobId}).populate(
'userId',
'username email'
)
.populate(
'jobId',
'title'
);
    if (applications.length === 0) {
        return res.status(404).json({ 
            message: 'No applications found' });
    }
        return res.status(200).json({applications: applications })
    }
    catch(error){
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

exports.getCandidateApplications = async( req, res) => {
    try{
    const CandidateId = req.user.userId
    const applications = await Application.find({userId:CandidateId}).populate(
'jobId',
'title company location'
);;
    if (applications.length === 0) {
        return res.status(404).json({ 
            message: 'No applications found' });
    }
        return res.status(200).json({applications: applications })
    }
    catch(error){
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}