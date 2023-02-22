const jobController = require("../controllers/job.controller")

module.exports = function(app){
    // app.get('/api', jobController.index);

    app.get('/api/job', jobController.getAll);
    app.post('/api/job/create', jobController.createJob);
    app.get('/api/job/view/:id', jobController.getOne)
    app.put('/api/job/edit/:id', jobController.updateOne);
    app.delete('/api/job/:id', jobController.deleteOne);
}
