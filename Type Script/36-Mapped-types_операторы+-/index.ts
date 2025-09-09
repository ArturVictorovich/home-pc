///Мы из учим мощный тип манипуляции типов, очень важная и сложная тема в TS

type Currendcies = {
  use: 'usd';
  china: 'cry';
  rus: 'rub';
  kz: 'tenge';
};
//из одного типа хотим сделать это
type CustomCurrencies = {
  use: string;
  china: string;
  rus: string;
  kz: string;
};

///Из типа summoners мы сделали нвоый тип напрямую зависящий от другого типа с ключачми и нужным видом строк
type Summoners = 'flash' | 'teleport' | 'heal' | 'ignite';
type TimerSummoners = {
  [K in Summoners]: number;
};

const cait: TimerSummoners = {
  flash: 14,
  teleport: 0,
  heal: 12,
  ignite: 2,
};
/////////////////////////////
///Что происходит книга?
///Создание новго type через дженерик.
type Currendcies1 = {
  use: 'usd';
  china?: 'cry';
  readonly rus: 'rub';
  kz: 'tenge';
};
///Создаем новый type, задаем идентификатор Т,
// После "говорим" что новый идентификатор P пусть получит имя ключей из type Currendcies1 по его идентификатору и сделает это через оператор keyof.
// После задаем ему значение string
// операторы + \ - добвляют или убирают модификаторы в новом типе обьекта

type CreateCustCurr<T> = {
  +readonly [P in keyof T]-?: string;
};
type CustomCurr = CreateCustCurr<Currendcies1>;

///////////////////////////template literal types
///Шаблонгные строки или интерполяция строк в TS, даже с onion типом
//есть особые встроенные джинерики которые могут изменять строчные литералы
type MyAnimation = 'fade' | 'swipe';
type Direction = 'in' | 'on';
type MyNewAnimation = `${MyAnimation}In${Capitalize<Direction>}`;

//////////////////////////////////////////////////////
////работа с модификацией отдельных ключей при создании нового типа
///воспользовавшись утверждениме типов через as, мы обновляем информацию внутри типа
//используя бектики мы все так же можем обратиться к внутреньему джинерику Capitalize<>,
//<> указать ссылку на P - имя свойсва внутри обьекта.
//Обязательно внутри <> мы строго указываем через string & P что P будет строкой!!
type CreateCustCurr2<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string;
};
type CustomCurr2 = CreateCustCurr2<Currendcies>;

////новые встроеные типы для изменения содержимого обьекта
/// Удаление валюты из списка стран
type CurrentWithoutUSA = Omit<Currendcies, 'use'>; ///первым параметром нужный нам тип, строку которую хотим удалить

/// Фильтрование типов
type CurrentUSAANDRussia = Pick<Currendcies, 'use' | 'rus'>;

/// удаление из union type
type FadeType = Exclude<MyAnimation, 'fade'>;
type CountresWithOutUSA = Exclude<keyof Currendcies, 'use'>;

//Выбирает типы по условию
type SwipeType = Extract<MyAnimation, 'swipe'>;

/// Создание новых type из разных type по типу ключ значение

type newChampion = 'q' | 'w';
type someAbility = {
  moreDmg?: string;
  excape?: string;
  niceButton?: string;
  niceUlte?: string;
};
type NiceChamp = Record<newChampion, someAbility>;
const mell: NiceChamp = {
  q: {
    moreDmg: 'eee',
    excape: 'fff',
    niceButton: 'ff',
  },
  w: {
    moreDmg: 'eee',
    excape: 'fff',

    niceUlte: 'ff',
  },
};
