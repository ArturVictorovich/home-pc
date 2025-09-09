/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

////ReturnType - возвращает и передает тип обьекта
function calculate(a: number, b: number): number {
  return a * b;
}

type CalculRT = ReturnType<typeof calculate>;

///Parametrs - возвращает картеж с типами параметров или конкретный параметр

type CalculatePT = Parameters<typeof calculate>;
type CalculatePTFirst = Parameters<typeof calculate>[0];

///ConstructorPArametrs - получение type из конструктора классов

class Exaple {
  constructor(a: number, b: boolean) {}
}

type T0 = ConstructorParameters<typeof Exaple>;
