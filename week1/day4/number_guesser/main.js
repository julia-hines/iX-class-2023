let number = Math.floor((Math.random() * 100) + 1);
let guessedNumber = document.getElementById('number-guess');

function generateNumber() {
    if (guessedNumber == '') {
      alert('Enter a number.');
      return;
    }

    if (number == guessedNumber){
        output.innerHTML = `Correct! The number was ${number}.`;
        resetForm();
    } else {
        output.innerHTML = `Incorrect! The number was ${number}. Try Again!`;
    }
    resetForm();
}

function resetForm(){
    guessedNumber = '';
    number = '';
}