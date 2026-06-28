const express = require('express');
const Job = require('../models/Job');

exports.createJob = async(req, res) => {
    try{
        const {title, description, location, company} = req.body;
        const recruiterId = req.user.userId
        if( !title || !description || !company || !location){
            return res.status(400).json({message: 'Incomplete data'})
        }
        const job = new Job({
            title: title,
            description: description,
            location: location,
            company: company,
            createdBy: recruiterId
        })
        await job.save();
        return res.status(201).json({message: 'Job created'})
    } catch(error){
         return res.status(500).json({ message: 'Internal Server Error' });
         
    }
}


exports.getJobs = async(req, res) => {
    try{
        const {title, location , company, page =1 , limit = 5} = req.query;
        const filters = {};
        if (title) {
            filters.title = { $regex: title, $options: 'i' }; 
        }
        if (company) {
            filters.company = { $regex: company, $options: 'i' }; 
        }
        if (location) { 
            filters.location = { $regex: location, $options: 'i' };
        }
        const skip = (page - 1) * limit;
        const jobs = await Job.find(filters).skip(skip).limit(Number(limit));
        return res.status(200).json({jobs: jobs})
}catch(error){
    return res.status(500).json({ message: 'Internal Server Error' });
}
}

exports.getJob = async(req, res) => {
    try{
        const {jobId} = req.params;
        const job = await Job.findById(jobId);
        if(!job){
        return res.status(404).json({message: 'Job not found'})
        }else {
            return res.status(200).json({job: job })
        }

    }catch(error){
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}