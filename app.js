
function info() {
    let imya = prompt("Введите имя");
    let thisYear = +prompt("Введите текущий год");
    let bornYear = +prompt("Введите год рождения");
    let age = thisYear - bornYear;
    
    return { name: imya, age: age };
}

let userInformation = info();


console.log(userInformation.name + ', Ваш возраст ' + userInformation.age);
