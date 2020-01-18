"use strict";
var greet = function (person) {
    console.log('こんにちは' + person.name + '!');
};
var person2 = {
    name: 'たろう',
    age: 30,
    hobbies: ["game", "sports"]
};
var changeName = function (person) {
    person.name = 'gonbe';
};
// greet(person2);
greet({ name: 'taro', age: 39 });
changeName(person2);
greet(person2);
