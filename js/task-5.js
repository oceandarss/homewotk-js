let country;
let delivery;
country = prompt('Введите страну доставки');
const normilizedCountry = country.toLowerCase();

switch (normilizedCountry) {
    case 'китай': {
        delivery = 100;
        alert(`Доставка в ${normilizedCountry} будет стоить ${delivery} кредитов`);
        break;
    }
        
    case 'чили': {
        delivery = 250;
        alert(`Доставка в ${normilizedCountry} будет стоить ${delivery} кредитов`);
        break;
    }
        
    case 'австралия': {
        delivery = 170;
        alert(`Доставка в ${normilizedCountry} будет стоить ${delivery} кредитов`);
        break;
    }
        
    case 'индия': {
        delivery = 80;
        alert(`Доставка в ${normilizedCountry} будет стоить ${delivery} кредитов`);
        break;
    }
    
    case 'ямайка': {
        delivery = 120;
        alert(`Доставка в ${normilizedCountry} будет стоить ${delivery} кредитов`);
        break;
    }
    default:
        alert('В вашей стране доставка не доступна')
}