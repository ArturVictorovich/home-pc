/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//Механизм по обьединению типов (Union типов)

//Когда переменной задается значение, она принимает ЛИБО тип строка, ЛИБО тип число
const mess: string | number = '2';

//Те же правила для массивов, ЛИБО весь состоит из строк, ЛИБО из числа
const arr: number[] | string[] = ['1', '3'];

//Чаще всего можно увидеть это в функциях
const alrt = (msg: string | number): void => console.log(msg);

alrt(typeof 213); // Число
alrt(typeof '213'); // Строка

//Сужение типов
// Работая с оператором typeof можно задать условия для выполнения фукнции в зависимости от типа данных аргумента
const alrt2 = (msg: string[] | string | number | boolean): void => {
  //если типом данных является масив строк, применяем метод массиво Array.isArray()
  if (Array.isArray(msg)) {
    msg.forEach((m) => console.log(m));
  }
  if (typeof msg == 'string' || typeof msg == 'number') {
    console.log(msg.toString);
  }

  console.log(msg.valueOf);
};
alrt2(true);

function printReadings(a: number | string, b: number | boolean): void {
  //для сужения типов, можно использовать строгое равенство
  if (a === b) {
    console.log(a, b);
  }
}

const checkReadings = (
  readings: { system: number } | { user: number }
): void => {
  //оператор in определяет "есть ли свойсво внутри обьекта"
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
};

function logValue(x: string | Date) {
  //метод instanceof проверят переменную, является ли она экземпляром Class
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
logValue('123231321');
