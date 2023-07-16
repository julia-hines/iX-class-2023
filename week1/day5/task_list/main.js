class Task {
    constructor(task) {
        this.task = task;
    }
}

class UI {
    constructor() {
        this.form = document.getElementById('form');
        this.task = document.getElementById('task-input');
        this.tableBody = document.getElementById('table-body');
        this.form.addEventListener('submit', (e) => this.onFormSubmit(e));
        this.tasks = [];
        this.renderTaskTable();
    }

    onFormSubmit(e) {
        e.preventDefault();
    
        if (this.task.value == '') {
          return;
        }
    
        const input_task = new Task(this.task.value);
        this.tasks.push(input_task);
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
    
        tdTask.innerHTML = task.title;
    
        const actionButtons = this.createActionButtons(task);
        const completeRadio = this.createRadio();
        const tdComplete = document.createElement('td');
        const tdActions = document.createElement('td');
        tdComplete.appendChild(completeRadio[0]);
        tdActions.appendChild(actionButtons[0]);
    
        tr.appendChild(tdTask);
        tr.appendChild(tdComplete);
        tr.appendChild(tdActions);
    
        return tr;
    }

    // deleteTaskTableRow(input_task){
        
    // }

    createRadio(){
        const radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        
    }

    createActionButtons(input_task) {
        const deleteButton = document.createElement('button');
        //const editButton = document.createElement('button');
    
        deleteButton.setAttribute('class', 'btn btn-danger btn-sm me-1');
        deleteButton.innerHTML = 'Delete';
        deleteButton.addEventListener('click', () => {
            console.log('Delete was clicked');
        });
    
        // editButton.setAttribute('class', 'btn btn-warning btn-sm ms-1');
        // editButton.innerHTML = 'Edit';
        // editButton.addEventListener('click', () => {
        //   console.log('Edit was clicked');
        // });
    
        return [deleteButton];
      }
}

const ui = new UI();


/**
 * make add radio function
 * add edit button 
 * make edit and delete functions
 */