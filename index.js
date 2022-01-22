const LinearRegresion = require("./lib/metode/LinearRegresion");

// varaibel x adalah rata rata suhu
var x = [
  24, 22, 21, 20, 22, 19, 20, 23, 24, 25, 21, 20, 20, 19, 25, 27, 28, 25, 26,
  24, 27, 23, 24, 23, 22, 21, 26, 25, 26, 27,
];
// variabel y adalah jumlah cacat
var y = [
  10, 5, 6, 3, 6, 4, 5, 9, 11, 13, 7, 4, 6, 3, 12, 13, 16, 12, 14, 12, 16, 9,
  13, 11, 7, 5, 12, 11, 13, 14,
];

let metode = new LinearRegresion();
metode.x_kuadrat(x);
metode.y_kuadrat(y);
metode.xy_sum(x, y);
console.log(metode.constant_a());
console.log(metode.constant_b());
console.log(metode.LinearRegresion_x(x, y, 30));

// x.forEach(element => {
//    console.log(element);
// });
