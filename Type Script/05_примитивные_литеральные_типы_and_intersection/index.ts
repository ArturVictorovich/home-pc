/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//TS можно задавать кастмные типы, для их строго использования в дальнейшем

const port3000 = 3000;
const port3001 = 3001;

//подобные аннотации в обьекте  помогают при передачи обьекта как парамтер, что бы содержимое внутри было строго определенного типа или вида(если это литерал)
// Для удобства литералы лучше выносить в type
type Config = {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
};
// для добавления нового свойсва аннотации для всех сущетсвующих обьектов можно использовать опертаор &
type Role = { role: string };
type ConfigWithRole = Config & Role;

const serverConfig: ConfigWithRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
};

const backupConfig: ConfigWithRole = {
  protocol: 'http',
  port: 3000,
  role: 'user',
};

//функциональная аннотация
type StartFunc = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunc = (
  protocol: 'http' | 'https',
  port: 3000 | 3001
): 'Server started' => {
  if (port === port3000 || port === 3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port');
  }

  return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);

//Углубление в работу с примитивными литералами
//псевдонимы функции через оператор type
type AnimationTimingFunc = 'ease' | 'ease-out' | 'ease-in';
type AnimationId = string | number;
const creareAnimation = (
  id: AnimationId,
  animName: string,
  timingFunc: AnimationTimingFunc = 'ease',
  duration: number,
  interCount: 'infinite' | number
): void => {
  // const elem = document.querySelector(`#${id}`) as HTMLElement
  // if (elem) {
  console.log(`${animName}${timingFunc}${duration}${interCount}`);
  // }
};

creareAnimation('id', 'fade', 'ease-in', 5, 'infinite');
