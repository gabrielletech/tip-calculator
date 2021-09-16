// variables

const bill = document.querySelector('.bill');


// tip percentages
const tip_perc = document.getElementById('tip-perc');

// custom tip percentage
const custom_tip = document.querySelector('.custom')

// number of people
const num_of_people = document.querySelector('.persons');

$(document).ready(function() {
    tip_perc.addEventListener('click', function() {
        console.log(tip_perc.value);
    });
    
    function calculateTip() {
        let billAmt = Number(bill.value);
        let tip = Number(tip_perc.value) / 100;
        let people = Number(num_of_people.value);
        let tipAmount = (billAmt * tip) / people;
        let total = billAmt / people;
    
        let showTipAmt = document.querySelector('#tip-pp');
        showTipAmt.innerHTML = '$' + tipAmount.toFixed(2) + ((people > 1));
    
        let showTotal = document.querySelector('#amount-pp');
        showTotal.innerHTML = '$' + total.toFixed(2) + ((people > 1));
    }
})




