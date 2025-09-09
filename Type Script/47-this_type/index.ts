/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
// способ передачи и сохранинения контекста вызова
//Что в ран тайм обнаружить потерю контекста, можно его аннотировать с помощью TS
class User {
  email: string;
  #login: string;
  private password: string;
  constructor(login: string, email: string) {
    this.#login = login;
    this.email = email;
  }
  //аннтотация в методе на контекст
  logIn(this: User) {
    return `${this.#login} is conect`;
  }
  // создавая метод через стрелочную функцию, контекст не теряется, но при этом метод не будет наследоваться в протатипе
  checkEmail = () => `${this.email}`;
  //если метод возвращает this, то после вызова этого метода мы можем далее оращаться к его методам класса по цепочке - назывется chening
  //если задать строгую аннотацию для метода ():User => User, то в экземплярах, которые наследуют этот метод, будет возникать ошибка, в наследуемом классе методы будут ссылаться на свой клас а не на класс наследуемый как указано в антоации
  connect() {
    return this;
  }

  //С контекстом существуют type guards
  isAdmin(): this is Admin {
    return this instanceof Admin;
  }
}

class Admin extends User {
  admin: boolean;
  adminTurn() {
    return this.logIn();
  }
}
const admin = new Admin('ff', 'f');
const user = new User('test', 'some@mail.com');
console.log(user.connect().checkEmail());
// при передаче метода по ссылке мы теряем контекст
// что бы это исправить - метод bind(имя обьекта, класса).
const test = user.logIn.bind(user);
test();

const maillMess = user.checkEmail();
///мы аннотировали юнион типом экземпляр и даее обращаемся к нему с проверкой методом .isAdmin().
const someUser: User | Admin = new Admin('test', 'test');
someUser.isAdmin() ? console.log(someUser) : console.log(someUser);
