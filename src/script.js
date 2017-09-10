import fn from './script2';

console.log('script.js');

export class Component {
  static get version() {
    return '0.0.0';
  }

  constructor() {
    console.log(fn());
  }

  get relevant() {
    return false;
  }

  foobar() {
    return fn();
  }
}
