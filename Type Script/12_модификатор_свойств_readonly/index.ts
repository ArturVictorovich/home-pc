//для того что бы защитить какие либо данные от перезаписи
// в TS используется слово readonly
interface User { 
  readonly login: string;
  pass: string;
  age: number;
  //   addres?: string;
  addres: string | undefined;
  parrents?: { father?: string; mother?: string };
}

const user: User = {
    //свойсво логин нельзя перезаписать
  login: 'acc',
  pass: '1234',
  age: 12,
  addres: '_',
};
//так же можно защитить весь ссылочный тип от изменения 
const ports: readonly number[] = [3000, 1111, 1232,]

const ports[0] = 12 //будет невозможным