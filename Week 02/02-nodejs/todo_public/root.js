const createTodosButton = document.querySelector("#createTodo");
const todoSpace = document.querySelector("#todosSpace");
const listElement = document.createElement("ol");

function renderTodos(arr) {
    listElement.innerHTML = "";
    let list_items = "";
    for (todo of arr) {
        list_items += `<li id="todo_${todo.id}"> Title: ${todo.title} <br>
         Description: ${todo.description} <button id="delete_${todo.id}" class="delete"> delete </button> <button id="edit_${todo.id}" class="edit"> edit </button>  </li>`;
    }
    listElement.innerHTML = list_items;
    todoSpace.appendChild(listElement);

    const deleteButtons = document.getElementsByClassName("delete");
    Array.from(deleteButtons).forEach((btn) =>
        btn.addEventListener("click", handleDelete)
    );

    const editButtons = document.getElementsByClassName("edit");
    Array.from(editButtons).forEach((btn) =>
        btn.addEventListener("click", renderPreEdit)
    );
}

function fetchAndRenderTodos() {
    fetch("http://localhost:3000/todos", { method: "GET" })
        .then((data) => data.json())
        .then((data) => {
            renderTodos(data);
        })
        .catch((err) => console.error("Error:", err));
}

function handleCreateTodo(e) {
    let title = document.querySelector("#title").value;
    let description = document.querySelector("#desc").value;

    fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
            completed: "false",
        }),
        headers: { "Content-Type": "application/json" },
    }).then((resp) => {
        if (resp.status === 400) {
            resp.text().then((data) => {
                if (data === "Empty title") {
                    alert("Enter a Valid Title");
                }
            });
        } else {
            fetchAndRenderTodos();
        }
    });
}

function handleDelete(btn) {
    let taskId = btn.target.id.split("_")[1];

    fetch(`http://localhost:3000/todos/${taskId}`, {
        method: "DELETE",
    }).then((data) => {
        fetchAndRenderTodos();
    });
}

function renderPreEdit(btn) {
    let targetId = btn.target.id.split("_")[1];
    let updateDiv = document.createElement("div");
    updateDiv.innerHTML = `
        <div>
        <br>
        <label for="updateTitle_${targetId}">Title</label>
        <input type="text" id="updateTitle_${targetId}" />
        <label for="updateDesc_${targetId}">Description</label>
        <input type="text" id="updateDesc_${targetId}" />

        <button id="updateTodo_${targetId}">Update Todo</button>
        <br> <br>
        </div>
    `;

    let currTodo = document.querySelector(`#todo_${targetId}`);
    currTodo.replaceWith(updateDiv);

    const updateButton = document.querySelector(`#updateTodo_${targetId}`);
    updateButton.addEventListener("click", handleEdit);
}

function handleEdit(btn) {
    let targetId = btn.target.id.split("_")[1];
    let title = document.querySelector(`#updateTitle_${targetId}`).value;
    let description = document.querySelector(`#updateDesc_${targetId}`).value;

    fetch(`http://localhost:3000/todos/${targetId}`, {
        method: "PUT",
        body: JSON.stringify({
            title,
            description,
            completed: "false",
        }),
        headers: { "Content-Type": "application/json" },
    }).then((resp) => {
        if (resp.status === 400) {
            resp.text().then((data) => {
                if (data === "Empty title") {
                    alert("Enter a Valid Title");
                }
            });
        } else {
            fetchAndRenderTodos();
        }
    });
}

createTodosButton.addEventListener("click", handleCreateTodo);

fetchAndRenderTodos();
