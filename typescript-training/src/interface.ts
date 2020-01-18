// interface 仮引数に宣言
interface NamedPerson {
  name: string;
  age?: number; //ageがあってもなくてもよいとき?付きで宣言する
  [prepName: string]: any; //prepNameはなんでもいい
}
const greet = (person: NamedPerson): void => {
  console.log('こんにちは' + person.name + '!');
};
const person2 = {
  name: 'たろう',
  age: 30,
  hobbies: ["game", "sports"]
};
const changeName = (person: NamedPerson) => {
  person.name = 'gonbe';
};
// greet(person2);
greet({name: 'taro', age: 39});
changeName(person2);
greet(person2);
