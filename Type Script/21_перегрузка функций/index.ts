/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

interface Square {
  side: number;
  area: number;
}
interface Rect {
  a: number;
  b: number;
  area: number;
}
// Перегрузка функции это подобное описание функции, которая принимает тип возвращаемой функцией union
//  перед самой функцией, котораяа позволяет обработать варинаты поступления параметров внутри нее, на примере того что функция может принимать либо один аргумент, либо два
function culcArea(side: number): Square;
function culcArea(a: number, b: number): Rect;
/////////
function culcArea(a: number, b?: number): Square | Rect {
  if (b) {
    const rect: Rect = {
      a,
      b,
      area: a * b,
    };
    return rect;
  } else {
    const square: Square = {
      side: a,
      area: a * a,
    };
    return square;
  }
}
// при обьявлении функции с перегрузкой TS будет подказывать, какие аргументы следует передать и какой исход запустится исходя из их количесва
culcArea(2);
culcArea(1, 3);

///Правила перегрузки
/// 1. Перегрузка обьявляется вначале основного тела функциии
/// 2. Аргументы могут отличаться от тела функции
/// 3. Все перегрузки должны быть совместимы с основной функциией (например быть одинаковые типы)
