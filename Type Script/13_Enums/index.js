/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
//Разберем структуру ENUM на примере функции для анмимации
//аргумент tFunc может применять только ограниченные параметры, enum конструкция сущесвует для того что бы перечислить возможные комбинации для парамтера tFunc, вмессто знакомого нам конструкции с аннотацией через интерфейс или типы  через оператор |
//Каждому элементу ENUM можно задать значение, но если не указывать значения, по умолчанию они будут назначены сами 0 - 1 - 2 ...
//Если же значения есть, но не у всех, то след значение по умолчанию начнеться с исходя из предыдущего значения.
//enum быввают либо ТОЛЬКО числовые, либо ТОЛЬКО строковые
// числовые ENUM могут выполнять вычисления
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 0] = "TOP";
    Directions[Directions["RIGHT"] = 0] = "RIGHT";
    Directions[Directions["LEFT"] = 1] = "LEFT";
    Directions[Directions["BOTTOM"] = 2] = "BOTTOM";
})(Directions || (Directions = {}));
//в стрковых enum нельзя выполнять вычисления через ` `
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease_in";
    TimingFunc["LINEAR"] = "lenear";
})(TimingFunc || (TimingFunc = {}));
var frame = function (elem, dir, tfunc) {
    console.log(dir, tfunc);
};
frame('id', Directions.RIGHT, TimingFunc.EASE_IN);
//enum структура для формирования конкретных переменных для фукнциий, бывают либо числовые, либо строковые, при компеляции формируют функции с данными, обращайся через const - вовсе исчезают и в js передают только выбранную позицию, не формируя функцию(не рекомендуется использовать)
