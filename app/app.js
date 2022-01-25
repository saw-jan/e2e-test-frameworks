const todos = []
const doneTodos = []
window.addEventListener('DOMContentLoaded', function () {
  var inputText = ''
  const addBtn = document.getElementById('add')
  const todoList = document.getElementById('todo-list')
  const emptyText = document.getElementById('empty-todo')
  const todoInput = document.getElementById('input-todo')

  addBtn.addEventListener('click', function () {
    if (!!inputText) {
      // add todo
      todos.push(inputText)

      if (todos.length > 0) {
        // hide empty text
        emptyText.style.display = 'none'
      }
      // clear todos
      todoList.innerHTML = ''
      // add todos
      todos.forEach(function (todo, index) {
        const todoEl = document.createElement('div')
        todoEl.setAttribute('class', 'list')
        todoEl.setAttribute('id', 'l' + index)
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check' + index)
        const text = document.createElement('span')
        text.setAttribute('id', 'txt' + index)
        text.innerText = todo

        todoEl.appendChild(checkbox)
        todoEl.appendChild(text)
        todoList.appendChild(todoEl)

        const todoCheck = document.getElementById('check' + index)
        const todoTxt = document.getElementById('txt' + index)
        if (doneTodos.includes(index)) {
          todoCheck.checked = true
          todoTxt.style.textDecoration = 'line-through'
        }
        todoCheck.addEventListener('click', function (e) {
          if (e.target.checked) {
            if (!doneTodos.includes(index)) {
              todoTxt.style.textDecoration = 'line-through'
              doneTodos.push(index)
            }
          } else {
            todoTxt.style.textDecoration = 'none'
            if (doneTodos.includes(index)) {
              curIndex = doneTodos.indexOf(index)
              doneTodos.splice(curIndex, 1)
            }
          }
        })
      })
    }
    todoInput.value = ''
    inputText = ''
  })

  todoInput.addEventListener('change', function (e) {
    inputText = e.target.value
  })
  todoInput.addEventListener('keydown', function (e) {
    inputText = e.target.value
    if (e.key === 'Enter') {
      addBtn.click()
    }
  })
})
