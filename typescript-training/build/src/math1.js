"use strict";
// 名前空間
var MyMath;
(function (MyMath) {
    var Circum;
    (function (Circum) {
        var PI = 3.14;
        Circum.calcCircum = function (diameter) { return diameter * PI; };
    })(Circum = MyMath.Circum || (MyMath.Circum = {}));
})(MyMath || (MyMath = {}));
