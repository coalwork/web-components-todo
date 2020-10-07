const form = document.getElementById('add-todo');
const container = document.getElementById('todo-container');

form.addEventListener('submit', (event) => event.preventDefault());
form.addEventListener('submit', async (event) => {
  const input = event.target.querySelector('[name=todo]');
  if (!input.value.trim().length) return;
  
  const todoText = input.value;
  const todo = await Todo.create();
  
  event.preventDefault();
  
  input.value = null;
  
  todo.setAttribute('value', todoText);
  container.append(todo);
});