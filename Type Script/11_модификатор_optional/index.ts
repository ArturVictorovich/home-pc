z; ///Пример не обязательных полей ввода, для того что бы обзначить что какой то элемент из обьекта не обязателен, мы помечаем его оператором ?
// или через опертор | задаем undefind
interface User {
  login: string;
  pass: string;
  age: number;
  //   addres?: string;
  addres: string;
  parrents?: { father?: string; mother?: string };
}

const user: User = {
  login: 'acc',
  pass: '1234',
  age: 12,
  addres: '_',
};

const someFun = (obj: User, data?: string): void => {
  console.log(obj.parrents?.father?.toLocaleLowerCase(), data);
};
