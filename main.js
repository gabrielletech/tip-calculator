// constant variables

// bill amount
const get_bill = document.getElementById('bill');

// tip percentage btns
const tip_perc = document.querySelectorAll('.tip-perc');

// custom tip percentage
const custom_tip = document.querySelector('.custom')

// number of people
const num_of_people = document.querySelector('.persons');

// error message for number of people 
const error_msg = document.getElementById('alert');

// button reset 
const reset = document.getElementById('reset');

let people = 1;
let tipAmt = 0;

// captures the selected tip value
tip_perc.forEach(perc => {
    perc.addEventListener('click', selectTip);
});

// captures custom tip value
custom_tip.addEventListener('input', setCustomTip);

// reads and sets the bill value input
function setBill() {
    billAmt = get_bill.value;
    console.log(billAmt)
};

// listens to which tip percentage is selected and adjusts the percentage accordingly
function selectTip() {
    tip_perc.forEach(perc => {
        if (event.target.value == perc.value) {
            tipAmt = parseFloat(perc.value) / 100; 
        }
    })

    calculateTip();
    console.log(tipAmt);
}

// reads and sets the custom tip perscentage entered by user
function setCustomTip() {
    customTip = parseFloat(custom_tip.value) / 100;
    console.log(customTip);
    
    calculateTip();
}

// reads and sets the number of peeople 
function setPeople() {
    people = num_of_people.value;
    console.log(people)
}

// main calculations carried out here
function calculateTip() {
    if ( people >= 1 ) {
        let tip = billAmt * tipAmt ;
        console.log(tip)
    }

    if(custom_tip.value !== '') {
        let tip = billAmt * customTip;
        console.log(tip);
    }
}

    
  /*  function calculateTip() {
        get_bill.addEventListener('input', function() {
            let bill = get_bill.value;
            console.log(bill);
        })
       // let billAmt = Number(bill.value);
        //let tip = Number(tip_perc.value) / 100;
        let people = Number(num_of_people.value);
        let tipAmount = (bill * tip) / people;
        let total = bill / people;
    
        let showTipAmt = document.querySelector('#tip-pp');
        showTipAmt.innerHTML = '$' + tipAmount.toFixed(2) + ((people > 1));
    
        let showTotal = document.querySelector('#amount-pp');
        showTotal.innerHTML = '$' + total.toFixed(2) + ((people > 1));
    }


*/

