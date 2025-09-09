/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

///Type Guard - это механиз, посредсвом которого мы ссужаем количесво возможных типов, при раоботе с union типами
/// Это может быть как и простые if else условия с опертаорами typeof или Arrary.isArray()... и тд.
// Для удобсва такие функции на проверку типа выносят отдельно и возврашают они буливое значени. Такие функции называют пользовательским зашатником типа/

function getMess(message: string | string[]): void {
  if (typeof message === 'string') {
    return console.log('Ok, message is string');
  } else if (Array.isArray(message)) {
    return console.log('message is array!');
  }
  return console.log('неизвестная ошибка');
}

getMess('im string');

//Так же примером type guard является оператор ? - при работе с DOM, если данного элемента нету на странице, то в концоль выпадет null

const box = document.querySelector('.box');
box?.addEventListener('', () => {});

// Предикат - ф, которяа возвращает булевое значение.
//данная анатоация к функции говорит - то что мы веренем n которая бдует равна числу.
function isNumber(n: string[] | number | boolean): n is number {
  return typeof n === 'number'; // она возвращает boolean значение
}
// данную функцию мы можем поместить в конструкцию if (func()) что бы проверить на число какуюто переменную
//так же можно вообще оптимизировать и упростить функцию
function isNumberToo(n: unknown): n is number {
  return typeof n === 'number'; // она возвращает boolean значение
}

////////////////////////////////////
//type guard для обьектов

interface Car {
  engine: string;
  wheels: number;
}

interface Ship {
  engine: string;
  sail: string;
}
//предикат type guard для типа транкспортного средсва
const isCar = (car: Car | Ship): car is Car => 'wheels' in car; // оператор In проверяет
// есть ли в обьекте свойсво и возвращает true или false
// при такой аннатации к функции guard происходит привязка к обьекту и внутри функции будут рабоать правильно свойсва

function reapirVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    vehicle.engine;
  } else vehicle.sail;
}
// при обращении к vehicle внутри разных блоков будут всплывать нужные подскаки, так как TS уже определил что вернет функция isCar и отвалидировал весь дальнейший код

//более сложный type guard

const isCarToo = (car: Car | Ship): car is Car =>
  (car as Car).wheels !== undefined;
//длеает тоже самое что и верхний тайп гвард, но помогает с работой с вложенными обьектами
