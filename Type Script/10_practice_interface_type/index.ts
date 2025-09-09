/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//структура данных склада с одеджой
interface ClothesWarehouse {
  jacets: 'empty' | number;
  hats: 'empty' | number;
  socks: 'empty' | number;
  pants: 'empty' | number;
}

//структура даннхы склада с канцтоварами

interface StartioneryWarehouse {
  scissors: 'empty' | number;
  paper: 'empty' | boolean;
}

//структура данных склада с бытовой техникой

interface AppliancesWarehouse {
  dishwashers: 'empty' | number;
  cookers: 'empty' | number;
  mixers: 'empty' | number;
}

interface TotalWarehouse
  extends ClothesWarehouse,
    StartioneryWarehouse,
    AppliancesWarehouse {
  dificit: boolean;
  date: Date;
}

const totalData: TotalWarehouse = {
  jacets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  dificit: false,
  date: new Date(),
};

const printReport = (data: TotalWarehouse) => {
  const result = Object.entries(data)
    .filter((item) => item[1] === 'empty')
    .reduce((res, item) => `${res} ${item[0]},`, '');

  if (result.trim().length) {
    return `We need this items:${result.slice(0, -1)}.`;
  } else {
    return 'Everything fine';
  }
};

console.log(printReport(totalData));
