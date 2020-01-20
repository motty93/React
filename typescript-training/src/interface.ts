// interface 仮引数に宣言
interface NamedPerson {
  name: string;
  age?: number; //ageがあってもなくてもよいとき?付きで宣言する
  [prepName: string]: any; //prepNameはなんでもいい
  greet(lastName: string): void;
}
const greet = (person: NamedPerson): void => {
  console.log('こんにちは' + person.name + '!');
};
const person: NamedPerson = {
  name: 'たろう',
  // age: 30,
  hobbies: ['game', 'sports'],
  greet(lastName: string) {
    console.log('こんにちは' + lastName + this.name);
  },
};
const changeName = (person: NamedPerson) => {
  person.name = 'gonbe';
};
// greet({name: 'taro', age: 39});
greet(person);
changeName(person);
greet(person);

// interfaceを使う場合はimplements
// 継承する場合はextends
class Person2 implements NamedPerson {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet(lastName: string) {
    console.log('こんにちは' + lastName + this.name);
  }
}

const myPerson = new Person2('誰かさん');
greet(myPerson);
myPerson.greet('どこかの');
