/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

const isBirthdayData: boolean = true;
let agedata: number = 40;
const userNameData: string = 'Jhon';
//Для типизации обьтекта мы используем обычный формат JS, типизировать его начинаем только в момент, когда хотим использовать данные из него
const userData = {
  isBirthdayData: true,
  ageData: 40,
  userNameData: 'Jhon',
  massage: {
    error: 'error',
  },
};

//Кортеж (или Tuple)
//В массив можно добалвять новые элементы, но доступ будет получен только к тем, что указанны в кортеже
//так же используется спред(рест) оператор
const userDateTuple: [boolean, number, ...string[]] = [
  true,
  40,
  'Jhon',
  'Travolta',
  'Poul,',
];

const createError = (msg: string) => {
  throw new Error(msg);
};
//типизация обьекта просходит при передаче его в параметры путем обозначения его :{}, и указываиня типа данных каждого свойства
function logBrtMsg({
  isBirthdayData,
  userNameData,
  ageData,
  massage: { error },
}: {
  massage: { error: string };
  isBirthdayData: boolean;
  userNameData: string;
  ageData: number;
}): string {
  return isBirthdayData
    ? `Congras ${userNameData.toUpperCase()}, age ${ageData + 1}`
    : createError(error);
}

console.log(logBrtMsg(userData));

//Способы типизации массивов, один из них когда весь массивив получает анотацию одного типа
const departaments: string[] = ['dev', 'dis', 'market'];
//Дальнейшая работа с массивом будет идти с тем типом данных, что указан в масиве
//Но так же для удобства можно дублировать тип данных
const depr = departaments[0];
const report = departaments
  .filter((dep: string) => dep !== 'dev')
  .map((d: string) => `${d} - done`);
const [first] = report;
const someNum: number[][] = [
  [3, 5, 6],
  [1, 2, 4],
];

console.log(first);


let  mess: string | number = 5