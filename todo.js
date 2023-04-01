// Récupération des éléments HTML
const newTaskInput = document.getElementById('search');
const taskList = document.getElementsByClassName('element1');

// Récupération des tâches existantes dans le localStorage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Fonction pour afficher la liste des tâches
function displayTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const taskElement = document.createElement('div');
    taskElement.textContent = task.title;

    const doneButton = document.createElement('button');
    doneButton.textContent = 'Terminé';
    doneButton.addEventListener('click', () => {
      taskElement.classList.add('done');
      task.done = true;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';
    deleteButton.addEventListener('click', () => {
      tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      displayTasks();
    });

    if (task.done) {
      taskElement.classList.add('done');
    }

    taskElement.appendChild(doneButton);
    taskElement.appendChild(deleteButton);
    taskList.appendChild(taskElement);
  });
}

// Ajout d'une nouvelle tâche
document.getElementsByClassName('element').addEventListener('submit', (event) => {
  event.preventDefault();

  const newTask = {
    title: newTaskInput.value,
    done: false,
  };

  tasks.push(newTask);
  localStorage.setItem('tasks', JSON.stringify(tasks));

  newTaskInput.value = '';
  displayTasks();
});

// Affichage initial de la liste des tâches
displayTasks();


var bouton = document.getElementsByClassName("options-button");
var liste = document.getElementsById("maListe");

bouton.addEventListener("mouseover", function() {
  liste.style.display = "block";
});

document.addEventListener("click", function(event) {
  if (event.target != bouton && event.target != liste) {
    liste.style.display = "none";
  }
});
