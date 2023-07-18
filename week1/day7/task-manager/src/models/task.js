export class Task {
    constructor(task){
        this.task = task;
    }

    static fromJSON(json) {
        return new Task(json.task);
    }
}