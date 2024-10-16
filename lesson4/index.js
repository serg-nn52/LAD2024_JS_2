// function showMessage(message) {
//   console.log(`${message}-наше сообщение`);
// }

// const hello = 'Привет!';

// showMessage(hello);

// sum(1, 5);

// function sum(a, b = 0) {
//   console.log(a + b);
// }

// function getName() {
//   return 'Сергей';
// }

// function sayHi(text, name = getName()) {
//   console.log(`${text} ${name}`);
// }

// sayHi('Привет');

// console.log(typeof getName());

// const userName = getName();

// console.log(showMessage('Test'));
// let text = 'Hi!';

// function sayHi() {
//   text = 'Hello!';
// }

// sayHi();
// console.log(text);

// function createHello(name = 'Гость') {
//   console.log('Привет ' + name);
// }

// createHello();

// function multiply(a, b = 1) {
//   return a ** b;
// }

// console.log(multiply(4, 2));

// function calculateAverage(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(calculateAverage([1, 2, 3]));

// let showText = function (text = 'default') {
//   console.log(text);
// };

// // showText();

// let func = showText; // нет вызова, только присвоили значение

// func(); // вызов копии функции, хранящейся в переменной
// showText(); // вызов самой функции

// let sum = (a, b) => a + b;
// const sum_2 = (a, b = 1) => {
//   return a + b;
// };

// console.log(sum(3, 2));

// const multiply = (a) => a * 2;

// function sayHi() {
//   console.log('Hello!!!');
// }

// setTimeout(() => console.log('Hello!!!'), 2000);

// const showString = (string, n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(string);
//   }
// };
// showString('string', 3);

// const checkLetter = (letter) => {
//   if (
//     letter === 'a' ||
//     letter === 'e' ||
//     letter === 'y' ||
//     letter === 'u' ||
//     letter === 'o' ||
//     letter === 'i' ||
//     letter === 'a'
//   ) {
//     return true;
//   } else return false;
// };

// const checkLetter = (letter) => {
//   const vowelLetters = ['a', 'e', 'y', 'u', 'o', 'i', 'a'];
//   return vowelLetters.includes(letter);
// };

// console.log(checkLetter('a'));

const str = 'Анна';

const checkIsPalindrome = (string) => {
  return (
    string.toLowerCase().replaceAll(' ', '') === string.toLowerCase().replaceAll(' ', '').split('').reverse().join('')
  );
};

console.log(checkIsPalindrome(str));
