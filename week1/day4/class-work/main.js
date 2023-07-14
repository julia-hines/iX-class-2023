function onButtonClicked(){
    console.log('Button was clicked');
}

let dom;
dom = document;
console.log(dom);
console.log(dom.forms);

let button = dom.getElementById('button-1');
console.log(button.id);
console.log(button.className);

//Fetch table

let table = document.getElementById('table');
console.log(table);

let marksCell = document.getElementById('marks-cell');
console.log(marksCell);
marksCell.innerHTML = 'Julia';

let tables = document.getElementByClassName('table');
console.log(tables);

console.log(document.querySelector('#table-1'));



