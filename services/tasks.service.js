const dataBase = require('../models');
const GroupDto = require('../models/dto/group.dto');
const StatusDto = require('../models/dto/status.dto');
const TaskDto = require('../models/dto/task.dto');

class TasksService {

    static async listAll(req, res) {
        try {
            const result = await dataBase.Task.findAll({ include: [dataBase.Status, dataBase.Gruop] });
            res.status(200).json(result.map(task => new TaskDto(task.id,
                task.title, task.description,
                task.dateInitial, task.dateFinal,
                new StatusDto(task.Statuses[0].id, task.Statuses[0].description),
                new GroupDto(task.Gruops[0].id, task.Gruops[0].description))));
        } catch (error) {
            return res.status(500).send(error);
        }

    }

    static listById(req, res) {
        dataBase.Task.findByPk(req.params.id, { include: [dataBase.Status, dataBase.Gruop] }).then(task => {
            return res.status(200).json(new TaskDto(task.id,
                task.title, task.description,
                task.dateInitial, task.dateFinal,
                new StatusDto(task.Statuses[0].id, task.Statuses[0].description),
                new GroupDto(task.Gruops[0].id, task.Gruops[0].description)));
        }).catch(error => {
            console.log(error)
            return res.status(500).send(error);
        });
    }

    static save(req, res) {
        const tasks = req.body;
        tasks.createdAt = new Date();
        tasks.updatedAt = new Date();
        dataBase.Task.create(tasks).then(() => {
            return res.status(201).json({ message: "Task Create with sucess..." });
        }).catch(error => {
            return res.status(500).send(error);
        });
    }

    static async update(req, res) {
        const task = await dataBase.Task.findByPk(req.body.id);
        if (task) {
            dataBase.Task.update(req.body, { where: { id: req.body.id } }).then(() => {
                return res.status(200).json({ message: "Tasks Update with sucess..." });
            }).catch(error => {
                console.log(error)
                return res.status(500).send(error);
            });
        } else {
            return res.status(500).send({ message: "Error to update task: task Not found" });
        }
    }

    static async delete(req, res) {
        const task = await dataBase.Task.findByPk(req.params.id);
        if (task) {
            dataBase.Task.destroy({ where: { id: req.params.id } }).then(() => {
                return res.status(200).json({ message: "Task Deleted with sucess..." });
            }).catch(error => {
                console.log(error)
                return res.status(500).send(error);
            });
        } else {
            return res.status(500).send({ message: "Error to delete Group: group Not found" });
        }
    }

}


module.exports = TasksService;