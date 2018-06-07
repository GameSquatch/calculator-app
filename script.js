var entered = '';
var entry = '';
var pressed = '';
var currentNumber, log;
var nums = [];
var ops = [];


$(document).ready(function() {

    currentNumber = $("#currentNumber");//consider changing to currentEntry
    log = $("#entered");

    $('button').click(function(event) {

        pressed = $(this).text();

        if (pressed == 'AC' || pressed == 'CE') {
            clear();
        }
        else if (entry.length == 9) {
            $(currentNumber).html("MAX CHARS");
        }
        else {
            var numCheck = parseInt(pressed);

            if (!isNaN(numCheck) || pressed == '.') {
                //continue entry
                checkPressed();
            }
            else {
                if (pressed == '=') {
                    calc();
                }
                else {
                    //log entry number and operation
                    logOperation();
                }
            }
        }

    });//END button.click

});//END doc.ready

function clear() {
    if (pressed == 'AC') {
        nums = [];
        ops = [];
        entry = '';
        entered = '';
        currentNumber.html('0');
        log.html('0');
    }
    else {
        entry = '';
        currentNumber.html('0');
    }
}

function checkPressed() {
    if (pressed == '.') {
        if (entry == '' || entry == '0') {
            entry = '0' + pressed;
        }
        else if (!entry.includes('.')) {
            entry += '.';
        }
    }
    else if (pressed == '0') {
        if (entry != '' && entry != '0') {
            entry += '0';
        }
    }
    else {
        entry += pressed;
    }

    currentNumber.html(entry);
}

function logOperation() {
    //check that operations aren't being pressed more than once in succession
    var logText = log.text();

    if (entry != '' && entry != '0') {
        nums.push(parseFloat(entry));
        ops.push(pressed);
        entered += entry + pressed;
        entry = '';

        currentNumber.html(entry);
        log.html(entered);
    }
    else if (logText.charAt(logText.length - 1) == '=') {
        nums.push(parseFloat(currentNumber.text()));
        ops.push(pressed);
        entered = currentNumber.text() + pressed;
        log.html(entered);
        currentNumber.html('');
    }

    
}

function calc() {

    if (entered.length >= 2 && entry != '' && entry != '0') {

        nums.push(parseFloat(entry));
        entered += entry + pressed;
        log.html(entered);

        var firstNum = nums[0];

        for (var i = 0; i < ops.length; ++i) {
            switch (ops[i]) {
            case '+':
                firstNum += nums[i + 1];
                break;
            case '-':
                firstNum -= nums[i + 1];
                break;
            case 'x':
                firstNum *= nums[i + 1];
                break;
            case '/':
                firstNum /= nums[i + 1];
                break;
            }
        }

        nums = [];
        ops = [];
        entry = '';
        entered = '';

        if (firstNum >= 1000000000 || firstNum <= -1000000000) {
            currentNumber.html("MAX CHARS");
        }
        else {
            currentNumber.html(firstNum);
        }
    }
}

