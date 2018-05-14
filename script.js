var entered = '';

$(document).ready(function() {
    $('button').click(function(event) {
        console.log($(this).html());
        entered += $(this).html();
        $("#screen").html(entered);
    });

});

