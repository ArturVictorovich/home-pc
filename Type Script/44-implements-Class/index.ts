///Имплементация классов - это описание одним или несмколько интерфейсом, что должно находиться внутри класса
/// в класс не переносятся такие вещи как не обязательные типы через оператор ?(не появиться подсказки) и аннотации методов. Методы нужно аннотировать вручнуую
interface Iuser {
  login: string;
  pasword: string;
}
interface Admika {
  admin: boolean;
  token?: number;
  meesage: (mes: string) => void;
}
class UserForm implements Iuser, Admika {
  admin: boolean;
  token?: number | undefined;
  meesage: (mes: string) => void;
  login: string;
  pasword: string;
  test: string;
}
