"use strict";
var myName = 'もてぃ';
var num = 1;
var car = 'BMW';
car = { brand: 'BMW' };
// 配列
var hobbies = ['読書', 'スポーツ'];
hobbies[0] = '100';
hobbies.push(true);
// hobbies = 100
// タプル 型が２つ以上ある配列のこと
var olympic = ['東京', 2020];
// 列挙型 - enum
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue";
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
var myName2 = '太郎';
var returnMyName = function () { return myName2; };
// void
var sayHello = function () {
    console.log(myName2);
};
var noReturn = function () {
    throw new Error('error');
};
// never以外の値を受け付けなくなる
var something;
var a = {
    foo: 'foo',
    bar: 2,
};
console.log(a.foo);
var multiply = function (val1, val2) {
    return val1 * val2;
};
console.log(multiply(23, 1));
// 定義する際は引数は何でも良い
var myFunctionType;
// myFunctionType = sayHello;
// myFunctionType();
myFunctionType = multiply;
console.log(myFunctionType(23, 99));
var userData = {
    name: 'たろう',
    age: 20,
};
// 追加もできない
// userData['place'] = 'tokyo';
var Complex = {
    data: [123, 3, -1],
    output: function (all) {
        return this.data;
    },
};
var complex2 = {
    data: [1231, 123, 4213],
    output: function (flag) {
        return this.data;
    },
};
// union型
var thisYear = '2019';
thisYear = 2019;
var checkLength = function (str) {
    return str != null ? str.length : 0;
};
// デフォルト引数
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    while (start > 0) {
        console.log(start);
        start--;
    }
    console.log('終了');
};
countDown();
// レスト演算子（スプレッド演算子）
var makeArray = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
};
console.log(makeArray(1, 2));
var printInfo = function () {
    var info = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        info[_i] = arguments[_i];
    }
    console.log(info[0] + ':' + info[1]);
};
console.log(printInfo('taro', 20));
// クラスとプロパティ
var Person = /** @class */ (function () {
    // public name: string;
    // private place: string;
    // protected age: number;
    function Person(name, place, age) {
        this.name = name;
        this.place = place;
        this.age = age;
        this.name = name;
        this.place = place;
        this.age = age;
    }
    return Person;
}());
var person = new Person('たろう', 'tokyo', 30);
console.log(person);
// 静的メンバ
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircum = function (diameter) {
        this.PI * diameter;
    };
    Helpers.PI = 3.12;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircum(93));
// singleton
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('the only one');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
// エラーになる
// let wrong = new OnlyOne('the only one');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = "変更しました"
