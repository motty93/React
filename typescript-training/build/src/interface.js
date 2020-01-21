"use strict";
var greet = function (person) {
    console.log('こんにちは' + person.name + '!');
};
var person = {
    name: 'たろう',
    // age: 30,
    hobbies: ['game', 'sports'],
    greet: function (lastName) {
        console.log('こんにちは' + lastName + this.name);
    },
};
var changeName = function (person) {
    person.name = 'gonbe';
};
// greet({name: 'taro', age: 39});
greet(person);
changeName(person);
greet(person);
// interfaceを使う場合はimplements
// 継承する場合はextends
var Person2 = /** @class */ (function () {
    function Person2(name) {
        this.name = name;
    }
    Person2.prototype.greet = function (lastName) {
        console.log('こんにちは' + lastName + this.name);
    };
    return Person2;
}());
var myPerson = new Person2('誰かさん');
greet(myPerson);
myPerson.greet('どこかの');
var myDoubleFunction;
myDoubleFunction = function (val1, val2) { return (val1 + val2) * 2; };
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    name: 'johndoe',
    greet: function (lastName) {
        console.log('こんにちは' + lastName + this.name);
    },
    age: 35,
};
console.log(oldPerson);
// interfaceはコンパイル時に削除されてしまう
