"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 名前空間
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    MyMath.calcCircum = function (diameter) { return diameter * PI; };
})(MyMath || (MyMath = {}));
exports.default = MyMath;
