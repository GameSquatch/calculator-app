var entered = '';
var entry = '';
var pressed = '';
var divide = '';
var numbers = [];
var currentNumber, log;

$(document).ready(function() {

    currentNumber = $("#currentNumber");
    log = $("#entered");

    $('button').click(function(event) {

        var cleared = false;
        //console.log($(this).html());
        pressed = $(this).text();

        console.log(pressed);


        if (pressed == 'AC' || pressed == 'CE') {
            cleared = true;
            

            if (pressed == 'AC') {
                entry = '';
                entered = '';
                numbers = [];
            }
    
            if (pressed == 'CE') {
                entry = '';
            }
        }

        if (cleared) {
            currentNumber.html('0');
        }
        else {
            validate();
            currentNumber.html(entry);
        }
        //every time a button is clicked, we need to check its validity to what's already been clicked
        

        log.html(entered);

    });

});

function validate() {
    entry += pressed;
    //if last entry (last character in entered) is number && the length of number string is below limit, it's valid
    if (pressed == '+' || pressed == '-' || pressed == 'x' || pressed == '=' || pressed == '/') {

            //if the only button pressed is a symbol, the symbol shouldn't be logged into what was entered, so wipe pressed
        if (entry.length == 1) {
            entry = '';
        }

        entered += entry;
        var obj = {};
        obj[pressed] = parseFloat(entry);
        numbers.push(obj);
        entry = '';

        if (pressed == '=') {
            //console.log(numbers);
            calc();
        }
    }

    if (pressed == '.') {
        //adds leading zero
        if (entry.length == 1) {
            entry = '0.';
        }
        //check if decimal exists already or if it's the first character in the current number (a fraction)
        //if the entry string without the last decimal pressed still has a decimal, slice it off
        if (entry.slice(0, -1).includes('.')) {
            entry = entry.slice(0, -1);
        }
    }

}

function calc() {
    var currentObj, nextKey;
    var result = numbers[0][Object.keys(numbers[0])[0]];
    
    for (var i = 0; i < numbers.length - 1; ++i) {

        currentObj = numbers[i];
        nextKey = Object.keys(numbers[i + 1]);
        console.log(result);

        if (currentObj.hasOwnProperty('+')) {
            result += numbers[i + 1][nextKey[0]];
        }
        else if (currentObj.hasOwnProperty('-')) {
            result -= numbers[i + 1][nextKey[0]];
        }
        else if (currentObj.hasOwnProperty('x')) {
            result *= numbers[i + 1][nextKey[0]];
        }
        else if (currentObj.hasOwnProperty('/')) {
            result /= numbers[i + 1][nextKey[0]];
        }
    }
    
    console.log(result);

}

