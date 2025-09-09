/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//При аннтоации класса путем его иплементации (implemets), когда мы хотим передать метод, то мы просто описываем его тип
//но если мы хотим добавить какой то метод в описании, который будет содержать не заглушку а готовый метод по умолчанию? имплементация не справиться с этим
//abstract мы указываем тип класса который хотим передать вместо интерфейса, так же может содержать как и готовые методы так и иметоды заглушки(которые отдельно нужно отмечать оператором abstract)
//abstract классы передаются через extends
//нельзя создаать абстрактыне методы вне абстрактных классов и нельзя создавать экземпляры от абстрактынх классов
interface UserInterface {
  login: string;
  admin: boolean;
  messege: (messeg: string) => string;
}
abstract class AbstractUser {
  login: string;
  admin: boolean;
  abstract messege: (messeg: string) => string;
  errorMessage = (): void => {
    console.log('Error Text');
  };
}
class User extends AbstractUser {
  messege = (messeg?: string) => {
    return `Hello ${this.login}`;
  };
}
