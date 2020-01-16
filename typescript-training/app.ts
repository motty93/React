let myName: string = 'もてぃ';
let num: number = 1;

let car: any = 'BMW';
car = {brand: 'BMW'};

// 配列
let hobbies: any[] = ['読書', 'スポーツ'];
hobbies[0] = '100';
hobbies.push(true);
// hobbies = 100

// タプル 型が２つ以上ある配列のこと
let olympic: [string, number] = ['東京', 2020];

// 列挙型 - enum
enum Colors {
  Gray, // 0
  Green = 100, // 1
  Blue, // ...
}
let myColor: Colors = Colors.Green;
console.log(myColor);

let myName2 = '太郎';
const returnMyName = (): string => myName2;

// void
const sayHello = (): void => {
  console.log(myName2);
};

const noReturn = (): never => {
  throw new Error('error');
};

// never以外の値を受け付けなくなる
let something: never;
// something = 0

// オブジェクト型
interface MyObj {
  foo: string;
  bar: number;
}

const a: MyObj = {
  foo: 'foo',
  bar: 2,
};

console.log(a.foo);

const multiply = (val1: number, val2: number): number => {
  return val1 * val2;
};

console.log(multiply(23, 1));

// 定義する際は引数は何でも良い
let myFunctionType: (val1: number, val2: number) => number;
// myFunctionType = sayHello;
// myFunctionType();
myFunctionType = multiply;
console.log(myFunctionType(23, 99));

let userData: {
  name: string;
  age: number;
} = {
  name: 'たろう',
  age: 20,
};
// 追加もできない
// userData['place'] = 'tokyo';

let Complex: {
  data: number[];
  output: (all: boolean) => number[];
} = {
  data: [123, 3, -1],
  output: function(all: boolean): number[] {
    return this.data;
  },
};

// alias
type Complex = {
  data: number[];
  output: (all: boolean) => number[];
};

let complex2: Complex = {
  data: [1231, 123, 4213],
  output: function(flag: boolean): number[] {
    return this.data;
  },
};

// union型
let thisYear: number | string = '2019';
thisYear = 2019;

const checkLength = (str: string | null): number => {
  return str != null ? str.length : 0
};
