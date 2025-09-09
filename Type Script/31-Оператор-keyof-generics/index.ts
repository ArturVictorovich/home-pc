/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//оператор keyof - добирается до всех ключей обьекта и дает доступ к ним путем приведения их к литералу
interface ICompany {
  name: string;
  debts: number;
}
type ComKeys = keyof ICompany;
const key: ComKeys = 'debts';

//<T, K extends keyof T> - K - отсылает нас к "ключ", оператор keyof получит юнион тип из обьекта T, ограничивая параметры свойсвами из обьекта, тем самым типизируя их
function printDebts<T, K extends keyof T, S extends keyof T>(
  company: T,
  name: K,
  debts: S
) {
  console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}
///Функция стала универсальной, она принимат любой обьект и с нужными свойсвами
const hh: ICompany = {
  name: 'HH',
  debts: 50000,
};

printDebts(hh, 'name', 'debts');
