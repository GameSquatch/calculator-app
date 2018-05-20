var entered = '';
var entry = '';
var pressed = '';
var currentNumber, log;

$(document).ready(function() {

    currentNumber = $("#currentNumber");
    log = $("#entered");

    $('button').click(function(event) {
        //console.log($(this).html());
        pressed = $(this).html();

        //every time a button is clicked, we need to check its validity to what's already been clicked
        validate();
            //entered will update once entry is validated
            //if an operator was entered, the entry should reset

        console.log(entered);
        console.log(entry);

        currentNumber.html(entry);

        log.html(entered);

        

    });

});

function validate() {
    entry += pressed;
    //if last entry (last character in entered) is number && the length of number string is below limit, it's valid
    if (pressed == '+' || pressed == '-' || pressed == 'x' || pressed == '=') {
        entered += entry;
        entry = '';
    }

    if (pressed == '.') {
        //check if decimal exists already or if it's the first character in the current number (a fraction)
    }
}

