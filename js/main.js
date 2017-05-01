// Main Todo Items
var todoItems = ["Homework","Buy food", "Play Terraria"];

// DoStuff Function
function doStuff() {
 for (var i = 0; i < todoItems.length; i++)
{
  todoItemStuff = "<li class='list_todo_items' onclick='checked(this)'>"
  + todoItems[i]
  + "<button onclick='remove(" + i + ")' class='remove'>x</button></li>";
  document.getElementById('todo_list').innerHTML += todoItemStuff;
}}

function show () {
  document.getElementById('todo_list').innerHTML = "";
  var inputValue = form.todo_input.value;
  doStuff();
}

// Add Function
function add(form) {
  var inputValue = form.todo_input.value;
  if (inputValue === '') {
    alert('Error "Nope": Try writing something')
  }
  else{
  todoItems.push(inputValue);
  document.getElementById('todo_list').innerHTML = "";
  show();
}}

// Remove Function
function remove(id) {
  todoItems.splice(id, 1);
  var buttons = document.getElementsByClassName('remove');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
}
  show();
}
// Check Function
function checked(tag) {
  tag.classList.toggle('active');
}
// Clear Function
function clearThis(target) {
  target.value = "";
}

// Sort Function
function sort() {
  todoItems.sort();
  document.getElementById('todo_list').innerHTML = "";
  doStuff();
}
// Reverse Function
function reverse() {
  todoItems.reverse();
  document.getElementById('todo_list').innerHTML = "";
  doStuff();
}
