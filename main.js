let car = {};
car.Producer = 'Toyota '
car.Model = 'Land Cruiser Prado ';
car.Year = '2025 ';
car.Speed = '100–130 km/h';

console.log(`Производитель: ${car.Producer}
Модель: ${car.Model}
Год выпуска: ${car.Year}
Средняя скорость: ${car.Speed}`);

function getTime(distance, speed) {
    let time = distance / speed; 
    let rest = Math.floor(time / 4);
    
    if (time % 4 === 0) {
        rest--;
    }

    let totalTime = time + rest;
    
console.log(`Путь: ${distance} км
Скорость: ${speed} км/ч
Всего времени: ${totalTime} ч`);
}

getTime(800, 100);

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c - сделано
// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad - сделано
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
// https://www.codewars.com/kata/57de78848a8b8df8f10005b1
// https://www.codewars.com/kata/580a4734d6df748060000045