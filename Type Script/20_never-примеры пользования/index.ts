/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
// При моздании функции которая занимается обработкой каких либо интерфейсов и прилегающей к ней функции для валидации типов может пробраться ошибка при добавлениии новых интерфейсов и дальнейшего добавления его в функцию для обработки. В таких случиях удобно использовать констукцию свич кейс для обработки вариантов которые не сооттвесвуют type gaurd и попадают в default
interface Car {
  name: 'car';
  engine: string;
  wheels: number;
}

interface Ship {
  name: 'ship';
  engine: string;
  sail: string;
}
interface Airplane {
  name: 'airplane';
  engine: string;
  wings: string;
}
interface SuperAirplane {
  name: 'smth';
  engine: string;
  wings: string;
}
type Vehicle = Car | Ship | Airplane | SuperAirplane;
const isCar = (car: Vehicle): car is Car => 'wheels' in car;

const isShip = (ship: Vehicle): ship is Ship => 'sail' in ship;

function reapirVehicle(vehicle: Vehicle) {
  switch (vehicle.name) {
    case 'car':
      console.log(vehicle.wheels);
      break;
    case 'ship':
      console.log(vehicle.sail);
      break;
    case 'airplane':
      console.log(vehicle.wings);
      break;
    default:
      const smth: never = vehicle;
      console.log('ooups');
  }
}
/// типу never нельзя задать значение переменной. Если же переменную получается интерпретировать с типом never то возникает ошибка, таким образом мы можем узнать что сужение типов прошло не до конца и какой то тип не отработан
