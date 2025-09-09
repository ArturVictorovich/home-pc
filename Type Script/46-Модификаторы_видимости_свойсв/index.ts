/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node///

// Внутри TS есть операторы для переменных внутри класса, которые позволяют ограничить доступ в ним.
// public - свойсво которое стоит по умолчанию
// privat - к переменной нельзя обратиться напрямую через прототип, но можно сдлеать это через гетер и сетер как показано в примере с pass()
// protected - аналогично privat, но позволяет получить доступ к себе через наследуемый класс
// static - сущность общая для всех экземпляров. Позволяет обратиться к параметру класса без создания экзмелпляра через оператор new.
class Player {
  private static game: string = 'COD';
  private login: string;
  private _password: string;
  public server: string;
  protected consent: boolean;

  get pass() {
    return this._password;
  }
  set pass(newPass: string) {
    //valid
    this._password = newPass;
  }

  static getGameName() {
    return Player.game;
  }
}
console.log(Player.getGameName());
class CompetitivePlayer extends Player {
  runk: number;
  isConsent() {
    return this.consent ? 'yes' : 'no';
  }
}

const player = new CompetitivePlayer();
console.log(player.isConsent());

//Можно заменить грамоздское развертывание класса, укзав всего лишь констурктор и типизировать внутри него параметры, укзав при этом вначале каждого publick. Редко, но такое встречается
class User {
  constructor(public email: string, public name: string) {}
}
