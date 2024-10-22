// const field = 'car';
// const user = {};
// user.name = 'Ivan';
// user['user-age'] = 18;
// user[field] = 'BMW';

// console.log(user);

// const user = {
//   age: 18,
//   userName: 'Sergey',
// };

// delete user.age;
// user.userName = 'Ivan';

// console.log(user.car);

// const user = {
//   _userName: 'Sergey',
//   _userAge: 18,
//   get name() {
//     console.log('Было обращение к имени');
//     return this._userName;
//   },
//   set setUserAge(value) {
//     if (value < 18) {
//       console.log('Слишком маленький!');
//       return;
//     }
//     this._userAge = value;
//   },
//   sayName() {
//     console.log(this.userName);
//   },
// };
// user.setUserAge = 25;
// console.log(user);

// function getFilmName() {
//   console.log(this.filmName);
// }

// const myFavoriteFilm = {
//   filmName: 'Avengers',
//   date: '03.05.2012',
//   directorName: 'Джосс Уидон',
//   country: 'USA',
//   profit: 50000000,
//   getProfit() {
//     return this.profit;
//   },
//   getFilmName,
// };
// delete myFavoriteFilm.date;
// myFavoriteFilm.mainArtist = 'Джонни Депп';
// myFavoriteFilm.getFilmName();

// console.log(myFavoriteFilm);

// console.log(parseFloat('200.5px'));

// console.log(isNaN(NaN));

// console.log(isFinite(-Infinity));

// let num = 255;
// console.log( num.toString() );  // "255"
// console.log( num.toString(16) );  // ff
// console.log( num.toString(2) );   // 11111111

// let num = 12.86;

// // console.log(Math.floor(num));

// // console.log(+num.toFixed(1)); //string
// console.log(num.toFixed(3)); //string

// console.log(Math.random());

// console.log(Math.min(10, 5, 3));

// const str = 'test string';

// //console.log(str[0]);
// str[0] = 'f';

// console.log(str);

// console.log('Sergey \n\tMaria');

// console.log(str[55]);

// console.log('Ivan'.toUpperCase()); // IVAN
// console.log('Ivan'.toLowerCase()); // ivan
// console.log('    Ivan    '.trim().codePointAt(0) === 'I'.codePointAt(0)); // ivan

// let str = 'Widget with id';
// console.log(str.indexOf('id')); // 12

// let str = 'Widget with id';
// console.log(str.includes('id'));

// let str = 'test string';
// // console.log(str.slice(0, 4));
// // console.log(str.slice(-3));

// str = str.substring(1, 3);
// console.log(str);

// const randomNum = (min, max) => Math.round(min + Math.random() * (max - min));
// console.log(randomNum(1, 10));

// function checkRegister(str, n) {
//   return str[n].toUpperCase() === str[n];
// }

// console.log(checkRegister('sTr', 1));

// let str = 'test5 teSt3 test2';
// const find = 'es';
// const replace = 'ES';

// while (str.includes(find)) {
//   str = str.replace(find, replace);
// }
// const regExp = /[^a-zA-Z]/g;
// const regExp = /es/gi;
// str = str.replace(regExp, '');
// console.log(str);
// console.log(str.match(regExp));

// const regExp = /es/;
// let str = 'test5 teSt3 test2';
// console.log(regExp.test(str));

console.log(0.1 + 0.2);
