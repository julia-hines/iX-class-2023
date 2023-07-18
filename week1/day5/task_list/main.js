class Task {
    constructor(task) {
        this.task = task;
    }

    static fromJSON(json){
        return new Task(json.task);
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.task = document.getElementById('task-input');
        this.tableBody = document.getElementById('table-body');
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
        this.tasks = [];
        this.loadTasksToLocalStorage();
        this.renderTaskTable();
    }

    onFormSubmit(e) {
        e.preventDefault();
    
        if (this.task.value == '') {
          return;
        }
    
        const input_task = new Task(this.task.value);
        this.tasks.push(input_task);
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
    
        this.task.value = '';
    }

    renderTaskTable() {
        this.tableBody.innerHTML = '';
    
        for (let i = 0; i < this.tasks.length; i++) {
          const input_task = this.tasks[i];
    
          const tr = this.createTaskTableRow(input_task);
          this.tableBody.appendChild(tr);
        }
    }

    createTaskTableRow(task) {
        const tr = document.createElement('tr');
    
        const tdTask = document.createElement('td');
    
        tdTask.innerHTML = task.task;
    
        const actionButtons = this.createActionButtons(task);
        const completeRadio = this.createRadio();
        const tdComplete = document.createElement('td');
        const tdActions = document.createElement('td');
        tdComplete.appendChild(completeRadio);
        tdActions.appendChild(actionButtons[0]);
        tdActions.appendChild(actionButtons[1]);
    
        tr.appendChild(tdTask);
        tr.appendChild(tdComplete);
        tr.appendChild(tdActions);
    
        return tr;
    }

    createRadio(){
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        return radioButton;
        
    }

    createActionButtons(input_task) {
        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
    
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            console.log('Delete was clicked');
            this.onDeleteTaskClicked(input_task);
        });
    
        editButton.setAttribute('class', 'btn btn-warning btn-sm ms-1');
        editButton.innerHTML = 'Edit';
        editButton.addEventListener('click', () => {
          this.onEditTaskClicked(input_task);
        });
    
        return [deleteButton, editButton];
      }

      saveTasksToLocalStorage() {
        const json = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', json);
      }


      loadTasksToLocalStorage() {
        const json = localStorage.getItem('books');
        if(json){
            const taskArr = JSON.parse(json);
            this.tasks = taskArr.map((x) => Task.fromJSON(x));
        }
      }

      onDeleteTaskClicked(task) {
        this.filterTaskArray(task);
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
      }

      onEditTaskClicked(task) {
        this.filterTaskArray(task);
        this.task.value = task.task;
        this.saveTasksToLocalStorage();
        this.renderTaskTable();
      }

      filterTaskArray(task){
        this.tasks = this.tasks.filter((x) =>{
            return task.task != x.task;
        });
      }
}


const ui = new UI();


/**
 * make add radio function
 * add edit button 
 * make edit and delete functions
 */