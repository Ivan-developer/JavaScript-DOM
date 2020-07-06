// innerHTML vs createElement

const texts = ["HTML/CSS", "JavaScript", "React/Redux"];

const rootElement = document.getElementById("root");

// создаем список

// const list = document.createElement('ul');

// list.className = 'topics';

// rootElement.append(list)

// for (let text of texts){
//     const item = document.createElement('li');
//     item.className = 'topics';
//     item.textContent = text;

//     list.append(item)
// }

rootElement.innerHTML = `
    <ul class="topics">
    ${texts
      .map(
        (text) => `
    <li class="topic">
    ${text}
    <span>*<span>
    </li>
    `
      )
      .join("")} 
    </ul>
`;
