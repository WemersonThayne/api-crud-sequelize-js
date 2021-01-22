const service = require('../services/status.service');

module.exports = app => {
    const basePatch = `/status`;

    app.get(`${basePatch}`, function (req, res) {
        service.listAll(req,res);
    });  
    
    app.get(`${basePatch}/:id`, function (req, res) {
        service.listById(req,res);
    });  

}