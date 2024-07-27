

var buttons = document.querySelectorAll(".buttons, .buttons1, .buttons2, .buttons3, .buttons4, .buttons5, .buttons6, .buttons7, .buttons8, .buttons9");
var display = document.getElementById("display");
var operand1 = null;
var operand2 = null;
var operator = null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        
        if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%') {
            operator = value;
            operand1 = parseFloat(display.textContent);
            display.innerText = ''; // Clear the display for the next operand
        } else if (value == '=') {
            operand2 = parseFloat(display.textContent);
            var result;
            switch (operator) {
                case '+':
                    result = operand1 + operand2;
                    break;
                case '-':
                    result = operand1 - operand2;
                    break;
                case '*':
                    result = operand1 * operand2;
                    break;
                case '/':
                    result = operand1 / operand2;
                    break;
                case '%':
                    result = operand1 % operand2;
                    break;
                default:
                    result = 'Error';
            }
            display.innerText = result;
            console.log(result);
        } else if (value == 'AC') {
            display.innerText = '';
            operand1 = operand2 = operator = null; // Clear all stored values and operator
        }
        else if (value == '+/-') {
            // Toggle the sign of the current display value
            if (display.textContent !== '') {
                let currentValue = parseFloat(display.textContent);
                display.innerText = currentValue * -1;
            }
        }
        else {
            display.innerText += value;
        }
    });
});
