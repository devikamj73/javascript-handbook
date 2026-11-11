// ---------- STORAGE (behind an interface) ----------
// The rest of the app only calls storage.load() and storage.save().
// To persist across refresh later, swap this for a localStorage version.
function createMemoryStorage() {
  let data = null;
  return {
    load() { return data; },
    save(newData) { data = newData; },
  };
}

const storage = createMemoryStorage();

// ---------- STATE ----------
const state = storage.load() ?? { todos: [], nextId: 1 };

// ---------- LOGIC (no DOM code in here) ----------
function cleanText(title) {
  return title.trim().split(/\s+/).join(" ");
}

function isDuplicate(title) {
  const target = title.toLowerCase();
  return state.todos.some(t => t.title.toLowerCase() === target);
}

// Returns { ok: true } or { ok: false, error: "reason" }
function addTask(title) {
  const clean = cleanText(title);
  if (!clean) return { ok: false, error: "Task cannot be empty." };
  if (isDuplicate(clean)) return { ok: false, error: "This task already exists." };

  state.todos.push({ id: state.nextId++, title: clean, isComplete: false });
  return { ok: true };
}

function deleteTask(id) {
  state.todos = state.todos.filter(t => t.id !== id);
}

function toggleStatus(id) {
  const todo = state.todos.find(t => t.id === id);
  if (todo) todo.isComplete = !todo.isComplete;
}

function getRemainingTaskCount() {
  return state.todos.filter(t => !t.isComplete).length;
}

// ---------- UI ----------
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const tCount = document.getElementById("task-count");
const tError = document.getElementById("task-error");

function showError(message) {
  tError.textContent = message;
}

function createTodoItem(todo) {
  const li = document.createElement("li");
  li.className = "todo-item" + (todo.isComplete ? " completed" : "");
  li.dataset.id = todo.id;

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.className = "todo-checkbox";
  checkBox.checked = todo.isComplete;

  const title = document.createElement("span");
  title.className = "todo-title";
  title.textContent = todo.title;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "todo-delete-btn";
  deleteBtn.textContent = "Delete task";

  li.append(checkBox, title, deleteBtn);
  return li;
}

function render() {
  list.replaceChildren(...state.todos.map(createTodoItem));
  tCount.textContent = `${getRemainingTaskCount()} task(s) left`;
}

// Every data change goes through here: save, then redraw
function update() {
  storage.save(state);
  render();
}

// ---------- EVENTS ----------
form.addEventListener("submit", (e) => {
  e.preventDefault();               // stop the browser from reloading the page
  const result = addTask(input.value);

  if (result.ok) {
    input.value = "";
    showError("");
    update();
  } else {
    showError(result.error);
  }
  input.focus();
});

// Clear the error as soon as the user starts typing again
input.addEventListener("input", () => showError(""));

// Event delegation: one listener handles every item's checkbox and delete button
list.addEventListener("click", (e) => {
  const item = e.target.closest(".todo-item");
  if (!item) return;
  const id = Number(item.dataset.id);

  if (e.target.matches(".todo-delete-btn")) {
    deleteTask(id);
    update();
  } else if (e.target.matches(".todo-checkbox")) {
    toggleStatus(id);
    update();
  }
});

// ---------- INIT ----------
render();