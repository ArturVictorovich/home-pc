/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
var url = 'https://jsonplaceholder.typicode.com/todos/1';
var toDoLsit = [];
try {
    fetch(url)
        .then(function (response) { return response.json(); })
        .then(function (json) {
        if ('id' in json) {
            toDoLsit.push(json);
        }
        else if (Array.isArray(json)) {
            toDoLsit = json;
        }
        else {
            console.log('интересно');
        }
        console.log(toDoLsit);
    });
}
catch (error) {
    console.log(error);
}
