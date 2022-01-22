"use strict";

class LinearRegresion {
  x = [];
  n=0;
  x2 = [];
  y2 = [];
  xy = [];
  const_a = 0;
  const_b = 0;
  regresion

  //   constructor() {
  //     this.x2 = this.x_kuadrat;
  //     this.y2 = this.y_kuadrat;
  //   }
  /**
   * method menghitung x kuadrat
   * @param {array} parameter_x
   * @returns
   */
  x_kuadrat(parameter_x = []) {
    if (parameter_x.length == 0) {
      return "tidak ada parameter x";
    }

    LinearRegresion.x = parameter_x;

    let x_2 = [];
    parameter_x.forEach((value) => {
      x_2.push(Math.pow(value, 2));
    });
    LinearRegresion.x2 = x_2;
    return x_2;
  }

  /**
   * method menghitung y kuadrat
   * @param {array} parameter_y
   * @returns
   */
  y_kuadrat(parameter_y = []) {
    if (parameter_y.length == 0) {
      return "tidak ada parameter y";
    }

    LinearRegresion.y = parameter_y;

    let y_2 = [];
    parameter_y.forEach((value) => {
      y_2.push(Math.pow(value, 2));
    });
    LinearRegresion.y2 = y_2;
    return y_2;
  }

  /**
   * method menghitung x dan yt
   * @param {array} parameter_x
   * @param {array} parameter_y
   * @returns
   */
  xy_sum(parameter_x = [], parameter_y = []) {
    if (parameter_x.length == 0 && parameter_y.length == 0) {
      return "parameter x atau y belum ada";
    }

    let xy = [];
    for (let index = 0; index < parameter_x.length; index++) {
      xy[index] = parameter_x[index] * parameter_y[index];
    }
    LinearRegresion.xy = xy;
    return xy;
  }

  constant_a() {
    let z1 =
      LinearRegresion.y.reduce((a, b) => a + b, 0) *
        LinearRegresion.x2.reduce((a, b) => a + b, 0) -
      LinearRegresion.x.reduce((a, b) => a + b, 0) *
        LinearRegresion.xy.reduce((a, b) => a + b, 0);
    let z2 =
      LinearRegresion.x.length * LinearRegresion.x2.reduce((a, b) => a + b, 0) -
      Math.pow(
        LinearRegresion.x.reduce((a, b) => a + b, 0),
        2
      );

    if (z2 == 0.0) {
      return "Cannot divide by zero constant b";
    } else {
      let constanta_a = z1 / z2;
      LinearRegresion.const_a = constanta_a;
      return constanta_a.toFixed(2);
    }
  }

  constant_b() {
    let z1 =
      LinearRegresion.x.length * LinearRegresion.xy.reduce((a, b) => a + b, 0) -
      LinearRegresion.x.reduce((a, b) => a + b, 0) *
        LinearRegresion.y.reduce((a, b) => a + b, 0);
    let z2 =
      LinearRegresion.x.length * LinearRegresion.x2.reduce((a, b) => a + b, 0) -
      Math.pow(
        LinearRegresion.x.reduce((a, b) => a + b, 0),
        2
      );

    if (z2 == 0.0) {
      return "Cannot divide by zero constant b";
    } else {
      let constanta_b = z1 / z2;
      LinearRegresion.const_b = constanta_b;
      return constanta_b.toFixed(2);
    }
  }

  LinearRegresion_x(x_parameter = [], y_parameter = [], parameter_prediction_y = 0){
      LinearRegresion.x = x_parameter;
      LinearRegresion.y = y_parameter;
      LinearRegresion.n = x_parameter.length;

        // hitung syarat
      this.x_kuadrat(x_parameter);
      this.y_kuadrat(y_parameter);
      this.xy_sum(x_parameter, y_parameter);

        //  find constanta a and b
      LinearRegresion.const_a = this.constant_a();
      LinearRegresion.const_b = this.constant_b();

      // rumus regresion y 
      LinearRegresion.regresion = (( parameter_prediction_y + ( -1 * LinearRegresion.const_a ) ) / LinearRegresion.const_b );

      return LinearRegresion.regresion;

  }
}

module.exports = LinearRegresion;
