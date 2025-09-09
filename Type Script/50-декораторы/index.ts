/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
// Декаортаоры - это функция которая изменяет обьект и возвращает его обратно.
//К функции декоратору можно построить ченинг цепочку.
//Композиция - запуск функции внутри другой функции

interface ICar {
  fuel: string;
  open: boolean;
  freeSeats: number;
}
//Порядок запуска функции декоратров, чем ниже финкция, тем она вложеннее x(y(class()))
@changeAmountOfFuel(15)
@chengeDoorStatus(false)
class myCar implements ICar {
  fuel: string = '80';
  open: boolean = true;
  freeSeats: number = 3;

  @checkAmountOfFuel
  isOpen(value: string) {
    return this.open ? 'open' : `${value}`;
  }
}

///Декораторы методов. target - прототип от используемого класса, propertyKey - название метода, descriptor - специальная переменная внутри TS, для работы с методами
function checkAmountOfFuel(
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor | void {
  const originalMethod = descriptor.value;

  descriptor.value = function (this: any, ...args: any[]) {
    // Указание типа this
    console.log(this.fuel);
    return originalMethod.apply(this, args);
  };
}

///Фабрика декоратров
function chengeDoorStatus(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext<T>
  ) => {
    return class extends target {
      open = status;
    };
  };
}
function changeAmountOfFuel(amount: number) {
  return <T extends { new (...args: any[]): {} }>(
    target: T,
    context: ClassDecoratorContext
  ) => {
    return class extends target {
      fuel = `${amount}%`;
    };
  };
}

// function addFuel(car: myCar) {
//   car.fuel = '99';
//   console.log('add fuel');
//   return car;
// }
const car = new myCar();
console.log(car.isOpen('закрыто'));
