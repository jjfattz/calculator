
var display_value_element = null;
var display_value = "";
var first_value = 0;
var second_value = 0;
var is_first_number = true;
var active_operation = "";

document.addEventListener('DOMContentLoaded', function() {
    display_value_element = document.getElementById("display_value");
    display_value = display_value_element.innerText;
});


function typeNumber(button) {
    if(active_operation !== "") {
        second_value = parseInt(button);
        display_value = button;
        display_value_element.innerText = display_value;
    } else {
        if(display_value == "0") {
            display_value = button;
            display_value_element.innerText = display_value;
        } else {
            display_value += button;
            display_value_element.innerText = display_value;
        }
    }
}

function calculate(button) {
    switch(button) {
        case "+":
            first_value = parseInt(display_value);
            active_operation = button;
            break;

        case "-":
            first_value = parseInt(display_value);
            active_operation = button;
            break;
    }
}

function clearCalculator() {
    display_value = "0";
    display_value_element.innerText = display_value;
}

function equals() {
    switch(active_operation) {
        case "+":
            display_value = first_value + second_value;
            display_value_element.innerText = display_value;
            break;

        case "-":
            display_value = first_value - second_value;
            display_value_element.innerText = display_value;
            break;
    }
}