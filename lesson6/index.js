// const arr = ['apple', 1, true, null];

// // console.log(Array.isArray(arr));
// arr[0] = 'banana';

// arr[10] = 'pineapple';
// // arr.length = 2;
// arr.name = 'Ivan';
// console.log(arr.length);

// let arr = new Array(5);

// console.log(arr);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[1][1]);

// const arr = [1, 2, 3];
// const str = String(arr);

// console.log(str);

// const numbers = [1, 2, 3, 4, 3];

// numbers.push(10, 20, 100);
// numbers.unshift(-10);

// numbers.pop();
// numbers.shift();

// console.log(numbers.indexOf(13));
// console.log(numbers.includes(13));

// let arr = [1, 2, 3, 4];
// let findElem = arr.find((e) => e === 3);

// const usersList = [
//   {
//     name: 'Ivan',
//     age: 25,
//     car: 'Audi',
//   },
//   {
//     name: 'Sergey',
//     age: 30,
//   },
// ];
// const findUser = usersList.find((el) => el.name === 'Ivan');

// console.log(findUser); // 3

// let arr = [1, 2, 3, 4];
// arr.forEach((e) => console.log(e));

// const newArr = arr.map((el, i, arr) => el);

// console.log(newArr === arr);

// const newArr = arr.filter((el) => el % 2 === 0);

// console.log(newArr);

// let arr = [[1], [2], [3], [4]];
// let result = arr.reduce((accum, current) => accum.concat(current), []);
// console.log(result); // 10

// const arr = [2, -9, 5, -22, 8];
// // const newArr = arr.reduce((acc, item) => (item % 2 === 0 && item > 0 ? acc + item : acc), 0);

// const sumEvenPositiveNumbers = (arr) => {
//   //   const result = arr.reduce((acc, item) => (item % 2 === 0 && item > 0 ? acc + item : acc), 0);
//   const result = arr.filter((el) => el % 2 === 0 && el > 0).reduce((acc, item) => acc + item, 0);
//   return result;
// };

// console.log(sumEvenPositiveNumbers(arr));

// const createUniqueArr = (arr) => {
//   const tempArr = [];
//   arr.forEach((el) => {
//     if (!tempArr.includes(el)) tempArr.push(el);
//   });
//   return tempArr;
// };

// console.log(createUniqueArr([10, 5, 4, 10, 2, 1, 5]));

// const checkEqualArrays = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false;
//   let result = true;
//   arr1.forEach((el, i) => {
//     if (arr2[i] !== el) result = false;
//   });
//   return result;
// };
// const checkEqualArrays2 = (arr1, arr2) => {
//   return String(arr1) === String(arr2);
// };

// console.log(checkEqualArrays([1, 2, 3], [1, 2, 3, 4]));

// const isIdentical = (arr1, arr2) => {
//   let tempResult = true;
//   if (arr1.length !== arr2.length) return false;
//   arr1.forEach((el, index) => {
//     if (arr2[index] !== el) tempResult = false;
//   });
//   return tempResult;
// };

// console.log(isIdentical([1, 2, 3], [1, 2, '3']));

// let firstObj = { a: 'Hello' };
// let secondObj = firstObj;
// firstObj.a = 'Goodbye';
// console.log(firstObj, secondObj); // { a : ‘Hello’ }, { a : ‘Hello’ };

// let firstObj = { a: 'Hello' };
//1 способ
// let secondObj = Object.assign({}, firstObj);
// console.log(firstObj === secondObj);

// let arr = [1, 2, 3];
// let newArr = [...arr, 4, 5, 6];
// console.log(newArr); // [1, 2, 3, 4, 5, 6]

//2 способ
// let obj = { a: 'Hello' };
// let newObj = { ...obj }; // новый объект, который будет ссылаться на новую область памяти
// //newObj.b = 'Hi!';
// console.log(obj === newObj); // { a : ‘Hello’}, { a : ‘Hello’, b: ‘Hi!’}

//3 способ

// const user = {
//   name: 'Ivan',
//   age: 25,
// };

// const userClone = JSON.parse(JSON.stringify(user));
// console.log(userClone === user);

// let example = (a, b, ...args) => {
//   console.log(args); // массив остаточных аргументов
//   return a + b;
// };

// console.log(example(1, 2, 4, 5, 6, 100));

// let arr = [1, 2];

// for (let variable of arr) {
//   console.log(variable * 10);
// }

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 10);
// }

// const user = {
//   name: 'Ivan',
//   age: 25,
// };

// for (let variable in user) {
//   console.log(variable);
// }
// console.log(Object.values(user));
// console.log(Object.keys(user));
// console.log(Object.entries(user));

// function sum(...arg) {
//   let result = 0;
//   for (let num of arg) {
//     if (num % 2 === 0) {
//       result += num;
//     }
//   }
//   return result;
// }

// console.log(sum(1, 2, 3, 4));

function fff(arr1, arr2) {
  const tempArr = [];
  for (let item of arr1) {
    if (arr2.includes(item) && !tempArr.includes(item)) {
      tempArr.push(item);
    }
  }
  return tempArr;
}

const arr1 = [2, 8, 7, 5, 2, 8, 3, 7];
const arr2 = [2, 8, 5, 2, 8, 100];

console.log(fff(arr1, arr2));
