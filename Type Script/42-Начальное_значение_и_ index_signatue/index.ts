class Styles {
  [s: string]: string | ((s: string) => boolean);
}

const style = new Styles();
style.color = 'red';
style.font = 'Roboto';
