"use strict";
// 名前空間
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    MyMath.calcCircum = function (diameter) { return diameter * PI; };
})(MyMath || (MyMath = {}));
