// variables

let bill = document.getElementById("bill").value;

let option;

// tip percentages
let tipA = document.getElementById('five');
let tipB = document.getElementById('ten');
let tipC = document.getElementById('fifteen');
let tipD = document.getElementById('twenty-five');
let tipE = document.getElementById('fifty');

// number of people
let numOfPeople = document.getElementsByClassName('persons').value;
console.log(numOfPeople);

// tip amount per person
let tipPp = document.getElementById('tip-pp')

// validate input 
if (numOfPeople == 0) {
    document.getElementById('alert').innerHTML += " Can't be zero ";
}

function calculateTip() {
    switch(option) {
       case tipA :
           bill * 0.05;
           break;
        case tipB :
            bill * 0.1;
            break;
        case tipC :
            bill * 0.15;
            break;
        case tipD :
            bill * 0.25;
            break;
        case tipE :
            bill * 0.5;;
            break;
    }

    tipPp = bill 
}