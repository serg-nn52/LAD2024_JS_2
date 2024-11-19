// const createTimer = () => {
//   let count;
//   return (start, finish) => {
//     count = start;
//     const interval = setInterval(() => {
//       if (count < finish) {
//         console.log('Время вышло!');
//         clearInterval(interval);
//         return;
//       }
//       console.log(count);
//       count--;
//     }, 1000);
//   };
// };

// const timer = createTimer();
// const timer1 = createTimer();

// timer(3, 0);
// timer1(5, 0);

// const people = {
//   isTail: false,
// };
// const user = {
//   name: 'Sergey',
// };
// user.__proto__ = people;

// console.log(user);
// console.log(user.isTail);

// let user = {
//   name: 'Ivan',
// };
// let admin = {
//   __proto__: user, //скрытое св-во, мы задали объекту админ прототип user
// };
// console.log(admin.name); // Ivan

// let animal = {
//   jumps: 'Прыжок!',
// };

// let rabbit = {
//   __proto__: animal,
//   jumps: 'Заяц прыгнул!',
// };

// console.log(rabbit.jumps);

// delete rabbit.jumps;

// console.log(rabbit.jumps);

// delete animal.jumps;

// console.log(rabbit.jumps);

// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let firstUser = new CreateUser('Ivan', 21); // {name: “Ivan”, age: 21}
// let secondUser = new CreateUser('Alex', 18); // {name: “Alex”, age: 18}

// console.log(firstUser);
// console.log(secondUser);

// function CreateUser(name, age) {
//   this.name = name;
//   this.age = age;
// }
// CreateUser.prototype.sayHi = function () {
//   console.log('Меня зовут: ' + this.name);
// };

// CreateUser.prototype.isTail = false;
// // const people = {
// //   isTail: false,
// // };

// let firstUser = new CreateUser('Ivan', 21); // {name: “Ivan”, age: 21}
// // firstUser.__proto__ = people;
// let secondUser = new CreateUser('Alex', 18); // {name: “Alex”, age: 18}
// // secondUser.__proto__ = people;
// // secondUser.sayHi();
// console.log(secondUser.isTail);

// function CreateConvert(from, to) {
//   this.from = from;
//   this.to = to;
//   this.show = function () {
//     return this.from + ' - ' + this.to;
//   };
// }

// CreateConvert.prototype.changeFrom = function (value) {
//   this.from = value;
// };

// const card = new CreateConvert('NN', 'Minsk');
// card.changeFrom('Moscow');
// console.log(card.show());

// class Parent {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log('Меня зовут: ' + this.name);
//   }
// }

// const user = new Parent('Sergey');
// user.sayHi();
// console.log(user);

// class Animal {
//   constructor(name, isTail) {
//     this.name = name;
//     this.isTail = isTail;
//   }
//   sayName() {
//     console.log('Животное: ', this.name);
//   }
// }

// class Dog extends Animal {
//   constructor(name, age, isTail) {
//     super(name, isTail);
//     this.age = age;
//   }
// }

// const dog = new Dog('Sharik', 5, false);
// // dog.sayName();
// console.log(dog);

// class User {
//   get name() {
//     return this._name + ' пользователь';
//   }
//   set name(value) {
//     if (value.length < 5) {
//       console.log('Короткое имя');
//     } else {
//       this._name = value;
//     }
//   }
// }

// const user = new User();
// user.name = 'Ser';
// console.log(user);

class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName = function () {
    return this.surname + ' ' + this.name;
  };
}

class Worker extends People {
  constructor(name, surname, rate, day) {
    super(name, surname);
    this.rate = rate;
    this.day = day;
  }
  getSalary = function () {
    return 'Зарплата данного сотрудника: ' + this.day * this.rate;
  };
}

const worker1 = new Worker('Печкин', 'Даниил', 2500, 16);

console.log(worker1.getFullName());
