/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

//для анотации обьектов вместо type можно искользовать interface
interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
}
interface Role {
  role: string;
}
/// для обьекдинение с interface используют оператор extends, после перечелсяют название interface которые хотим обьединить.
/// так же с помощью {} можно задать новые анотации, внутри обьединеных двух или несколько
interface ConfigRole extends Config, Role {
  //   test: string;
}
const serverConfig: ConfigRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
};

// const backupConfig: ConfigRole = {
//   protocol: 'http',
//   port: 3000,
//   role: 'user',
// };

type StartFunc = (protocol: 'http' | 'https', port: 3000 | 3001) => string;

const startServer: StartFunc = (protocol, port) => {
  if (port === 3001) {
    console.log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port');
  }

  return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port);
