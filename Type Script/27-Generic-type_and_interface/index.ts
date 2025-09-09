/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
/// generics type,  interface и понятие - ограничение generics

type Smth<T> = T;
const num: Smth<number> = 5;

type User<T, Y> = {
  login: T;
  age: Y;
};

const user: User<string, boolean> = {
  login: 'string',
  age: false,
};
///Обычно типы не описывают обьекты, а использутся интерфесы
///generic helper types
type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5, 5, 5];

///generic interface
interface ParentsOfuser {
  mother: string;
  father: string;
}
//создаем интерфейс с джинериком
interface Users<ParentsData extends ParentsOfuser> {
  login: string;
  age: number;
  parents: ParentsData;
}

//в джинерик передаем информацию что свойсво в обьекте parents будет обьектом и перед оформлением обьекта передаем в джинерик ОПИСАНИЕ этого самого обьетка, после чего уже указываем конерктеные данные
//В случае если мы хотим добавить новое свойсво в обьект(сделать его более динамичным). Рассмотрим на примере married
// Мы создаем новый интрефейс который будет соотвествовать массиву и добавим его к основному интерфейсу через extends, теперь у нас в дженерике будет строго обьект с двумя сторками, а вот свойсво married может быть любым типом так как его нет в уточняющем интерфейсе

const parents: Users<{ mother: string; father: string; married: boolean }> = {
  login: 'Login',
  age: 12,
  parents: { mother: 'Anna', father: 'jhon', married: true },
};
/////////
//Ограничение внутри джинерков с помощью различных типов через extendss

const sendMess = <T extends number | string>(salary: T): T => {
  console.log(`Сумма запрашиваемого счета составляет ${salary}`);
  return salary;
};

sendMess(300);
sendMess('300');
