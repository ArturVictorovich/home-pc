/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//Для превращения одного бьекта в другой в TS прибегают к создани функции

interface Departament {
  name: string;
  bugget: number;
}
//У нас есть обьект с данными
const departament = {
  name: 'web-dev',
  bugget: 50000,
};

//Интерфейс к обьекту который мы хотим создать динамически
interface Project {
  name: string;
  projBudget: number;
}
///создаем функцию которая будет создавать новый обьект, беря данные (не все) из старого обьекта и добавляя свои.
//при этом обрати внимание на аннтоациии. В параметре где передаем обьект, используем аннотацию обьекта, а сама функция получает аннотацию от интерфейса обьекта который хотим получить и эту же аннотацию указываем при укзаании аргумента
function transformDeprtment(departament: Departament, amount: number): Project {
  return {
    name: departament.name,
    projBudget: amount,
  };
}

const mainProdj: Project = transformDeprtment(departament, 4000);
