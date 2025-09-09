/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

class User<T, S> {
  name: T;
  age: S;
  constructor(name: T, age: S) {
    this.name = name;
    this.age = age;
  }
  ////методы классов могут быть тоже дженериками, при этом идентификаторы внутри методов сущесвуют локально внутри метда и не персекаются с глобальными
  sayMySecondName<T>(secName: T): string {
    return typeof secName === 'string' ? `${secName}` : 'введите имя';
  }
}

const ivan = new User('Anna', 15);
const alex = new User<string, boolean>('fff', true);
console.log(ivan.sayMySecondName('Ivanov'));
//наследование generic class
class AdminБ<T> extends User<string, number> {
  rules: T;
}
