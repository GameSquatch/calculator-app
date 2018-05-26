var entered = '';
var entry = '';
var pressed = '';
var divide = '';
var currentNumber, log;

$(document).ready(function() {

    currentNumber = $("#currentNumber");
    log = $("#entered");

    $('button').click(function(event) {
        //console.log($(this).html());
        pressed = $(this).text();

        console.log(pressed);

        //every time a button is clicked, we need to check its validity to what's already been clicked
        validate();
            //entered will update once entry is validated
            //if an operator was entered, the entry should reset


        currentNumber.html(entry);

        log.html(entered);

        

    });

});

function validate() {
    entry += pressed;
    //if last entry (last character in entered) is number && the length of number string is below limit, it's valid
    if (pressed == '+' || pressed == '-' || pressed == 'x' || pressed == '=' || pressed == '/') {

        if (pressed == '=') {
            //handle evaluation
        }
        else {
            //if the only button pressed is a symbol, the symbol shouldn't be logged into what was entered, so wipe pressed
            if (entry.length == 1) {
                entry = '';
            }

            entered += entry;
            entry = '';
        }
    }

    if (pressed == '.') {
        //check if decimal exists already or if it's the first character in the current number (a fraction)
        //if the entry string without the last decimal pressed still has a decimal, slice it off
        if (entry.slice(0, -1).includes('.')) {
            entry = entry.slice(0, -1);
        }
    }

}

