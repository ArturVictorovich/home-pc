/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

class User {
  login: string;
  password: string;

  constructor(login: string, password: string) {
    this.login = login;
    this.password = password;
  }
  message() {
    console.log(`Добро пожалвоать ${this.login}`);
  }
}
///При передачи новому классу параметров от другого класса мы можем перезаписать уже имеющийся параметр заного в новом классе
///Но при передаче методов, необходимо учитывать какой тип возвращает метод!
/// override - надстрйока перед методом, которая сообщает что данный метод перезаписан от родительского метода
class Adminka extends User {
  admin: boolean;
  constructor(admin: boolean, login: string, password: string) {
    super(login, password);
    this.admin = admin;
  }
  message() {
    console.log(`Добро пожалвоать ${this.admin ? 'админ' : ''} ${this.login}`);
  }
}

new Adminka(true, 'Oleg_Insec', '1234').message();
const newUser = new User('Oleg_Insec', '1234');
