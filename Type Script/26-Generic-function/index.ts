/// Частные случаи работы с обобщением
//Кoгда нужно передать сразу нескольок аргументов функции

const someFunc = <T, S>(sums: T, spels: S): T => {
  return sums;
};

let a = someFunc(12, '12');
// или
const b = someFunc<string, number>('3', 5);

//Когда функция принмает разные параметры и в зависимости от типа параметров проводит операцию
const someFuncAgain = <T, S>(sums: T, spels: S): string => {
  switch (typeof sums || typeof spels) {
    case 'string':
      return `${spels} это не строка`;
    case 'number':
      return '';
    default:
      return 'not valid';
  }
};

const d = someFuncAgain<string, number>('3', 5);
console.log(d);

///В дженериках через аннотацию можно передавать так же что параметром фукнции должен быть массив состоящий из строк или чисел
//Достаточно в параметрах типа указать скобки
const someFuncAgainAgain = <T, S>(sums: T[], spels: S): string => {
  switch (typeof sums || typeof spels) {
    case 'string':
      return `${spels} это не строка`;
    case 'number':
      return '';
    default:
      return 'not valid';
  }
};

const x = someFuncAgainAgain<string, number>(['string', 'string2'], 5);
console.log(d);

///////////////////
/// работа с методами  интрефейсах
interface DataServer {
  processing: <T>(data: T) => T;
}

const saver: DataServer = {
  // processing(data) {
  //   console.log(data);
  //   return data;
  // },
  ///////////// или описание метода прямо в обьекте
  processing: (data) => {
    return data;
  },
};
