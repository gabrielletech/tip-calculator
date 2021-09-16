// variables

const get_bill = document.querySelector('.bill');

// tip percentages
let five_perc = document.getElementById('five-perc');
let ten_perc = document.getElementById('ten-perc');
let fifteen_perc = document.getElementById('fifteen-perc');
let twenty_perc = document.getElementById('twenty-perc');
let fifty_perc = document.getElementById('fifty-perc');

// custom tip percentage
const custom_tip = document.querySelector('.custom')

// number of people
const num_of_people = document.querySelector('.persons');

    get_bill.addEventListener('input', function() {
        let bill = get_bill.value;
        console.log(bill);
    })

    five_perc.addEventListener('click', function() {
        five_perc = 0.05;
        console.log(five_perc);
    })

    ten_perc.addEventListener('click', function() {
        ten_perc = 0.1;
        console.log(ten_perc);
    })

    fifteen_perc.addEventListener('click', function() {
        fifteen_perc = 0.15;
        console.log(fifteen_perc);
    })

    twenty_perc.addEventListener('click', function() {
        twenty_perc = 0.25;
        console.log(twenty_perc);
    })

    fifty_perc.addEventListener('click', function() {
        fifty_perc = 0.5;
        console.log(fifty_perc);
    })

    custom_tip.addEventListener('input', () => {
        let customValue = custom_tip.value
        console.log(customValue);
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




