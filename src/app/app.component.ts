import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  x = 'hola mundo';
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
  equal: boolean = false;

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
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 2:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 3:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 4:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 5:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 6:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 7:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 8:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;
      case 9:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
        break;

      case 0:
        if(this.equal) {
          this.result = valor.toString()
        } else  {
          this.result += valor.toString();
        } 
        this.equal = false;
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
        this.add = true;
        console.log(this.values)
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
        this.subtract = true;
        console.log(this.values)
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
        this.split = true;
        console.log(this.values)
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
        this.multiply = true;
        console.log(this.values)
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
       
        this.values.push(Number(this.result));
        if (this.add) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
          this.values = [];
          this.add = false;

        } else if (this.subtract) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue - currentValue
          );
          this.values = [];
          this.subtract = false;

        } else if (this.split) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue / currentValue
          );
          this.values = [];
          this.split = false;

        } else if (this.multiply) {
          this.value = this.values.reduce(
            (previousValue, currentValue) => previousValue * currentValue
          );
          this.values = [];
          this.multiply = false;
        } else if (this.values.length = 0 ) {
          this.result = 'ERROR';
        }

        this.result = this.value.toString();
        this.equal = true;
        console.log(this.values)
        break;
    }
  }
}

interface Keys {
  key: string | number;
  class: string;
}
