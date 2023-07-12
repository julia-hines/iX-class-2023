function printEven(num){
    for (let i = 0; i < num; i++){
        if (i % 2 == 0){
            console.log(i);
        }
    }
}

//printEven(50);

function fib(num){
    let prev = 0;
    let curr = 1;
    for (let i = 1; i < num; i++){
        let sum = prev + curr;
        console.log(sum);
        prev = curr;
        curr = sum;
    }

}

//fib(10);

function arrayAvg(arr){
    let sum = arr.reduce((x,y) => x+y)/arr.length;
    console.log(sum);

}
// let a = [1,2,3]
// arrayAvg(a);

function arrayMax(arr){
    let max = Math.max.apply(Math, arr);
    console.log(max);
}

// let a = [1,2,3];
// arrayMax(a);

function arrayMin(arr){
    let min = Math.min.apply(Math, arr);
    console.log(min);
}

// let a = [1,2,3];
// arrayMin(a);

function numVowels(str){
    str = str.toLowerCase();
    let count = 0;
    const vowels = ['a','e','i','o','u'];
    for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    
    console.log(count);
}

// numVowels('hello');

function add(num1, num2){
    console.log(num1+num2);
}

//add(1,2);

function multiply(num1, num2){
    console.log(num1*num2);
}
// multiply(3,2);

function cityToZip(city){
    if (city == ' '){
        console.log('No city entered.');
    }

    switch (city){
        case 'Encino':
            console.log('91436');
            break;
        
        case 'Seattle':
            console.log('98101');
            break;
        
        default:
            console.log('Sorr, city not in system.');

    }
}
//cityToZip('Encino');

function sortString(arr){
    arr.sort(function(a, b){return a-b});
}

function sortNum(arr){
    arr.sort(function(a, b){return a-b});
}

function reverseNum(num){
    num += "";
	console.log( num.split("").reverse().join(""));
}
//reverseNum(123);

function numOccurences(str, letter) {
    let count = 0;

    
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    console.log(count);
}

function filterStrings(arr, string){
    let filtered = arr.filter(function (str) {
        return str.indexOf(string) === 0;
      });
}

function filterNums(arr, num){
    let filtered = arr.filter(function (Number) {
        return Number.indexOf(num) === 0;
      });
}

function getDate(){
    const date = new Date(); 
    console.log(date);
}
//getDate();

function containsValueOver10 (array){
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > 10){
            newArray.push(array[i]);

        }
    }
}




function capitalize(str){
    console.log(str.toUpperCase());
}

//capitalize('hello');



