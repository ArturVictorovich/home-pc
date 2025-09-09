type Example = string extends string ? string : number;
const string: Example = 3;

type FromUser<T extends string | number> = T extends string
  ? Interface1
  : Interface2;

interface Interface1 {
  text: number;
}
interface Interface2 {
  text: string;
}

const mesasge: FromUser<string> = '2';

//////////////////////////////

function calcCalories(numOrStr: string | number): Interface1 | Interface2 {}
