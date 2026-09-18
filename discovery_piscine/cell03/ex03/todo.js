const ftList = document.getElementById("ft_list");
const newBtn = document.getElementById("new");

/* ---------- STORAGE ---------- */
function save(data) {
    try {
        document.cookie =
            "todos=" + encodeURIComponent(data) +
            ";max-age=31536000;path=/";
    } catch (e) {}
    localStorage.setItem("todos", data);
}

function load() {
    const cookies = document.cookie.split("; ");
    for (let c of cookies) {
        const [k, v] = c.split("=");
        if (k === "todos")
            return decodeURIComponent(v);
    }
    return localStorage.getItem("todos");
}

/* ---------- CORE ---------- */
function saveTodos() {
    const todos = [];
    document.querySelectorAll(".todo").forEach(t =>
        todos.push(t.textContent)
    );
    save(JSON.stringify(todos));
}

function createTodo(text, saveFlag = true) {
    const div = document.createElement("div");
    div.className = "todo";
    div.textContent = text;

    div.onclick = () => {
        if (confirm("Remove this TO DO?")) {
            div.remove();
            saveTodos();
        }
    };

    ftList.prepend(div);
    if (saveFlag) saveTodos();
}

function loadTodos() {
    const data = load();
    if (!data) return;

    const todos = JSON.parse(data);
    for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i], false);
    }
}

/* ---------- EVENTS ---------- */
newBtn.onclick = () => {
    const text = prompt("New TO DO:");
    if (text && text.trim() !== "")
        createTodo(text.trim());
};

loadTodos();
