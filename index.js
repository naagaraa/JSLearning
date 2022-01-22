const LinearRegresion = require("./lib/metode/linear-regresion/LinearRegresion");
const SingleMovingAverage = require("./lib/metode/single-moving-average/SingleMovingAverage");


data = [
  { bulan: "januari", tahun: 2018, penjualan: 89 },
  { bulan: "februari", tahun: 2018, penjualan: 95 },
  { bulan: "maret", tahun: 2018, penjualan: 85 },
  { bulan: "april", tahun: 2018, penjualan: 75 },
  { bulan: "mei", tahun: 2018, penjualan: 86 },
  { bulan: "juni", tahun: 2018, penjualan: 100 },
  { bulan: "juli", tahun: 2018, penjualan: 120 },
  { bulan: "agustus", tahun: 2018, penjualan: 95 },
  { bulan: "september", tahun: 2018, penjualan: 80 },
  { bulan: "oktober", tahun: 2018, penjualan: 92 },
  { bulan: "november", tahun: 2018, penjualan: 92 },
  { bulan: "desember", tahun: 2018, penjualan: 88 },
  { bulan: "januari", tahun: 2018, penjualan: 90 },
  { bulan: "februari", tahun: 2018, penjualan: 95 },
  { bulan: "maret", tahun: 2018, penjualan: 100 },
  { bulan: "april", tahun: 2018, penjualan: 102 },
  { bulan: "mei", tahun: 2018, penjualan: 100 },
  { bulan: "juni", tahun: 2018, penjualan: 104 },
];

let metode = new SingleMovingAverage;

// metode.normalisasi(data)

var obj = {
  1: 5,
  2: 7,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
};
var result = Object.keys(obj).map((key) => [Number(key), obj[key]]);

console.log(result);