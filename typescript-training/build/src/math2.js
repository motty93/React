"use strict";
// 名前空間
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    MyMath.calcRect = function (height, width) {
        return height * width;
    };
})(MyMath || (MyMath = {}));
