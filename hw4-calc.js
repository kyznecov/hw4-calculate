
let number1 = +prompt("Первое число");
let sign = prompt("Знак +,-,/,*");
let number2 = +prompt("Первое число");

switch(sign){
    case "+" : alert(number1 + number2);  break;
    case "-" : alert(number1 - number2);  break;
    case "*" : alert(number1 * number2);  break;
    case "/" : alert(number1 / number2);  break;
    default : alert("Что-то пошло не так!");
}