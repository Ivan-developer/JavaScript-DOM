// Insert, move, clone and remove

const list = document.querySelector('.topics');

const newItemText = 'Node.js';

const item = document.createElement('li');
item.className = 'topics';
item.textContent = newItemText;

list.append(item);
list.prepend(item);
list.insertBefore(item, list.children[1]);
list.children[0].before(item);
list.children[0].after(item);
item.remove();
list.append(item);
list.append(item.cloneNode(true));


