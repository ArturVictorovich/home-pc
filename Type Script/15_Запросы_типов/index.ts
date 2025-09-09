/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//если у нас есть явный элемент, который будет пердаваться в такую ще явную функцию, не обязательно перегружать и создавать отдльный type, interface или еще что либо,
// а просто запросить type у передваймого обьекта
const waterData = {
  coldW: '30m2',
  hotW: '12mw',
};

const checkReadings = (data: typeof waterData): boolean => {
  const dataFormUser = {
    coldW: '30m2',
    hotW: '12mw',
  };
  return data.coldW === dataFormUser.coldW && data.hotW === dataFormUser.hotW
    ? true
    : false;
};

console.log(checkReadings(waterData));
