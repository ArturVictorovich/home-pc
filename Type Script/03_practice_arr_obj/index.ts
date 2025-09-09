/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

const electUserData = {
  elReadings: 95,
  units: 'kWt',
  mode: 'double',
};

const waterUserData = {
  wReadings: 3,
  units: 'm3',
};

const elRate: number = 0.45;
const wRate: number = 2;

const monthPayments: number[] = [0, 0];

const calcPayments = (
  {
    elReadings,
    mode,
  }: {
    elReadings: number;
    mode: string;
  },
  {
    wReadings,
  }: {
    wReadings: number;
  },
  elRate: number,
  wRate: number
): void => {
  if (mode === 'double' && elReadings < 50) {
    monthPayments[0] = elReadings * elRate * 0.7;
  } else {
    monthPayments[0] = elReadings * elRate;
  }
  monthPayments[1] = wReadings * wRate;
};

calcPayments(electUserData, waterUserData, elRate, wRate);

const sendInvoice = (
  monthPayments: number[],
  electUserData: {
    elReadings: number;
    units: string;
    mode: string;
  },
  waterUserData: {
    wReadings: number;
    units: string;
  }
) => {
  const text = `
    Hellow! This month you used ${electUserData.elReadings} ${electUserData.units} of elecetrcity
    It will cost: ${monthPayments[0]}$
    Hellow! This month you used ${waterUserData.wReadings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}$
    `;

  return text;
};

console.log(sendInvoice(monthPayments, electUserData, waterUserData));
