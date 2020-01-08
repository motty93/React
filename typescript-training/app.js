"use strict";
var myName = "もてぃ";
var num = 1;
var car = 'BMW';
car = { brand: 'BMW' };
// 配列
var hobbies = ["読書", "スポーツ"];
hobbies[0] = "100";
hobbies.push(true);
// hobbies = 100
// タプル 型が２つ以上ある配列のこと
var olympic = ["東京", 2020];
// 列挙型 - enum
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; // ...
})(Colors || (Colors = {}));
var myColor = Colors.Green;
console.log(myColor);
var myName2 = "太郎";
var returnMyName = function () { return myName2; };
// void
var sayHello = function () {
    console.log(myName2);
};
var noReturn = function () {
    throw new Error("error");
};
// never以外の値を受け付けなくなる
var something;
var a = {
    foo: 'foo',
    bar: 2,
};
console.log(a.foo);
