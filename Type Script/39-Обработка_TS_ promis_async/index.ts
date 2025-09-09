/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node
const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

let toDoLsit: ToDo[] = [];
try {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if ('id' in json) {
        toDoLsit.push(json);
      } else if (Array.isArray(json)) {
        toDoLsit = json;
      } else {
        console.log('интересно');
      }
      console.log(toDoLsit);
    });
} catch (error) {
  console.log(error);
}

//////Promise<Resolve>

const promise = new Promise<number>((res, rej) => {
  res(122);
});
console.log(promise);
//дженерик который позволяет присвоить тип данных промису, для дальнейшей удобной его бработки
promise.then((value) => {
  value.toFixed();
});

//// Awaited

type FromPromise = Awaited<Promise<number>>;

interface User {
  name: string;
}
async function fetchUsers(): Promise<User[]> {
  const user: User[] = [
    {
      name: 'Alex',
    },
  ];
  return user;
}

const users = fetchUsers();
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
