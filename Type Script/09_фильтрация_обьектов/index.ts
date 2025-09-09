/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

// мы создаем аннтоацию обьекта, который должен приходить как аргумент функции,
//мы указываем эту структуру следующим образом
interface BasicConfig {
  protocol: string;
  port: number;
}

const serverConfig: BasicConfig = {
  protocol: 'http',
  port: 3000,
};

const backConfig: BasicConfig = {
  protocol: 'https',
  port: 3001,
};
///данный config подходит для анотации как и обькта который мы передаем как аргумент, так и параметры функции
const startServer = (config: BasicConfig): 'Server started' => {
  console.log(`Server started on ${config.protocol}://server:${config.port}`);

  return 'Server started';
};
startServer(serverConfig);
startServer(backConfig);
