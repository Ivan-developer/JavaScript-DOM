// Todo List - сортировка задач
// JAVASCRIPT Урок 24. Работа с датами
// Добавьте возможность создавать дела и отмечать как выполненные / не выполненные

// Основные требования:
// 1. Дизайн в файле design.png
// 2. Как начальный код использовать решение из первого домашнего задания урока 22
// 3. Выполненные задачи должны быть внизу, активные внизу
// 4. Выполненные задачи должны сортироваться по дате выполнения (только что завершенная задача должна быть вверху)
// 5. Не выполненные (активные) задачи должны сортироваться по дате добавления (самые новые вверху)
// 6. Рекомендация по реализации: когда добавляете / изменяете задачу - сперва добавьте / обновите соответствующий элемент в массиве, где вы храните задачи. После заново отрисуйте весь список в соответствии с обновленным массивом

let tasks = [
    { text: 'Buy milk', done: false, dateStart: new Date(2020, 1, 15), dateEnd: undefined, id: 5 },
    { text: 'Pick up Tom from airport', done: false, dateStart: new Date(2020, 1, 14), dateEnd: undefined, id: 4 },
    { text: 'Visit party', done: false, dateStart: new Date(2020, 1, 13), dateEnd: undefined, id: 3 },
    { text: 'Visit doctor', done: true, dateStart: new Date(2020, 1, 12), dateEnd: new Date(2020, 1, 12), id: 2 },
    { text: 'Buy meat', done: true, dateStart: new Date(2020, 1, 11), dateEnd: new Date(2020, 1, 11), id: 1 },
];

function createNewTask() {
    if (task.value == '') return;
    const newTask = {
        text: task.value,
        done: false,
        dateStart: new Date(),
        dateEnd: undefined,
        id: tasks.length,
    }
    tasks.push(newTask);
    renderListItems(tasks);
    task.value = '';
};
const task = document.querySelector('.task-input');
const createTaskButton = document.querySelector('.create-task-btn');
createTaskButton.addEventListener('click', createNewTask);

const listElem = document.querySelector('.list');

function renderListItems(allTask) {
    listElem.innerHTML = '';
    const listItemElems = allTask
        .sort((a, b) => {
            if (a.done - b.done !== 0) {
                return a.done - b.done;
            }
            if (a.done) {
                return new Date(b.dateEnd) - new Date(a.dateEnd);
            }
            return new Date(b.dateStart) - new Date(a.dateStart);
        })
        .map(({ text, done, id }) => {
            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            const cheboxElem = document.createElement('input');
            cheboxElem.setAttribute('type', 'checkbox');
            cheboxElem.checked = done;
            if (done) { listItemElem.classList.add('list__item_done'); };
            cheboxElem.classList.add('list__item-checkbox');
            listItemElem.append(cheboxElem, text);
            listItemElem.setAttribute('id', id);
            listElem.addEventListener('click', getChecked);
            return listItemElem;
        });
    listElem.append(...listItemElems);
};

function getChecked(event) {
    const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
    task.done = event.target.checked;
    task.dateEnd = task.done ? new Date() : undefined;
    renderListItems(tasks);
};

renderListItems(tasks);

  
// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha256-WAgYcAck1C1/zEl5sBl5cfyhxtLgKGdpI3oKyJffVRI=" crossorigin="anonymous" />
//     <link rel="stylesheet" href="style.css">
// </head>

// <body>
//     <h1 class="title">Todo List</h1>
//     <main class="todo-list">
//         <div class="actions">
//             <input class="task-input" type="text">
//             <button class="btn create-task-btn">Create</button>
//         </div>
//         <ul class="list"></ul>
//     </main>
//     <script src="index.js"></script>
// </body>
// <script src="index.js"></script>

// </html>

// * {
//     font-family: 'Arial';
//     box-sizing: border-box;
// }

// .title {
//     font-size: 24px;
//     text-transform: uppercase;
//     font-weight: 700;
//     text-align: center;
//     margin-bottom: 0;
// }

// .todo-list {
//     max-width: 600px;
//     background-color: coral;
//     margin: auto;
//     margin-top: 16px;
//     padding: 8px;
//     border-radius: 8px;
// }

// .list {
//     margin: 0;
//     padding: 0;
//     list-style-type: none;
//     margin: auto;
//     width: 100%;
// }

// .list__item {
//     height: 40px;
//     background-color: wheat;
//     margin-bottom: 8px;
//     padding: 8px;
//     border-radius: 8px;
//     display: flex;
//     align-items: center;
// }

// .list__item_done {
//     opacity: 0.7;
//     text-decoration: line-through;
// }

// .list__item:last-child {
//     margin-bottom: 0;
// }

// .list__item-checkbox {
//     margin-right: 8px;
// }

// .task-input {
//     height: 32px;
//     padding-left: 16px;
//     border: 3px solid #ccc;
//     border-radius: 8px;
//     width: 100%;
// }

// .btn {
//     height: 32px;
//     min-width: 64px;
//     margin-left: 16px;
//     border: 3px solid #ccc;
//     outline: none;
//     border-radius: 8px;
//     margin-left: 16px;
// }

// .actions {
//     display: flex;
//     margin-bottom: 8px;
// }