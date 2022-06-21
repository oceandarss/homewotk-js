const credits = 23580;
const pricePerDroid = 3000;

let count;
let totalPrice;
let balance;

count = prompt('Сколько дроидов вы хотите приобрести?');

if (count === null) {
    console.log('Отменено пользователем!');
} else {
    count = Number(count);
    totalPrice = count * pricePerDroid;
    console.log(totalPrice);
    if (totalPrice > credits) {
        console.log('Недостаточно средств на счету!')
    } else {
        balance = credits - totalPrice;
        alert(`Вы купили ${count} дроидов, на счету осталось ${balance} кредитов.`)
    }
}