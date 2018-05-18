var entered = '';
var entry = '';

$(document).ready(function() {
    $('button').click(function(event) {
        console.log($(this).html());
        entry = $(this).html();

        //every time a button is clicked, we need to check its validity to what's already been clicked
        validate();
            //entered will update once entry is validated
            //if an operator was entered, the entry should reset

        //if the entry
        entered += entry;

        $("#screen").html(entered);

        

    });

});

function validate() {
    //if last entry (last character in entered) is number && the length of number string is below limit, it's valid
    if (entry == '+' || entry == '-' || entry == 'x') {
        entered = '';
    }
}

