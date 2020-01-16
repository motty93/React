// 名前空間
namespace MyMath {
  const PI: number = 3.14;
  export const calcCircum = (diameter: number): number => diameter * PI;
  export const calcRect = (height: number, width: number): number =>
    height * width;
}

console.log(MyMath.calcCircum(3));
console.log(MyMath.calcRect(20, 3));
