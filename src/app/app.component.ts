import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  theme1: boolean = true;
  theme2: boolean = false;
  theme3: boolean = false;
  keys: Keys[] = [
    {
      key: 7,
      class: 'key',
    },
    {
      key: 8,
      class: 'key',
    },
    {
      key: 9,
      class: 'key',
    },
    {
      key: 'DEL',
      class: 'del',
    },
    {
      key: 4,
      class: 'key',
    },
    {
      key: 5,
      class: 'key',
    },
    {
      key: 6,
      class: 'key',
    },
    {
      key: '+',
      class: 'key',
    },
    {
      key: 1,
      class: 'key',
    },
    {
      key: 2,
      class: 'key',
    },
    {
      key: 3,
      class: 'key',
    },
    {
      key: '-',
      class: 'key',
    },
    {
      key: '.',
      class: 'key',
    },
    {
      key: 0,
      class: 'key',
    },
    {
      key: '/',
      class: 'key',
    },
    {
      key: 'x',
      class: 'key',
    },
  ];
  keys2: Keys[] = [
    {
      key: 'RESET',
      class: 'reset',
    },
    {
      key: '=',
      class: 'igual',
    },
  ];
  result: string = '0';
  values: number[] = [];
  value: number = 0;

  add: boolean = false;
  subtract: boolean = false;
  split: boolean = false;
  multiply: boolean = false;

  change() {
    if (this.theme1) {
      this.theme1 = false;
      this.theme2 = true;
      this.theme3 = false;
    } else if (this.theme2) {
      this.theme1 = false;
      this.theme2 = false;
      this.theme3 = true;
    } else {
      this.theme1 = true;
      this.theme2 = false;
      this.theme3 = false;
    }
  }

  calculate(valor: string | number) {
    if (this.result === '0') {
      this.result = '';
    }

    switch (valor) {
      case 1:
        this.result += valor.toString();
        break;

      case 2:
        this.result += valor.toString();
        break;

      case 3:
        this.result += valor.toString();
        break;

      case 4:
        this.result += valor.toString();
        break;

      case 5:
        this.result += valor.toString();
        break;

      case 6:
        this.result += valor.toString();
        break;

      case 7:
        this.result += valor.toString();
        break;

      case 8:
        this.result += valor.toString();
        break;
      case 9:
        this.result += valor.toString();
        break;

      case 0:
        this.result += valor.toString();
        break;

      case '.':
        if (!this.result.includes('.')) {
          this.result += valor.toString();
        }
        break;

      case '+':
        this.values.push(Number(this.result));
        if (this.subtract) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.subtract = false;
        } else if (this.split) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.split = false;
        } else if (this.multiply) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.multiply = false;
        } else if (this.add) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.add = false;
        }
        this.result = '0';
        console.log(this.values)
        this.add = true;
        break;

      case '-':
        this.values.push(Number(this.result));
        if (this.add) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.add = false;
        } else if (this.split) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.split = false;
        } else if (this.multiply) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.multiply = false;
        } else if (this.subtract) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.subtract = false;
        }
        this.result = '0';
        console.log(this.values)
        this.subtract = true;
        break;

      case '/':
        this.values.push(Number(this.result));
        if (this.add) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.add = false;

        } else if (this.subtract) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.subtract = false;

        } else if (this.multiply) {;
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.multiply = false;

        } else if (this.split) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.split = false;
        }
        this.result = '0';
        console.log(this.values)
        this.split = true;
        break;

      case 'x':
        this.values.push(Number(this.result));
        if (this.add) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.add = false;

        } else if (this.subtract) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.subtract = false;

        } else if (this.split) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.split = false;

        } else if (this.multiply) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.multiply = false;
        }
        this.result = '0';
        console.log(this.values)
        this.multiply = true;
        break;

      case 'DEL':
        this.result = this.result.substring(0, this.result.length - 1);
        if (this.result === '') {
          this.result = '0';
        }
        break;

      case 'RESET':
        this.values = [];
        this.result = '0';
        this.add = false;
        this.subtract = false;
        this.split = false;
        this.multiply = false;
        break;

      default:
        if (this.add) {
          this.values.push(Number(this.result));
          this.result = '0';
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.add = false;

        } else if (this.subtract) {
          this.values.push(Number(this.result));
          this.result = '0';
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.subtract = false;

        } else if (this.split) {
          this.values.push(Number(this.result));
          this.result = '0';
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.split = false;

        } else if (this.multiply) {
          this.values.push(Number(this.result));
          this.result = '0';
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.values.push(this.value);
          this.multiply = false;
        } else if (this.values = [] ) {
          this.result = 'Error';
        }
        this.result = this.values[0].toString();
        break;
    }
  }
}

interface Keys {
  key: string | number;
  class: string;
}
