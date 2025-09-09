"use strict";
/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
//Для работы с class, TS будет требовать внутри классов конструктор, но если же мы специально не прописывам его, то можно пофиксить это:
// поставить ! после свойства
/// или
/// залезть в конфиг
class Box {
    width;
    height;
    constructor(width) {
        this.width = width;
        this.height = 500;
    }
}
const firstBox = new Box(12);
console.log(firstBox);
