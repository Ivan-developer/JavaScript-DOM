// insertAdjacentHTML vs innerHTML
/*

Проблема в том что innerHTML перерисовывает заново разметку html
и все сбрасывается!! допустим вод в input
innerHTML нарушает корректурную работу пользователя

есть решение и этот метод: insertAdjacentHTML(where, html);

который принимает два параметра:
1. куда именно будет вставлен
2. html разметку


*/

const list = document.querySelector(".topics");

const newItemText = "React";

// const item = document.createElement('li');
// item.className = 'topics';
// item.textContent = newItemText;

// list.append(item)

// Внимание += добавили

// list.innerHTML += `
//         <li class="topic">${newItemText}</li>
// `;

// setTimeout(()=>{
//     list.innerHTML += `
//         <li class="topic">${newItemText}</li>
// `;
// }, 3000)

setTimeout(() => {
  list.insertAdjacentHTML(
    "beforeend", // вставили вконец
    `
    <li class="topic">${newItemText}</li>
`
  );
}, 3000);

// += это означает

// list.innerHTML = list.innerHTML + `
//         <li class="topic">${newItemText}</li>
// `;
