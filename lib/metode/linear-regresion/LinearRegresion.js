/**
 *
 * this file is single method of PHP Weight Product
 *
 *
 * @author      Eka Jaya Nagara <ekabersinar@gmail.com>
 * @copyright   Copyright (c), 2022 naagaraa metode skripsi linear regresion for javascript
 * @license     MIT public license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

"use strict";

class LinearRegresion {
  x = [];
  n;
  x2 = [];
  y2 = [];
  xy = [];
  const_a;
  const_b;
  regresion;

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

  /**
   *
   * @returns number
   */
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
      return constanta_a;
    }
  }

  /**
   *
   * @returns number
   */
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
      return constanta_b;
    }
  }

  /**
   *
   * @param {array} x_parameter
   * @param {array} y_parameter
   * @param {number} parameter_prediction_y
   * @returns string
   */
  LinearRegresion_x(
    x_parameter = [],
    y_parameter = [],
    parameter_prediction_y = 0
  ) {
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
    LinearRegresion.regresion =
      (parameter_prediction_y + -1 * LinearRegresion.const_a) /
      LinearRegresion.const_b;

    return LinearRegresion.regresion.toFixed(2);
  }

  /**
   *
   * @param {array} x_parameter
   * @param {array} y_parameter
   * @param {number} parameter_prediction_x
   * @returns string
   */
  LinearRegresion_y(
    x_parameter = [],
    y_parameter = [],
    parameter_prediction_x = 0
  ) {
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
    LinearRegresion.regresion =
      LinearRegresion.const_a +
      LinearRegresion.const_b * parameter_prediction_x;

    return LinearRegresion.regresion.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_valuex2() {
    return LinearRegresion.x2.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_valuey2() {
    return LinearRegresion.y2.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_valueXY() {
    return LinearRegresion.xy.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_const_a() {
    return LinearRegresion.const_a.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_const_b() {
    return LinearRegresion.const_b.toFixed(2);
  }

  get_n_value() {
    return LinearRegresion.n.toFixed(2);
  }

  /**
   *
   * @returns string
   */
  get_regresion() {
    return LinearRegresion.regresion.toFixed(2);
  }
}

// export class
module.exports = LinearRegresion;
