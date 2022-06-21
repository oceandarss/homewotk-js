//let number = prompt('Введіть дріб');
//number = Number(number);

// let anotherNumber = prompt('Введіть десятковий дріб');
// anotherNumber = Number(anotherNumber);

// console.log(number);
// console.log(anotherNumber);

// console.log(Math.round(number));
// console.log(Math.round(anotherNumber));

let input;
let total = 0;


do {
    input = prompt('ВВедите число');
    if (input === null) {
        break;
    }
    input = Number(input);

    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } 

    if (!isNaN(input)) {
        total += input;
    }

    
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);





