/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
// тип unknow является неизвестным типом, который не позволяет проводить манипуляции с переменными если они явно являются нужным типом данных
let smth: unknown;
smth = 'str';
let dat: string[] = smth;

dat.find((e) => e);

//Примеры с типизацией unknown в реальных проэктах

//при получении JSON строки
const userData = '{"isBirthday": true, "ageData": 40}';

const safeparse = (str: string): unknown => {
  function transferData(d: unknown): void {
    if (typeof d === 'string') {
      console.log(d.toLocaleLowerCase());
    } else if (typeof d === 'object' && d) {
    }
  }
  return JSON.parse(str);
};

const data = safeparse(userData);

//при обработки ошибки в конструкции try catch

try {
  if (1) {
    throw new Error('error');
  }
  // параметр e является ошибкой, но она может придти в виде строки либо обьекта Error,
} catch (e) {
  // instanceof проверяет на потомков
  if (e instanceof Error) {
    console.log(e.message);
  } else if (typeof e === 'string') {
    console.log(e.toLocaleLowerCase);
  }
}
