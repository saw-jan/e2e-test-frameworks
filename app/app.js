const todos = [];
const doneTodos = [];

const removeElEvent = new CustomEvent("remove", {
  bubbles: true,
});

window.addEventListener("DOMContentLoaded", function () {
  var inputText = "";
  const addBtn = document.getElementById("add");
  const todoList = document.getElementById("todo-list");
  const emptyText = document.getElementById("empty-todo");
  const todoInput = document.getElementById("input-todo");

  addBtn.addEventListener("click", function () {
    if (!!inputText) {
      // add todo
      todos.push(inputText);

      if (todos.length > 0) {
        // hide empty text
        emptyText.classList.add("hide");
      }
      // clear todos
      todoList.innerHTML = "";
      // add todos
      todos.forEach(function (todo, index) {
        const todoEl = document.createElement("div");
        todoEl.setAttribute("class", "list");
        todoEl.setAttribute("id", "l" + index);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("id", "check" + index);
        const text = document.createElement("span");
        text.setAttribute("id", "txt" + index);
        text.innerText = todo;
        const btnRemove = document.createElement("button");
        btnRemove.setAttribute("id", "btn" + index);
        btnRemove.setAttribute("type", "button");
        btnRemove.setAttribute("class", "btn-remove");
        btnRemove.innerText = "X";

        todoEl.appendChild(checkbox);
        todoEl.appendChild(text);
        todoEl.appendChild(btnRemove);
        todoList.appendChild(todoEl);

        const todoCheck = document.getElementById("check" + index);
        const todoTxt = document.getElementById("txt" + index);
        const todoRemove = document.getElementById("btn" + index);

        if (doneTodos.includes(index)) {
          todoCheck.checked = true;
          todoTxt.style.textDecoration = "line-through";
        }

        todoRemove.addEventListener("click", function () {
          todoEl.remove();
          todos.splice(index, 1);
          document.dispatchEvent(removeElEvent);
        });

        todoCheck.addEventListener("click", function (e) {
          if (e.target.checked) {
            if (!doneTodos.includes(index)) {
              todoTxt.style.textDecoration = "line-through";
              doneTodos.push(index);
            }
          } else {
            todoTxt.style.textDecoration = "none";
            if (doneTodos.includes(index)) {
              curIndex = doneTodos.indexOf(index);
              doneTodos.splice(curIndex, 1);
            }
          }
        });
      });
    }
    todoInput.value = "";
    inputText = "";
  });

  todoInput.addEventListener("change", function (e) {
    inputText = e.target.value;
  });
  todoInput.addEventListener("keydown", function (e) {
    inputText = e.target.value;
    if (e.key === "Enter") {
      addBtn.click();
    }
  });

  document.addEventListener("remove", function () {
    if (todos.length === 0) {
      emptyText.classList.remove("hide");
      todoList.appendChild(emptyText);
    }
  });
});
