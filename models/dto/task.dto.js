
class TaskDto{

    constructor(id,title, description, dateCreating, dateInitial, dateFinal, status, group ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dateCreating = dateCreating;
        this.dateInitial = dateInitial;
        this.dateFinal = dateFinal;
        this.status = status;
        this.group = group;
    }
    
}

module.exports = TaskDto;