let tasks = ["Azkar Sabah","Study Math","Read Quran"];
let list = document.getElementById("task-list");

function showTasks(){
  list.innerHTML = "";
  for(let i=0;i<tasks.length;i++){
    let li = document.createElement("li");
    li.textContent = tasks[i];
    li.onclick = () => li.classList.toggle("completed");
    list.appendChild(li);
  }
}

function addTask(){
  let input = document.getElementById("task-input");
  let newTask = input.value.trim();

  if(newTask !== ""){
    tasks.push(newTask);
    showTasks();
    alert("✅ Task added successfully: " + newTask);
    input.value = "";
  }else{
    alert("⚠️ Please write something first!");
  }
}

document.getElementById("add-btn").onclick = addTask;

showTasks();