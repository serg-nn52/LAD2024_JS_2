// if ('a' === 'a') {
//   console.log('Ok!');
// }

// if ('a') {
//   console.log('Ok!');
// }

// if ('') {
//   console.log('Ok!');
// }

// if ('a' === 'a') console.log('Ok!');

// if ('a' === 'b') {
//   console.log('Ok!');
// } else {
//   console.log('Error!');
// }

// if ('a' === 'b') {
//   console.log('1');
// } else if ('c' === 'ca') {
//   console.log('2');
// } else if ('') {
//   console.log('3');
// } else {
//   console.log('Error!');
// }

// let age = 25;
// if (age < 18) {
//   console.log('Доступ запрещен!');
// } else if (age >= 18) {
//   console.log('Доступ разрешен!');
// } else {
//   console.log('Укажите свой возраст!');
// }

// if (age < 18) {
//   console.log('Доступ запрещен!');
// }

// if (age > 18) {
//   console.log('Доступ разрешен!');
// }

// if (!(age > 18) && !(age < 18)) {
//   console.log('Укажите свой возраст!');
// }

// let result = 'c' > 'b' ? true : false;

// let result;

// if ('a' > 'b') {
//   result = true;
// } else {
//   result = false;
// }

// console.log(result);

// const age = 14;

// switch (age) {
//   case 14: // value === value1
//     console.log('Получайте паспорт!');
//     break;
//   case 18: // value === value2
//     console.log('Меняйте паспорт в 18 лет!');
//     break;
//   case 45: // value === value2
//     console.log('Меняйте паспорт в 45 лет!');
//     break;
//   default:
//     console.log('Менять паспорт не требуется!');
//     break;
// }

// const a = 25;
// const b = 35;
// const c = 100;

// if (a > b) {
//   if (a > c) {
//     console.log(a);
//   }
// } else if (b > c) {
//   console.log(b);
// } else {
//   console.log(c);
// }

//console.log(Math.max(a, b, c));

// const temp = 26;

// if (temp <= -30) {
//   console.log('Оставайтесь дома');
// } else if (temp <= -10) {
//   console.log('Сегодня Холодно');
// } else if (temp <= 5) {
//   console.log('Не холодно');
// } else if (temp <= 15) {
//   console.log('Тепло');
// } else if (temp <= 25) {
//   console.log('Очень Тепло');
// } else if (temp < 35) {
//   console.log('Жарко');
// } else {
//   console.log('Пекло');
// }

// const role = 'admin';

// switch (role) {
//   case 'admin':
//     console.log('admin');
//     break;
//   case 'manager':
//     console.log('manager');
//     break;
//   case 'user':
//     console.log('user');
//     break;
//   default:
//     console.log('Роль не найдена!');
// }

// console.log('яблоко' && true && null && 1);
// console.log(typeof (0 || (true && 'false') || null));
// console.log((0 && true) || ('false' && null));
// console.log(!0 && !!1);
// console.log(!(null || (!'апельсин' && true)));

// do {
//   console.log('do-while');
// } while (false);

// let num = 10;

// while (num > 0) {
//   // num = num - 1;
//   console.log(num);
//   num -= 1;
// }

// for (let i = 0; i <= 3; i += 1) {
//   console.log(i); //0,1,2,3
// }
// let num = 10;
// while (num > 0) {
//   // num = num - 1;
//   console.log(num);
//   if (num === 5) break;
//   num -= 1;
// }

// while (num > 0) {
//   // num = num - 1;
//   num -= 1;
//   if (num === 5) continue;
//   console.log(num);
// }

// let count = 3;

// while (count > 0) {
//   console.log('string');
//   count--;
// }

// for (let i = 0; i < 3; i++) {
//   console.log('string for');
// }

// let i = 0;
// while (i < 1) {
//   console.log('ok');
//   i++;
// }

// for (let i = 1; i < 10; i++) {
//   console.log('hi');
// }

// let N = 10;
// const M = 6;
// let countDays = 0;

// while (true) {
//   countDays++;
//   console.log(countDays);
//   if (N < M) break;
//   N /= 2;
// }

// let n = 10;
// const m = 5;
// let i = 1;
// while (n >= m) {
//   i++;
//   console.log(i);
//   n = n / 2;
// }
