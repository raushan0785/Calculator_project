// var buttons = document.getElementsByClassName("buttons");
// var buttons1=document.getElementsByClassName("buttons1");
// var buttons2=document.getElementsByClassName("buttons2");
// var buttons3=document.getElementsByClassName("buttons3");
// var buttons4=document.getElementsByClassName("buttons4");
// var buttons5=document.getElementsByClassName("buttons5");
// var buttons6=document.getElementsByClassName("buttons6");
// var buttons7=document.getElementsByClassName("buttons7");
// var buttons8=document.getElementsByClassName("buttons8");
// var buttons9=document.getElementsByClassName("buttons9");
// var buttons9=document.getElementsByClassName("buttons9");
// var display = document.getElementById("display");
// var operand1 =null;
// var operand2 = null;
// var operator = null;

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         // if (value == '+') {
//         //     operator = '+';
//         //     operand1 = parseFloat(display.textContent);
//         //      display.innerText = '';  Clear the display for the next operand
//         //  }
//           if (value == '%') {
//             operator = '%';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '%') {
//                 result = operand1 + operand2;}
//             // } else if (operator == '%') {
//             //     result = operand1 % operand2;
//             // }
//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }
//     });
// }

// for (var i = 0; i < buttons8.length; i++) {
//     buttons8[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == "AC") {
//             operator = "AC";
            
//             display.innerText = '';}
    
        
//     });
// }
// for (let i = 0; i < buttons4.length; i++) {
//     buttons4[i].addEventListener('click', function() {
//         const value = this.getAttribute('data-value');

//         if (value == '/') {
//             operator = '/';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '/') {
//                 result = operand1 / operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// // var operand1 = null;
// // var operand2 = null;
// // var operator = null;

// for (var i = 0; i < buttons5.length; i++) {
//     buttons5[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '*') {
//             operator = '*';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             if (display.textContent !== '') {
//                 operand2 = parseFloat(display.textContent);
//                 var result;

//                 if (operator == '*') {
//                     result = operand1 * operand2;
//                 }
//                 // You can add more operators (e.g., -, *, /) here

//                 display.innerText = result;
//                 console.log(result);
//             } else {
//                 console.log('No second operand provided');
//             }
//         } else {
//             display.innerText += value;
//         }
//     });
// }

// for (var i = 0; i < buttons6.length; i++) {
//     buttons6[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '-') {
//             operator = '-';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '-') {
//                 result = operand1 - operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons7.length; i++) {
//     buttons7[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '+') {
//             operator = '+';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons4.length; i++) {
//     buttons4[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '/') {
//             operator = '/';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons1.length; i++) {
//     buttons1[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '/') {
//             operator = '/';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons2.length; i++) {
//     buttons2[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '.') {
//             operator = '.';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons3.length; i++) {
//     buttons3[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '/') {
//             operator = '/';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons9.length; i++) {
//     buttons9[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '%') {
//             operator = '%';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }
// for (var i = 0; i < buttons.length; i++) {
//     buttons4[i].addEventListener('click', function() {
//         var value = this.getAttribute('data-value');

//         if (value == '/') {
//             operator = '/';
//             operand1 = parseFloat(display.textContent);
//             display.innerText = ''; // Clear the display for the next operand
//         } else if (value == '=') {
//             operand2 = parseFloat(display.textContent);
//             var result;
//             if (operator == '+') {
//                 result = operand1 + operand2;
//             }
//             // You can add more operators (e.g., -, *, /) here

//             display.innerText = result;
//             console.log(result);
//         } else {
//             display.innerText += value;
//         }

//     });
// }

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
