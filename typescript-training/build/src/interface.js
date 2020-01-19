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
