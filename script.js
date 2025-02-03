// Créez une application JavaScript qui permet de : 
// ●  Ajouter des tâches à une liste, en utilisant un input et un button. 
// ●  Supprimer une tâche. 

const addButton = document.querySelector('#add');
const taskInput = document.querySelector('#taskInput');
const taskList = document.querySelector('#taskList');
const searchInput = document.querySelector('#search');

/*Au click de Add*/
addButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    /*Task*/
    const taskParagraph = document.createElement("textarea");
    taskParagraph.value = taskText;
    taskParagraph.classList.add(
    "text-black",
    "w-full",
    "min-h-[50px]",
    "p-2",
    "overflow-auto",
    );
    /*Task*/

    /*Delete Button*/
    const delete_icon = document.createElement('i');
    delete_icon.classList.add('fas', 'fa-solid', 'fa-trash');

    const deleteButton = document.createElement("button");

    

    deleteButton.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });
    deleteButton.textContent = "Delete";
    deleteButton.classList.add(
    "bg-red-500",
    "text-white", 
    "px-4", "py-2",
    "rounded-lg",
    "hover:bg-red-700",
    "transition", "duration-300"
    );

    deleteButton.appendChild(delete_icon);
    /*Delete Button*/

    /*Div*/
    const taskItem = document.createElement("div");
    taskItem.classList.add(
    "flex",        
    "justify-between",
    "items-center",   
    "bg-gray-100",    
    "p-3",        
    "rounded-lg", 
    "w-full",
    "mb-2",
    );
    /*Div*/

    /*Check*/
    const checkButton = document.createElement("button")
    checkButton.addEventListener('click', function() {
        if (taskParagraph.hasAttribute("readonly")) {
            taskParagraph.removeAttribute("readonly");
            taskParagraph.classList.remove("line-through", "bg-gray-400", "text-gray-500");
            taskItem.classList.remove("bg-gray-400","border-5", "border-green-700"); 
        } else {
            taskParagraph.setAttribute("readonly", true);
            taskParagraph.classList.add("line-through", "bg-gray-400", "text-gray-500");
            taskItem.classList.add("bg-gray-400", "border-5", "border-green-700"); 
        }
    });

        /*Bouton*/
    checkButton.textContent = "Check"
    checkButton.classList.add(
    "bg-yellow-500",
    "text-white", 
    "px-4", "py-2",
    "rounded-lg",
    "hover:bg-yellow-700",
    "transition", "duration-300",
    "mr-3"
    );
        /*Bouton*/
    /*Check*/
    
    taskItem.appendChild(taskParagraph);
    taskItem.appendChild(checkButton);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);

    taskInput.value = ''; // Efface l'input apres ajout
});

/*Appuyer sur entrée*/
taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { 
        addButton.click();
    }
});
/*Appuyer sur entrée*/

/*Recherche*/
searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.toLowerCase();
    
    document.querySelectorAll('#taskList > div').forEach(taskItem => {
        const text = taskItem.querySelector('textarea').value.toLowerCase();
        taskItem.style.display = text.includes(searchText) ? 'flex' : 'none';
    });
});
/*Recherche*/



// ●  Marquer une tâche comme terminée. Rayer la tâche quand elle est marquée comme 
// terminée. Laisser la possibilité de repasser la tâche en non terminée.

