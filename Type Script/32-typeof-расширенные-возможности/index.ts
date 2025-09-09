/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

interface Company {
  name: string;
  age: number;
}

const google: Company = {
  name: 'google',
  age: 50,
};
//оператор keyof работает только с типами, а не переменными и их значениями. Если мы хотим получить название свойсв из интерфейса, мы должни комбинировать с опертаором typeof
type GoogleKey = keyof typeof google;
const someKey: GoogleKey = 'name';
