/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
///constructor
//Constructor - всегда возвращает instans класса (является ли одна сущность экземпляром другой)
var Box = /** @class */ (function () {
    function Box(width) {
        this.width = width;
        this.height = 100;
    }
    return Box;
}());
var cub = new Box(250);
// перегрузка класса
var Boxing = /** @class */ (function () {
    function Boxing(widthOrVolume) {
        if (typeof widthOrVolume === 'number') {
            this.width = widthOrVolume;
        }
        else {
            this.volume = widthOrVolume;
        }
        this.height = 1000;
    }
    return Boxing;
}());
var secondBox = new Boxing(240);
/// дженерики в классах
var UserOk = /** @class */ (function () {
    function UserOk(name, age) {
        if (typeof age === 'string') {
            this.age = age;
        }
        else
            this.age = age;
        this.name = name;
    }
    return UserOk;
}());
var Mike = new UserOk('ff', 'ff');
///////////////
var BoxOne = /** @class */ (function () {
    function BoxOne(width, volume, content) {
        this.height = 250;
        this.width = width;
        this.volume = volume;
        this.content = content;
    }
    BoxOne.prototype.calcVolume = function () {
        if (!this.volume) {
            this.volume = this.width * this.height;
            console.log("\u041E\u0431\u044C\u0435\u043C \u043F\u043E\u0441\u044B\u043B\u043A\u0438 ".concat(this.volume));
        }
        else
            console.log("\u041E\u0431\u044C\u0435\u043C \u043F\u043E\u0441\u044B\u043B\u043A\u0438 ".concat(this.volume));
    };
    return BoxOne;
}());
var boxForYou = new BoxOne(122);
console.log(boxForYou.calcVolume());
