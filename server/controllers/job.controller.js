const Job = require('../models/job.model');

// module.exports.index = (request, response) => {
//     response.json({
//         message: "Hello World"
//     });
// }

// module.exports.createJob = (request, response) => {
//     const { title, company, salary} = request.body; 
//     Job.create({
//         title, 
//         company, 
//         salary})
//     .then(job => response.json(job))
//     .catch(err => response.json(err));
// }

// this is one "get all" method which calls the model and uses the find function
// built into mongoDB, and stores the results in json readable format
// and catches any errors at the end if necessary
module.exports.getAll = (request, response) => {
    Job.find({})
    .then(results => response.json(results))
    .catch(err => response.json(err));
}


// module.exports.createJob = async (request, response) => {
//     try {
//     const newJob = new Job(request.body)
//     const results = await newJob.save()
//     response.json(results)
//     } 
//     catch{(err => response.status(400).json(err))}
//     }


module.exports.createJob = (req, res) => {
    Job.create(req.body)
        .then(newJob => {
            return res.json(newJob)
        }).catch(err => {
            return res.status(400).json(err)
        })
}

// module.exports.getAll = (req, res) => {
//     Job.find({})
//         .then(allJobs => {
//             return res.json(allJobs)
//         })
//         .catch(err => {
//             return res.json(err)
//         })
// }

module.exports.getOne = (req, res) => {
    Job.findById({ _id: req.params.id })
        .then(Job => {
            return res.json(Job)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.deleteOne = (req, res) => {
    Job.deleteOne({ _id: req.params.id })
        .then(deletedJob => {
            return res.json(deletedJob)
        })
        .catch(err => {
            return res.json(err)
        })
}

module.exports.updateOne = (req, res) => {
    Job.findOneAndUpdate({ _id: req.params.id }, req.body, {new: true , runValidators: true})
        .then(updatedJob => {
            return res.json(updatedJob)
        })
        .catch(err => {
            return res.status(400).json(err)
        })
}