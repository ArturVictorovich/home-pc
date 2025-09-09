/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

// Анотации методов
interface Config {
  protocol: 'http' | 'https';
  port: 3000 | 3001;
  log: (msg: string) => void;
}
interface Role {
  role: string;
}

interface ConfigRole extends Config, Role {
  //   test: string;
}
const serverConfig: ConfigRole = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  log: (msg: string): void => console.log(msg),
};

type StartFunc = (
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: Function
) => string;

const startServer: StartFunc = (protocol, port, log) => {
  if (port === 3001) {
    log(`Server started on ${protocol}://server:${port}`);
  } else {
    console.error('Invalid port');
  }

  return 'Server started';
};
startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);
