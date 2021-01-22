const service = require('../services/group.service')

module.exports = app => {
    const basePatch = `/groups`;

    app.get(`${basePatch}`, function (req, res) {
        service.listAll(req,res);
    });  
    
    app.get(`${basePatch}/:id`, function (req, res) {
        service.listById(req,res);
    });  

    app.post(`${basePatch}`, function (req, res) {
        service.save(req,res);
    });  

    app.put(`${basePatch}`, function (req, res) {
        service.update(req,res);
    }); 

    app.delete(`${basePatch}/:id`, function (req, res) {
        service.delete(req,res);
    }); 
}