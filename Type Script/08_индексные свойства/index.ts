/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//Индексные свойсва
//если мы имеем какойто обьект, с одинаковыми свойсвасми, то для аннотации мы можем использовать аннотацию масива (шаблон внутри шаблона)

interface ConfigStyles {
  [key: string]: string;
}
const styles: ConfigStyles = {
  possition: 'absolute',
  top: '20px',
};

// interface Config {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
//   log: (msg: string) => void;
// }
// interface Role {
//   role: string;
// }

// interface ConfigRole extends Config, Role {
//   //   test: string;
// }
// const serverConfig: ConfigRole = {
//   protocol: 'https',
//   port: 3001,
//   role: 'admin',
//   log: (msg: string): void => console.log(msg),
// };

// type StartFunc = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3001,
//   log: Function
// ) => string;

// const startServer: StartFunc = (
//   protocol: 'http' | 'https',
//   port: 3000 | 3001,
//   log: Function
// ): 'Server started' => {
//   if (port === 3001) {
//     log(`Server started on ${protocol}://server:${port}`);
//   } else {
//     console.error('Invalid port');
//   }

//   return 'Server started';
// };
// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
