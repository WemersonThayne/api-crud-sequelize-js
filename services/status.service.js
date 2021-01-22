const dataBase = require('../models');
const StatusDto = require('../models/dto/status.dto');

class StatusService {

    static listAll(req, res){
        dataBase.Status.findAll().then(result =>{
            console.log(result)
            return res.status(200).json(result.map(item => (new StatusDto(item.id, item.description.toUpperCase()))));
        }).catch(error =>{
            return res.status(500).send(error);
        });
    }

    static listById(req,res){
        dataBase.Status.findByPk(req.params.id).then(result =>{
            return res.status(200).json(new StatusDto(result.id, result.description.toUpperCase()));
        }).catch(error =>{
            return res.status(500).send(error);
        });
    }

}


module.exports = StatusService;