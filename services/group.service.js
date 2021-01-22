const dataBase = require('../models');
const GruopDto = require('../models/dto/group.dto');

class GroupService {

    static listAll(req, res) {
        dataBase.Gruop.findAll().then(result => {
            return res.status(200).json(result.map(item => (new GruopDto(item.id, item.description.toUpperCase()))));
        }).catch(error => {
            return res.status(500).send(error);
        });
    }

    static listById(req, res) {
        dataBase.Gruop.findByPk(req.params.id).then(result => {
            return res.status(200).json(new GruopDto(result.id, result.description.toUpperCase()));
        }).catch(error => {
            return res.status(500).send(error);
        });
    }

    static save(req, res) {
        dataBase.Gruop.create(req.body).then(result => {
            return res.status(201).json({message: "Group Create with sucess..."});
        }).catch(error => {
            return res.status(500).send(error);
        });
    }

    static async update(req, res) {
        const groupBD  = await dataBase.Gruop.findByPk(req.body.id);
        if(groupBD){
            dataBase.Gruop.update(req.body, { where :{ id: req.body.id}}).then(result => {
                return res.status(200).json({message: "Group Update with sucess..."});
            }).catch(error => {
                console.log(error)
                return res.status(500).send(error);
            });
        } else {
            return res.status(500).send({message: "Error to update Group: group Not found"});
        }
    }

    static async delete(req, res) {
        const groupBD  = await dataBase.Gruop.findByPk(req.params.id);
        if(groupBD){
            dataBase.Gruop.destroy({where : {id : req.params.id}}).then(result => {
                return res.status(200).json({message: "Group Deleted with sucess..."});
            }).catch(error => {
                console.log(error)
                return res.status(500).send(error);
            });
        } else {
            return res.status(500).send({message: "Error to delete Group: group Not found"});
        }
    }
}


module.exports = GroupService;