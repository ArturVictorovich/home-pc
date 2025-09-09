/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

/// Indexed access types - это функция которая позволяет нам получить доступ к типу данных вложеных элементов интерфейса или обьекта

interface ICompany {
  name: string;
  dabts: number;
  department: Departments;
  managers: {
    name: string;
    age: number;
  };
}
interface Departments {
  [key: string]: boolean;
}

type IcompanyManagerType = ICompany['managers']['age']; ///осущесвляется доступ к типу любого свойсва
type SomeTypes = ICompany[keyof ICompany]; // получаем юнион тип всех свойств
type InterfaceInICompany = ICompany['department']; // тип другого интерфейса внутри
