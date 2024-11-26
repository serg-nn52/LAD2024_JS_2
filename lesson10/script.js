// document.cookie = 'user=Sergey';
// document.cookie = 'age=30';

// console.log(document.cookie);

// document.cookie = 'user=Sergey; max-age=3600';

// localStorage.setItem('name', 'Sergey');
// localStorage.setItem('age', 30);

// console.log(localStorage.getItem('name'));

// const car = {
//   model: 'BMW',
//   year: 2020,
// };

// localStorage.setItem('car', JSON.stringify(car));

// console.log(JSON.parse(localStorage.getItem('car')));

// sessionStorage.setItem('test', 'test');

// const promise = new Promise((res, rej) => res('Data'));
// const promise = new Promise((res, rej) => rej('Error'));

// console.log(promise);

//const promise = new Promise((res, rej) => res('Good data'));

// promise
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err))
//   .finally(() => console.log('end'));

// const getResult = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log('end');
//   }
// };
// const promise = new Promise((res, rej) => res('promise'));

// console.log('start');
// setTimeout(() => console.log('timeout'), 1000);
// promise.then((data) => setTimeout(() => console.log(data), 0));
// console.log('finish');
// getResult();

// const delay = async (delay) => await new Promise((res, rej) => setTimeout(res, delay));

// const writeLogs = async () => {
//   console.log('log1');
//   await delay(5000);
//   console.log('log2');
// };

// writeLogs();

// const promise1 = new Promise((res, rej) => setTimeout(() => rej('promise1'), 1000));
// const promise2 = new Promise((res, rej) => setTimeout(() => res('promise2'), 3000));

// const result = Promise.allSettled([promise1, promise2])
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

// const promise = new Promise((res, rej) => res('promise'));

// console.log('start');
// setTimeout(() => console.log('timeout'), 1000);
// promise.then((data) => setTimeout(() => console.log(data), 0));
// console.log('finish');

// const err = new Error('My Error');

// throw { name: 'Error', message: 'Error Message' };

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
// xhr.onload = () => {
//   console.log(xhr.responseText);
// };
// xhr.send();

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
// });

// const createdPost = {
//   title: 'foo',
//   body: 'bar',
//   userId: 1,
// };

// const sendPosts = async (payload) => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
//       method: 'POST',
//       body: JSON.stringify(payload),
//     });
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// sendPosts(createdPost);

// const deletePost = async (id) => {
//   try {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//       method: 'DELETE',
//     });
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// deletePost(21);

// const dict = new Map([
//   ['err1', 'Ошибка1'],
//   ['err2', 'Ошибка2'],
// ]);

// dict.set('err3', 'Ошибка3');

// // console.log(dict.has('err10'));
// console.log(dict.entries());

const arr = [1, 2, 5, 4, 2, 4, 1, 6, 8];

const set = new Set(arr);
set.add(10);
set.add(1);
set.delete(5);

console.log(set.keys(), set.values());

console.log([...set]);
