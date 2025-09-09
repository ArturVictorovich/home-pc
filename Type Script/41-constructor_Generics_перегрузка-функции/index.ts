/// tsc fileName.ts - создание компилятора для TS
/// tsc --init - создание файла с конфигом из библиотеке ts-node

class Box {
  width: number;
  height: number;
  volume: number | undefined;
  content: string | undefined;
  constructor(width: number, volume?: number, content?: string) {
    this.width = width;
    this.volume = volume;
    this.content = content;
    this.height = 500;
  }
  calculateVolume(): void {
    if (!this.volume) {
      this.volume = this.height * this.width;
      console.log(`Обьем посылки ${this.volume}`);
    } else {
      console.log(`Обьем посылки ${this.volume}`);
    }
  }
  checkBox(transport: number): string;
  checkBox(transport: number[]): string;
  checkBox(transport: number | number[]): string {
    if (typeof transport === 'number') {
      return transport >= this.width ? 'Ok' : 'not Ok';
    } else {
      return transport.some((trans) => trans >= this.width) ? 'Ok' : 'not Ok';
    }
  }
  get boxContent() {
    return this.content;
  }
  set boxContent(value) {
    this.content = `Date ${new Date().toTimeString()}, Content: ${value}`;
  }
}

const firstBox = new Box(250);
console.log(firstBox.checkBox([140, 150, 254]));
console.log((firstBox.boxContent = 'Test'));
