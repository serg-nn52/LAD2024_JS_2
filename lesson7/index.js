// const tenArr = [5, 1, 1, 5, 1, 5];

// function howManyItems(array) {
//   let sum = 0;
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//     count++;
//     if (sum <= 10 && i === array.length - 1) {
//       return 'Сумма всех элементов массива меньше либо равна 10';
//     }
//     if (sum > 10) {
//       return count;
//     }
//   }
// }

// console.log(howManyItems(tenArr));

// const city = {
//   cityName: 'Minsk',
//   population: '2000000',
//   getCityName() {
//     return this.cityName;
//   },
//   getPopulation() {
//     return this.population;
//   },
// setProperty(property, value) {
//     if (!this[property]) return 'Такого свойства нет!';
//     this[property] = value;
//     return this;
//   },
//   getName: function () {
//     return this.cityName;
//   },
// };

// console.log(city.getName());

// let user1 = { name: 'Вася' };
// let user2 = { name: 'Петя' };

// function say(phrase) {
//   console.log(`${this.name} : ${phrase} `);
// }

// say.apply(user1, ['Привет']); // Вася : Привет
// say.call(user2, 'И тебе привет'); // Петя : И тебе привет

// const sayVasya = say.bind(user1, 'Привет');

// sayVasya();

// const city = {
//   cityName: 'Minsk',
//   population: '2000000',
//   getCityName() {
//     return this.cityName;
//   },
//   getPopulation() {
//     return this.population;
//   },
//   setProperty(property, value) {
//     if (!this[property]) return 'Такого свойства нет!';
//     this[property] = value;
//     return this;
//   },
//   getName: function () {
//     return this.cityName;
//   },
// };

// const otherCity = {
//   cityName: 'NN',
//   population: '1300000',
// };

// console.log(city.getCityName.call(otherCity));

// const setNNPopulation = city.setProperty.bind(otherCity, 'population', 3000000);

// console.log(setNNPopulation());

// function example() {
//   let closure = 100;
//   return function (b) {
//     return (closure = closure + b);
//   };
// }

// const sum1 = example();
// console.log(sum1(1));
// console.log(sum1(20));
// console.log(sum1(30));

// function calculate(h = 10) {
//   return function (l, w) {
//     return l * w * h;
//   };
// }

// const calculateFixHeightTen = calculate(10);
// const calculateFixHeightTwenty = calculate(20);

// console.log(calculateFixHeightTen(5, 3));
// console.log(calculateFixHeightTen(10, 20));

// console.log(calculateFixHeightTwenty(5, 3));

// function example(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(example(5)(3)(1));
