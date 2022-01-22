/**
 *
 * this file is single method of PHP Weight Product
 *
 *
 * @author      Eka Jaya Nagara <ekabersinar@gmail.com>
 * @copyright   Copyright (c), 2022 naagaraa metode skripsi single moving average for javascript
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

class SingleMovingAverage {
   history_data;
   normalisasi_data;
   hasil_peramalan;

   /**
    * 
    * @param {array} data 
    * @param {string} field 
    */
   normalisasi(data = [], field = ""){
      // save history data
      this.history_data = data;

      let array = Object.keys(data).map((key) => [Number(key), obj[key]]);
      console.log(array);

      // normalisasi
      let number = 0;
      data.forEach(value => {
         // if (typeof value == "number") {
         //    console.log("ini angka " + number++);
         // }else{
         //    console.log("ini bukan angka " + number++);
         // }
      });
   }

   /**
    * 
    * @param {array} data 
    * @param {string} field 
    * @param {number} pergerakan 
    */
   prosess(data = [], field = "", pergerakan = 6){

   }
}

module.exports = SingleMovingAverage;