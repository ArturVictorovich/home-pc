/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

////////////////////////////////////
enum StatusAnimal {
  Available = 'available',
  NotAvailable = 'not available',
}
type Animal = 'cat' | 'dog' | 'bird';

interface Request {
  animal: Animal;
  breed: string;
  sterilized?: string;
}
interface Response extends Request {
  location?: string;
  age: number;
}

interface ResponseAvailable {
  status: StatusAnimal.NotAvailable;
  data: Response;
}

interface ResponseNotAvailable {
  status: StatusAnimal.NotAvailable;
  data: {
    message: string;
    nextUpdateIn: Date;
  };
}

type res = ResponseNotAvailable | ResponseAvailable;

const isAvailable = (res: res): res is ResponseAvailable => 'available' in res;

function checkAnimalData(
  response: ResponseAvailable | ResponseNotAvailable
): string {
  if (isAvailable(response)) {
    return `${response}`;
  } else {
    return `${response}`;
  }
}
