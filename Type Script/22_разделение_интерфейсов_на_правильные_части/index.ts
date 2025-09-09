/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
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

//Данный интерфейс влючает в себя все свойсва 3 отдельных интрефейсов и является более локаничным, но все же не рекомендуется использовать такой подход, так как при работе со свойствами такого интерфейса будут всплывать ненужные свойсва и так же проверка на never type не будет работать
interface ComplexVehilce {
  name: 'airplane' | 'ship' | 'car';
  engine: string;
  wheels?: number;
  sail?: string;
  wings?: string;
}

type Vehicle = Car | Ship | Airplane;
const isCar = (car: Vehicle): car is Car => 'wheels' in car;

const isShip = (ship: Vehicle): ship is Ship => 'sail' in ship;

function reapirVehicle(vehicle: ComplexVehilce) {
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
