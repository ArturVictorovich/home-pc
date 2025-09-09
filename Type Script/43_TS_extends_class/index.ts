/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

class User {
  name: string;
  password: string;
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

class AdminAcc extends User {
  admin: boolean;
  constructor(admin: boolean, name: string, password: string) {
    super(name, password);
    this.admin = admin;
  }
}
