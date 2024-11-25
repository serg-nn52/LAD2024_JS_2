// console.log(navigator);

// alert('Привет мир!');

// console.log(window.history);

// console.log(window.location);

// console.log(window.screen);

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.send();

// console.log(document.documentElement);

// const list = document.getElementById('list');
// [...list.children][1].style.color = 'red';
// console.log([...list.children]);

// const items = document.getElementsByClassName('item');
// items[0].style.color = 'aqua';

// const items = document.querySelectorAll('.item');
// const list = document.querySelector('#list');
// const title = document.querySelector('h1');
// title.style.backgroundColor = 'grey';

// console.log(title);
// title.innerHTML = 'New <span>DOM</span>';
// title.innerText = 'New DOM';
// title.outerHTML = '<h2>New DOM</h2>';

// console.log(title.className);
// title.className = 'test';

// console.log(title.classList);

// title.classList.add('added-class');

// title.classList.remove('new-title');

// title.addEventListener('click', () => {
//   title.classList.toggle('red');
// });

// console.log(title.classList.contains('title12'));

// const info = document.createElement('div');
// info.classList.add('title');
// info.innerText = 'Info';
// console.log(info);

// document.body.append(info);
// document.body.prepend(info);

// title.after(info);

// title.before(info);
// title.after(info.cloneNode(true));
// // document.body.innerHTML += info;
// document.body.append(title.cloneNode(true));

// const header = document.createElement('header');
// header.innerText = 'To Do List';
// header.classList.add('header');

// const container = document.createElement('div');
// container.classList.add('container');

// const input = document.createElement('input');

// const list = document.createElement('ul');

// const listItem1 = document.createElement('li');
// listItem1.innerText = 'Item 1';

// const listItem2 = document.createElement('li');
// listItem2.innerText = 'Item 2';

// const btn = document.createElement('button');
// btn.innerText = 'To Do';

// document.body.prepend(header);
// header.after(container);
// container.append(list);const header = document.createElement('header');
// header.innerText = 'To Do List';
// header.classList.add('header');

// const container = document.createElement('div');
// container.classList.add('container');

// const input = document.createElement('input');

// const list = document.createElement('ul');

// const listItem1 = document.createElement('li');
// listItem1.innerText = 'Item 1';

// const listItem2 = document.createElement('li');
// listItem2.innerText = 'Item 2';

// const btn = document.createElement('button');
// btn.innerText = 'To Do';

// document.body.prepend(header);
// header.after(container);
// container.append(list);
// list.append(listItem1);
// list.append(listItem2);

// container.append(input);
// container.append(btn);

// const onClick = () => {
//   console.log('click');
//   btn.removeEventListener('click', onClick);
// };

// btn.addEventListener('click', onClick);

// input.addEventListener('focus', () => {
//   console.log('focus');
// });

// input.addEventListener('input', () => {
//   console.log('input');
// });

// btn.addEventListener('click', onClick);
// function onClick() {
//   console.log('click');
//   console.log(this.innerHTML);
// }

// [...list.childNodes].forEach((el) =>
//   el.addEventListener('click', function () {
//     console.log(this.innerHTML);
//   }),
// );

// const inputData = document.createElement('div');
// input.before(inputData);

// input.addEventListener('input', (event) => {
//   console.log(event.target.value);
//   inputData.innerText = event.target.value;
// });
// listItem1.addEventListener('click', (event) => {
//   event.stopPropagation();
//   console.log('item', event);
// });

// list.addEventListener('click', (event) => {
//   console.log('list', event.target, event.currentTarget);
// });

// document.body.addEventListener('click', () => {
//   console.log('body');
// });

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//   event.preventDefault();
// });

// const form = document.querySelector('.form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   console.log('submit');
// });

const btn = document.querySelector('.btn');

// let posts;

const list = document.querySelector('.list');
const loader = document.createElement('h2');
loader.innerText = 'Loading...';

// const fetchPosts = () => {
//   list.innerHTML = '';
//   list.after(loader);
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//       data.map((post) => {
//         const li = document.createElement('li');
//         li.innerText = post.title;
//         list.append(li);
//       });
//     })
//     .catch((e) => console.error('Ooops!', e))
//     .finally(() => {
//       loader.remove();
//     });
// };

let posts;

const createPost = (title) => {
  const li = document.createElement('li');
  li.innerText = title;
  list.append(li);
};

const fetchPosts = async () => {
  list.innerHTML = '';
  list.after(loader);
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
    posts.map((post) => {
      createPost(post.title);
    });
  } catch (e) {
    console.error('Ooops!', e);
  } finally {
    loader.remove();
  }
};

btn.addEventListener('click', fetchPosts);
